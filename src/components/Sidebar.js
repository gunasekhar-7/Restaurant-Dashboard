// Persistent Responsive Navigation Sidebar
import { playClickTone, playSuccessChime } from '../utils/audio.js';
import { showToast } from './Toast.js';

export function renderSidebar(state, onNavigate, onBranchChange, onToggleAcceptingOrders) {
  const currentBranch = state.branches.find(b => b.id === state.activeBranchId) || state.branches[0];
  const activeOrdersCount = state.orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;

  return `
    <aside class="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto border-r border-[#dce5df]/60">
      <div class="p-5">
        <!-- Logo Header -->
        <div class="flex items-center gap-3 pb-6 border-b border-[#e2eae5]">
          <div class="w-10 h-10 rounded-xl bg-[#12382c] flex items-center justify-center text-white shrink-0 shadow-md">
            <span class="material-symbols-outlined text-[24px]">soup_kitchen</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold text-[#002218] leading-tight tracking-tight">TastyKart</span>
            <span class="text-xs text-[#414845] font-semibold tracking-wide uppercase">Partner Hub</span>
          </div>
        </div>

        <!-- Active Store Branch Switcher -->
        <div class="my-5 p-3 bg-white rounded-xl shadow-sm border border-[#e2eae5] relative">
          <label class="text-[11px] font-bold text-[#717974] block mb-1 uppercase tracking-wider">Active Store Branch</label>
          <div id="branch-select-btn" class="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-[#edf6f0] transition-colors cursor-pointer">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full ${currentBranch.isAccepting ? 'bg-[#12382c]' : 'bg-[#ba1a1a]'} shrink-0 ring-2 ring-[#c3ebda]"></span>
              <span class="text-xs text-[#151d1a] font-bold truncate">${currentBranch.name}</span>
            </div>
            <span class="material-symbols-outlined text-[#414845] text-[18px] shrink-0">unfold_more</span>
          </div>

          <!-- Dropdown Menu (Hidden by default) -->
          <div id="branch-dropdown" class="hidden absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-50 overflow-hidden">
            ${state.branches.map(b => `
              <div class="px-3 py-2 text-xs hover:bg-[#f3fbf6] cursor-pointer flex items-center justify-between ${b.id === state.activeBranchId ? 'bg-[#edf6f0] font-bold text-[#12382c]' : 'text-gray-700'}" data-branch-id="${b.id}">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${b.isAccepting ? 'bg-emerald-600' : 'bg-rose-500'}"></span>
                  <span>${b.shortName}</span>
                </div>
                <span class="text-[11px] text-gray-500">★ ${b.rating}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1.5" id="nav-container">
          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${state.activeView === 'dashboard' ? 'bg-[#12382c] text-white font-semibold shadow-md' : 'text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]'}" data-view="dashboard">
            <span class="material-symbols-outlined text-[20px]">space_dashboard</span>
            <span class="text-sm font-medium">Dashboard & Analytics</span>
          </a>

          <a class="nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${state.activeView === 'live-orders' ? 'bg-[#12382c] text-white font-semibold shadow-md' : 'text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]'}" data-view="live-orders">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px]">skillet</span>
              <span class="text-sm font-medium">Live Kitchen Feed</span>
            </div>
            <span class="px-2 py-0.5 rounded-full ${activeOrdersCount > 0 ? 'bg-[#fd9d1a] text-[#663b00]' : 'bg-gray-200 text-gray-600'} text-xs font-bold shadow-sm">
              ${activeOrdersCount}
            </span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${state.activeView === 'menu-editor' ? 'bg-[#12382c] text-white font-semibold shadow-md' : 'text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]'}" data-view="menu-editor">
            <span class="material-symbols-outlined text-[20px]">restaurant_menu</span>
            <span class="text-sm font-medium">Menu Catalog & Stock</span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${state.activeView === 'payout-history' ? 'bg-[#12382c] text-white font-semibold shadow-md' : 'text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]'}" data-view="payout-history">
            <span class="material-symbols-outlined text-[20px]">payments</span>
            <span class="text-sm font-medium">Payouts & Settlements</span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]" id="btn-customer-reviews">
            <span class="material-symbols-outlined text-[20px]">rate_review</span>
            <span class="text-sm font-medium">Customer Reviews</span>
            <span class="ml-auto text-xs bg-[#ffdcbc] text-[#683d00] font-bold px-1.5 py-0.5 rounded">4.5★</span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]" id="btn-store-settings">
            <span class="material-symbols-outlined text-[20px]">settings</span>
            <span class="text-sm font-medium">Kitchen Settings</span>
          </a>
        </nav>
      </div>

      <!-- Bottom Profile & Accepting Orders Switch -->
      <div class="p-5 border-t border-[#e2eae5]">
        <div class="p-3.5 bg-white rounded-xl shadow-sm border border-[#e2eae5] space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100">
            <span class="text-xs text-[#414845] font-semibold">Accepting Orders</span>
            <button id="sidebar-accepting-toggle" class="flex items-center gap-1.5 px-2.5 py-1 rounded-full ${currentBranch.isAccepting ? 'bg-[#c3ebda] text-[#002117]' : 'bg-[#ffdad6] text-[#93000a]'} text-xs font-bold transition hover:opacity-90">
              <span class="w-2 h-2 rounded-full ${currentBranch.isAccepting ? 'bg-[#12382c] animate-pulse' : 'bg-[#ba1a1a]'}"></span>
              <span>${currentBranch.isAccepting ? 'ON' : 'PAUSED'}</span>
            </button>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[#12382c] flex items-center justify-center text-white shrink-0 font-bold text-xs shadow-sm">
              NP
            </div>
            <div class="flex flex-col min-w-0">
              <span class="text-xs text-[#151d1a] font-bold truncate">${currentBranch.manager}</span>
              <span class="text-[11px] text-[#717974] truncate">Shift Manager</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `;
}

export function attachSidebarEvents(state, onNavigate, onBranchChange, onToggleAcceptingOrders) {
  // Navigation clicks
  document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', () => {
      playClickTone();
      const view = item.getAttribute('data-view');
      onNavigate(view);
    });
  });

  // Branch switcher toggle
  const selectBtn = document.getElementById('branch-select-btn');
  const dropdown = document.getElementById('branch-dropdown');
  if (selectBtn && dropdown) {
    selectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });

    dropdown.querySelectorAll('[data-branch-id]').forEach(bItem => {
      bItem.addEventListener('click', (e) => {
        e.stopPropagation();
        const branchId = parseInt(bItem.getAttribute('data-branch-id'), 10);
        dropdown.classList.add('hidden');
        playSuccessChime();
        onBranchChange(branchId);
      });
    });

    document.addEventListener('click', () => {
      dropdown.classList.add('hidden');
    });
  }

  // Accepting orders switch
  const toggleBtn = document.getElementById('sidebar-accepting-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      playSuccessChime();
      onToggleAcceptingOrders();
    });
  }

  // Reviews & Settings mock action
  const reviewsBtn = document.getElementById('btn-customer-reviews');
  if (reviewsBtn) {
    reviewsBtn.addEventListener('click', () => {
      showToast('Opening Customer Reviews: 4.5 Stars across 1,240+ verified patrons', 'info');
    });
  }

  const settingsBtn = document.getElementById('btn-store-settings');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      showToast('Kitchen Settings: Auto-printing enabled, Bluetooth thermal connected', 'info');
    });
  }
}
