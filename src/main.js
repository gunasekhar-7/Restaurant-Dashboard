// TastyKart Partner Hub - Master Application Coordinator
import './styles/tokens.css';
import { branches, initialOrders, initialMenuItems, initialSettlements } from './data/mockData.js';
import { renderSidebar, attachSidebarEvents } from './components/Sidebar.js';
import { renderHeader, attachHeaderEvents } from './components/Header.js';
import { renderDashboardView, attachDashboardEvents } from './views/DashboardView.js';
import { renderLiveOrdersView, attachLiveOrdersEvents } from './views/LiveOrdersView.js';
import { renderMenuEditorView, attachMenuEditorEvents } from './views/MenuEditorView.js';
import { renderPayoutHistoryView, attachPayoutHistoryEvents } from './views/PayoutHistoryView.js';
import { showToast } from './components/Toast.js';
import { playOrderAlert } from './utils/audio.js';

// Central Reactive Application State
const state = {
  activeView: 'dashboard', // 'dashboard' | 'live-orders' | 'menu-editor' | 'payout-history'
  activeBranchId: 104,
  branches: [...branches],
  orders: [...initialOrders],
  menuItems: [...initialMenuItems],
  settlements: [...initialSettlements],
  
  // KDS View Filters
  kdsStageFilter: 'all',
  kdsViewMode: 'kanban',
  selectedOrderId: null,
  
  // Menu Editor Filters
  menuActiveCategory: 'all',
  menuActiveDiet: 'all',
  menuStockOnlyFilter: false,
  menuSearchQuery: '',

  // Payout View
  selectedSettlementId: null,

  // Global Flags
  kitchenPaused: false,
  searchQuery: ''
};

// Main DOM Container
const appRoot = document.getElementById('app');

function renderApp() {
  if (!appRoot) return;

  let mainContentHtml = '';
  if (state.activeView === 'dashboard') {
    mainContentHtml = renderDashboardView(state);
  } else if (state.activeView === 'live-orders') {
    mainContentHtml = renderLiveOrdersView(state);
  } else if (state.activeView === 'menu-editor') {
    mainContentHtml = renderMenuEditorView(state);
  } else if (state.activeView === 'payout-history') {
    mainContentHtml = renderPayoutHistoryView(state);
  }

  appRoot.innerHTML = `
    <!-- Persistent Collapsible Sidebar -->
    ${renderSidebar(
      state, 
      navigateToView, 
      handleBranchChange, 
      handleToggleAcceptingOrders
    )}

    <!-- Main Container -->
    <div class="pl-72 min-h-screen flex flex-col bg-[#f3fbf6]">
      
      <!-- Top Persistent Header -->
      ${renderHeader(state)}

      <!-- Main Stage Workspace -->
      <main class="w-full pt-20 px-8 flex-1">
        ${mainContentHtml}
      </main>

    </div>
  `;

  // Attach Event Handlers
  attachSidebarEvents(state, navigateToView, handleBranchChange, handleToggleAcceptingOrders);
  attachHeaderEvents(state, handleGlobalSearch, handleAddItem);

  if (state.activeView === 'dashboard') {
    attachDashboardEvents(state, navigateToView);
  } else if (state.activeView === 'live-orders') {
    attachLiveOrdersEvents(state, renderApp);
  } else if (state.activeView === 'menu-editor') {
    attachMenuEditorEvents(state, renderApp);
  } else if (state.activeView === 'payout-history') {
    attachPayoutHistoryEvents(state, renderApp);
  }
}

// Navigation Handler
function navigateToView(viewName) {
  state.activeView = viewName;
  state.selectedOrderId = null;
  state.selectedSettlementId = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// Branch Switcher Handler
function handleBranchChange(newBranchId) {
  state.activeBranchId = newBranchId;
  const branch = state.branches.find(b => b.id === newBranchId);
  showToast(`Switched active store branch to: ${branch.name}`);
  renderApp();
}

// Accepting Orders Master Toggle
function handleToggleAcceptingOrders() {
  const branch = state.branches.find(b => b.id === state.activeBranchId);
  if (branch) {
    branch.isAccepting = !branch.isAccepting;
    showToast(
      branch.isAccepting 
        ? `${branch.shortName} is now accepting online orders.` 
        : `${branch.shortName} has PAUSED incoming orders.`,
      branch.isAccepting ? 'success' : 'warning'
    );
    renderApp();
  }
}

// Global Search
function handleGlobalSearch(query) {
  state.searchQuery = query;
  const trimmed = query.trim().toLowerCase();
  
  if (trimmed) {
    // Check if query matches an order token
    if (trimmed.startsWith('#tk') || trimmed.startsWith('tk')) {
      state.activeView = 'live-orders';
      state.kdsStageFilter = 'all';
      renderApp();
      return;
    }
  }
}

// Add Item
function handleAddItem(newItem) {
  state.menuItems.unshift(newItem);
  renderApp();
}

// Real-Time Timers Simulation (every 1 second)
setInterval(() => {
  let stateChanged = false;

  // Tick incoming orders countdown
  state.orders.forEach(order => {
    if (order.status === 'incoming' && order.countdownSeconds > 0) {
      order.countdownSeconds -= 1;
      stateChanged = true;
      if (order.countdownSeconds === 10) {
        playOrderAlert();
      }
    } else if (order.status === 'cooking' && (order.timerMinutes > 0 || order.timerSeconds > 0)) {
      if (order.timerSeconds > 0) {
        order.timerSeconds -= 1;
      } else if (order.timerMinutes > 0) {
        order.timerMinutes -= 1;
        order.timerSeconds = 59;
      }
      stateChanged = true;
    }
  });

  // Only re-render if live orders view is active to update timer strings smoothly
  if (stateChanged && state.activeView === 'live-orders') {
    const kdsTimer = document.getElementById('kds-refresh-timer');
    if (kdsTimer) {
      const current = parseInt(kdsTimer.textContent) || 12;
      kdsTimer.textContent = current > 1 ? `${current - 1}s` : '15s';
    }
    // Update individual countdown elements without losing focus
    state.orders.forEach(order => {
      const card = document.querySelector(`.order-card[data-order-id="${order.id}"]`);
      if (card && order.status === 'incoming') {
        const badge = card.querySelector('.font-mono.font-bold');
        if (badge) badge.textContent = `${order.countdownSeconds}s`;
      }
    });
  }
}, 1000);

// Initialize Application
renderApp();
