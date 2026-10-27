// Kitchen Order Ticket (KOT) Thermal Receipt Preview Modal
import { showToast } from './Toast.js';
import { playSuccessChime } from '../utils/audio.js';

export function openKOTModal(order) {
  let modal = document.getElementById('kot-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kot-modal';
    modal.className = 'fixed inset-0 z-[90] flex items-center justify-center p-4 modal-backdrop transition-opacity';
    document.body.appendChild(modal);
  }

  const itemsHtml = order.items.map(it => `
    <div class="flex justify-between items-start text-xs font-mono py-1 border-b border-dashed border-gray-300">
      <div class="flex-1 pr-2">
        <span class="font-bold">${it.quantity}x</span> ${it.name}
        ${it.customizations && it.customizations.length ? `
          <div class="text-[11px] text-gray-600 pl-3">↳ ${it.customizations.join(', ')}</div>
        ` : ''}
      </div>
      <span class="font-bold">₹${it.price * it.quantity}</span>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden flex flex-col transform transition-all scale-100 border border-gray-200">
      <div class="bg-[#12382c] text-white px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[20px]">print</span>
          <span class="font-bold text-sm">Kitchen Order Ticket (KOT)</span>
        </div>
        <button class="text-white/80 hover:text-white" onclick="document.getElementById('kot-modal').remove()">
          <span class="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      <!-- Thermal Paper Docket Container -->
      <div class="p-6 bg-[#fffef9] font-mono border-b border-gray-200 text-xs text-gray-800 space-y-3 shadow-inner">
        <div class="text-center border-b border-dashed border-gray-400 pb-2">
          <h2 class="font-bold text-base tracking-wider">TASTYKART KITCHEN</h2>
          <p class="text-[11px] text-gray-600">Sri Venkateswara Meals - Tekkali</p>
          <p class="text-[11px] text-gray-600">Order Token: <strong>#${order.id}</strong></p>
        </div>

        <div class="flex justify-between text-[11px] text-gray-600 pb-1 border-b border-dashed border-gray-300">
          <span>Time: ${order.orderedAt || '13:42'}</span>
          <span>Prep Target: ${order.kitchenPrepTarget || 15}m</span>
        </div>

        <div class="py-1">
          <div class="text-[11px] uppercase tracking-wider font-bold text-gray-500 mb-1">Kitchen Prep Items:</div>
          ${itemsHtml}
        </div>

        ${order.specialInstructions ? `
          <div class="p-2 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-900 font-sans">
            <strong>CHEF NOTE:</strong> ${order.specialInstructions}
          </div>
        ` : ''}

        <div class="pt-2 border-t border-dashed border-gray-400 flex justify-between font-bold text-sm">
          <span>TOTAL AMOUNT</span>
          <span>₹${order.totalAmount}</span>
        </div>

        <div class="text-center text-[10px] text-gray-500 pt-2 border-t border-dashed border-gray-300">
          *** Dispatched via TastyKart Partner Hub ***
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="p-4 bg-gray-50 flex items-center justify-between gap-2">
        <button class="px-3 py-2 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-200 transition" onclick="document.getElementById('kot-modal').remove()">
          Close
        </button>
        <button id="print-kot-trigger" class="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-semibold shadow-sm transition">
          <span class="material-symbols-outlined text-[16px]">local_printshop</span>
          <span>Send to Kitchen Thermal Printer</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('print-kot-trigger').onclick = () => {
    playSuccessChime();
    showToast(`KOT #${order.id} printed to kitchen thermal station!`);
    modal.remove();
  };
}
