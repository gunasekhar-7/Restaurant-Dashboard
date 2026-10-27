// Top Application Header Bar
import { isAudioMuted, toggleAudio, playClickTone } from '../utils/audio.js';
import { openNotificationsModal, getUnreadNotificationsCount } from './NotificationsModal.js';
import { openAddItemModal } from './AddItemModal.js';
import { showToast } from './Toast.js';

export function renderHeader(state) {
  const currentBranch = state.branches.find(b => b.id === state.activeBranchId) || state.branches[0];
  const muted = isAudioMuted();
  const unreadCount = getUnreadNotificationsCount();

  return `
    <header class="fixed top-0 left-72 right-0 h-16 bg-[#f3fbf6]/90 backdrop-blur-xl shadow-sm z-40 px-6 border-b border-[#e2eae5]">
      <div class="h-16 flex items-center justify-between gap-4">
        
        <!-- Search & Date Filter -->
        <div class="flex items-center gap-3 flex-1 max-w-lg">
          <div class="flex items-center gap-2.5 w-full bg-white px-3.5 py-1.5 rounded-xl shadow-sm border border-[#e2eae5] focus-within:border-[#12382c] transition">
            <span class="material-symbols-outlined text-[#717974] text-[20px]">search</span>
            <input 
              id="global-search-input"
              class="w-full bg-transparent text-sm text-[#151d1a] placeholder:text-[#717974] focus:outline-none" 
              placeholder="Search orders (#TK-8492), menu items, phone..." 
              type="search" 
              value="${state.searchQuery || ''}"
            />
          </div>

          <div class="hidden xl:flex items-center bg-[#edf6f0] px-3 py-1.5 rounded-xl shrink-0 gap-1.5 text-[#414845] border border-[#dce5df]">
            <span class="material-symbols-outlined text-[16px]">date_range</span>
            <select id="date-range-select" class="bg-transparent text-xs text-[#151d1a] font-bold focus:outline-none cursor-pointer">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        <!-- Right Quick Controls -->
        <div class="flex items-center gap-3 shrink-0">
          
          <!-- Store Status Pill -->
          <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e2eae5] shadow-xs">
            <span class="w-2.5 h-2.5 rounded-full ${currentBranch.isAccepting ? 'bg-[#12382c] animate-pulse' : 'bg-[#ba1a1a]'}"></span>
            <span class="text-xs text-[#151d1a] font-bold">
              ${currentBranch.isAccepting ? 'Open • Accepting Orders' : 'Store Paused'}
            </span>
          </div>

          <!-- Audio Alert Toggle -->
          <button 
            id="header-audio-toggle" 
            class="flex items-center gap-1.5 p-2 rounded-xl border border-[#e2eae5] bg-white text-[#414845] hover:bg-[#edf6f0] transition shadow-xs" 
            title="${muted ? 'Unmute Audio Alert Chime' : 'Mute Audio Alert Chime'}"
            type="button"
          >
            <span class="material-symbols-outlined text-[20px] ${muted ? 'text-[#ba1a1a]' : 'text-[#895100]'}">
              ${muted ? 'volume_off' : 'volume_up'}
            </span>
          </button>

          <!-- Notification Bell -->
          <button 
            id="notif-bell-btn" 
            class="relative p-2 rounded-xl border border-[#e2eae5] bg-white text-[#414845] hover:bg-[#edf6f0] transition shadow-xs" 
            title="Notifications" 
            type="button"
          >
            <span class="material-symbols-outlined text-[20px]">notifications</span>
            ${unreadCount > 0 ? `
              <span id="header-notif-dot" class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#fd9d1a] ring-2 ring-white"></span>
            ` : ''}
          </button>

          <!-- Add New Dish Action Button -->
          <button 
            id="header-add-item-btn" 
            class="flex items-center gap-1.5 bg-[#12382c] text-white text-xs font-bold px-3.5 py-2 rounded-xl hover:bg-[#1b4d3e] transition shadow-md" 
            type="button"
          >
            <span class="material-symbols-outlined text-[18px]">add</span>
            <span class="hidden sm:inline">Add Dish</span>
          </button>

          <!-- User Avatar -->
          <div class="w-8 h-8 rounded-full bg-[#12382c] flex items-center justify-center text-white shrink-0 font-bold text-xs shadow-xs" title="Narendra P. - Store Manager">
            NP
          </div>
        </div>

      </div>
    </header>
  `;
}

export function attachHeaderEvents(state, onSearch, onAddItem) {
  // Global search input
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      onSearch(e.target.value);
    });
  }

  // Audio toggle
  const audioBtn = document.getElementById('header-audio-toggle');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const isNowActive = toggleAudio();
      showToast(isNowActive ? 'Alert chimes turned ON' : 'Alert chimes MUTED', 'info');
      const icon = audioBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isNowActive ? 'volume_up' : 'volume_off';
        icon.className = `material-symbols-outlined text-[20px] ${isNowActive ? 'text-[#895100]' : 'text-[#ba1a1a]'}`;
      }
    });
  }

  // Notifications modal toggle
  const notifBtn = document.getElementById('notif-bell-btn');
  if (notifBtn) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playClickTone();
      openNotificationsModal();
    });
  }

  // Add Item Modal
  const addBtn = document.getElementById('header-add-item-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      playClickTone();
      openAddItemModal(onAddItem);
    });
  }

  // Date range filter
  const dateSelect = document.getElementById('date-range-select');
  if (dateSelect) {
    dateSelect.addEventListener('change', (e) => {
      showToast(`Analytics filtered to: ${e.target.options[e.target.selectedIndex].text}`, 'info');
    });
  }
}
