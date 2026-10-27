// Notifications Center Drawer Modal
import { initialNotifications } from '../data/mockData.js';

let notifications = [...initialNotifications];

export function getUnreadNotificationsCount() {
  return notifications.filter(n => n.unread).length;
}

export function openNotificationsModal(onNavigate) {
  let modal = document.getElementById('notifications-modal');
  if (modal) {
    modal.remove();
    return;
  }

  modal = document.createElement('div');
  modal.id = 'notifications-modal';
  modal.className = 'fixed top-16 right-6 z-[80] w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-200';

  const renderList = () => {
    return notifications.map(n => `
      <div class="p-3.5 border-b border-gray-100 hover:bg-[#f3fbf6] transition cursor-pointer ${n.unread ? 'bg-[#edf6f0]/60' : ''}" data-id="${n.id}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-1.5 font-semibold text-xs text-[#002218]">
            ${n.unread ? '<span class="w-2 h-2 rounded-full bg-[#fd9d1a]"></span>' : ''}
            <span>${n.title}</span>
          </div>
          <span class="text-[10px] text-gray-400 shrink-0">${n.time}</span>
        </div>
        <p class="text-xs text-gray-600 mt-1 leading-relaxed">${n.message}</p>
      </div>
    `).join('');
  };

  modal.innerHTML = `
    <div class="p-4 bg-[#12382c] text-white flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">notifications</span>
        <span class="font-bold text-sm">Notifications & Alerts</span>
        <span class="px-2 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-[10px] font-bold" id="notif-badge-count">
          ${getUnreadNotificationsCount()} new
        </span>
      </div>
      <button class="text-xs text-[#7ba292] hover:text-white transition font-medium" id="mark-all-read-btn">
        Mark all read
      </button>
    </div>

    <div class="max-h-96 overflow-y-auto divide-y divide-gray-100" id="notif-list-container">
      ${renderList()}
    </div>

    <div class="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
      <span>Operational alerts update in real-time</span>
      <button class="text-[#12382c] font-bold hover:underline" onclick="document.getElementById('notifications-modal').remove()">
        Close
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  // Close when clicking outside
  const handleClickOutside = (e) => {
    const bellBtn = document.getElementById('notif-bell-btn');
    if (modal && !modal.contains(e.target) && bellBtn && !bellBtn.contains(e.target)) {
      modal.remove();
      document.removeEventListener('click', handleClickOutside);
    }
  };
  setTimeout(() => document.addEventListener('click', handleClickOutside), 50);

  // Mark all read
  document.getElementById('mark-all-read-btn').onclick = () => {
    notifications.forEach(n => n.unread = false);
    document.getElementById('notif-list-container').innerHTML = renderList();
    document.getElementById('notif-badge-count').textContent = '0 new';
    const headerDot = document.getElementById('header-notif-dot');
    if (headerDot) headerDot.classList.add('hidden');
  };
}
