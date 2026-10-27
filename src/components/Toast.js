// Toast Notification Utility
let toastContainer = null;

function ensureContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

export function showToast(message, type = 'success', duration = 3200) {
  const container = ensureContainer();
  const toast = document.createElement('div');
  
  const icon = type === 'success' ? 'check_circle' : 
               type === 'error' ? 'error' : 
               type === 'warning' ? 'warning' : 'info';
  
  const bgClass = type === 'success' ? 'bg-[#12382c] text-white border border-[#7ba292]/30' :
                  type === 'error' ? 'bg-[#ba1a1a] text-white border border-[#ffdad6]/30' :
                  type === 'warning' ? 'bg-[#fd9d1a] text-[#2c1700] border border-[#ffdcbc]' :
                  'bg-[#2a322f] text-white border border-[#717974]/30';

  toast.className = `${bgClass} pointer-events-auto px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm font-medium transform transition-all duration-200 translate-y-3 opacity-0`;
  
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0">${icon}</span>
    <span class="leading-snug">${message}</span>
    <button class="ml-auto opacity-70 hover:opacity-100 transition p-1" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 250);
  }, duration);
}
