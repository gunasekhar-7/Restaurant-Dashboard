// Real-Time Live Orders & Kitchen Display System (KDS) View
import { showToast } from '../components/Toast.js';
import { playClickTone, playSuccessChime, playOrderAlert } from '../utils/audio.js';
import { openKOTModal } from '../components/KOTModal.js';

export function renderLiveOrdersView(state) {
  const filter = state.kdsStageFilter || 'all';
  const viewMode = state.kdsViewMode || 'kanban'; // 'kanban' | 'list'
  
  // Filter orders according to active tab
  let filteredOrders = state.orders;
  if (filter !== 'all') {
    filteredOrders = state.orders.filter(o => o.status === filter);
  }

  // Stage counts
  const incomingOrders = state.orders.filter(o => o.status === 'incoming');
  const cookingOrders = state.orders.filter(o => o.status === 'cooking');
  const readyOrders = state.orders.filter(o => o.status === 'ready');
  const deliveryOrders = state.orders.filter(o => o.status === 'delivery');

  return `
    <div class="flex flex-col w-full pb-12 gap-y-4">
      
      <!-- Sub-Header / Control Strip -->
      <div class="py-2 flex flex-wrap items-center justify-between gap-3 bg-[#f3fbf6]">
        
        <!-- Left: Live Status + Auto-refresh -->
        <div class="flex items-center flex-wrap gap-2.5">
          <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e2eae5] shadow-xs">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd9d1a] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fd9d1a]"></span>
            </span>
            <span class="text-xs text-[#002218] font-bold tracking-tight">Live Kitchen Feed</span>
            <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">
              ${state.orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length} Active
            </span>
          </div>

          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#edf6f0] text-[#414845] text-xs font-medium border border-[#dce5df]">
            <span class="material-symbols-outlined text-[16px] text-[#416658]">sync</span>
            <span>Auto-refreshing in <span class="font-bold text-[#12382c] font-mono" id="kds-refresh-timer">12s</span></span>
          </div>

          <button id="btn-simulate-order" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#fd9d1a] text-[#895100] text-xs font-bold hover:bg-[#ffdcbc]/40 transition shadow-xs" title="Simulate a new incoming customer order for testing">
            <span class="material-symbols-outlined text-[16px] text-[#fd9d1a]">add_alert</span>
            <span>+ Simulate Customer Order</span>
          </button>
        </div>

        <!-- Right: Operational Controls & View Toggle -->
        <div class="flex items-center gap-2 ml-auto">
          <div class="flex items-center p-0.5 rounded-xl bg-[#e7f0eb] border border-[#dce5df]">
            <button class="p-1.5 rounded-lg ${viewMode === 'kanban' ? 'bg-white text-[#12382c] shadow-xs font-bold' : 'text-[#717974] hover:text-[#151d1a]'}" id="toggle-view-kanban" title="Kanban Board View">
              <span class="material-symbols-outlined text-[18px]">view_kanban</span>
            </button>
            <button class="p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-white text-[#12382c] shadow-xs font-bold' : 'text-[#717974] hover:text-[#151d1a]'}" id="toggle-view-list" title="Table List View">
              <span class="material-symbols-outlined text-[18px]">format_list_bulleted</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Stage Filter Quick Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${filter === 'all' ? 'bg-[#12382c] text-white' : 'bg-white text-[#414845] hover:bg-[#edf6f0]'}" data-stage="all">
          <span>All Orders</span>
          <span class="px-1.5 py-0.2 rounded-full ${filter === 'all' ? 'bg-[#002218] text-white' : 'bg-[#e7f0eb] text-[#151d1a]'} text-[10px]">
            ${state.orders.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${filter === 'incoming' ? 'bg-[#12382c] text-white' : 'bg-white text-[#414845] hover:bg-[#edf6f0]'}" data-stage="incoming">
          <span class="w-2 h-2 rounded-full bg-[#fd9d1a]"></span>
          <span>Incoming</span>
          <span class="px-1.5 py-0.2 rounded-full ${filter === 'incoming' ? 'bg-[#002218] text-white' : 'bg-[#e7f0eb] text-[#151d1a]'} text-[10px]">
            ${incomingOrders.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${filter === 'cooking' ? 'bg-[#12382c] text-white' : 'bg-white text-[#414845] hover:bg-[#edf6f0]'}" data-stage="cooking">
          <span class="w-2 h-2 rounded-full bg-[#14b8a6]"></span>
          <span>In Kitchen</span>
          <span class="px-1.5 py-0.2 rounded-full ${filter === 'cooking' ? 'bg-[#002218] text-white' : 'bg-[#e7f0eb] text-[#151d1a]'} text-[10px]">
            ${cookingOrders.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${filter === 'ready' ? 'bg-[#12382c] text-white' : 'bg-white text-[#414845] hover:bg-[#edf6f0]'}" data-stage="ready">
          <span class="w-2 h-2 rounded-full bg-[#22c55e]"></span>
          <span>Ready / Counter</span>
          <span class="px-1.5 py-0.2 rounded-full ${filter === 'ready' ? 'bg-[#002218] text-white' : 'bg-[#e7f0eb] text-[#151d1a]'} text-[10px]">
            ${readyOrders.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${filter === 'delivery' ? 'bg-[#12382c] text-white' : 'bg-white text-[#414845] hover:bg-[#edf6f0]'}" data-stage="delivery">
          <span class="w-2 h-2 rounded-full bg-[#ea580c]"></span>
          <span>Out for Delivery</span>
          <span class="px-1.5 py-0.2 rounded-full ${filter === 'delivery' ? 'bg-[#002218] text-white' : 'bg-[#e7f0eb] text-[#151d1a]'} text-[10px]">
            ${deliveryOrders.length}
          </span>
        </button>
      </div>

      <!-- Main Stage: Kanban vs List Table -->
      ${viewMode === 'kanban' ? renderKanbanBoard(state, incomingOrders, cookingOrders, readyOrders) : renderOrdersTable(filteredOrders)}

      <!-- Order Detail Drawer (Rendered conditionally if an order is selected) -->
      ${renderOrderDrawer(state)}

    </div>
  `;
}

function renderKanbanBoard(state, incoming, cooking, ready) {
  return `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mt-2">
      
      <!-- COLUMN 1: NEW INCOMING (Urgent Mango Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#fd9d1a] ring-4 ring-[#ffdcbc] animate-pulse"></span>
            <span class="text-sm font-bold text-[#002218]">New Incoming</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#ffdcbc] text-[#2c1700] text-xs font-bold">
            ${incoming.length} Orders
          </span>
        </div>

        ${incoming.length === 0 ? `
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No incoming orders pending acceptance.
          </div>
        ` : ''}

        ${incoming.map(order => `
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${state.selectedOrderId === order.id ? 'ring-2 ring-[#12382c]' : ''}" data-order-id="${order.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#fd9d1a]"></div>
            
            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${order.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-[11px] font-mono font-bold animate-pulse">
                    ${order.countdownSeconds}s
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${order.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${order.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#fd9d1a] text-[20px]">notifications_active</span>
            </div>

            <!-- Items Brief List -->
            <div class="pl-2 space-y-1 my-2 bg-[#edf6f0]/60 p-2.5 rounded-lg text-xs">
              ${order.items.slice(0, 2).map(it => `
                <div class="flex justify-between font-semibold text-[#151d1a]">
                  <span>${it.quantity}x ${it.name}</span>
                  <span class="text-gray-500 font-mono">₹${it.price * it.quantity}</span>
                </div>
              `).join('')}
              ${order.items.length > 2 ? `
                <div class="text-[11px] text-[#717974] font-medium">+${order.items.length - 2} more item(s)</div>
              ` : ''}
            </div>

            ${order.specialInstructions ? `
              <div class="pl-2 flex items-start gap-1.5 my-2 p-1.5 rounded bg-[#fef3c7] text-[#92400e] text-[11px]">
                <span class="material-symbols-outlined text-[14px] shrink-0 mt-0.5">info</span>
                <span class="line-clamp-1 italic">${order.specialInstructions}</span>
              </div>
            ` : ''}

            <!-- Quick Action Split Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-reject-order px-3 py-1.5 rounded-lg border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold transition" data-order-id="${order.id}">
                Reject
              </button>
              <button class="btn-accept-order flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fd9d1a] text-[#2c1700] hover:bg-[#fd9d1a]/90 text-xs font-bold transition shadow-sm" data-order-id="${order.id}">
                <span class="material-symbols-outlined text-[16px]">done</span>
                <span>Accept Order</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- COLUMN 2: IN KITCHEN / COOKING (Teal Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#14b8a6]"></span>
            <span class="text-sm font-bold text-[#002218]">Cooking / In Prep</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#ccfbf1] text-[#0f766e] text-xs font-bold">
            ${cooking.length} Orders
          </span>
        </div>

        ${cooking.length === 0 ? `
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No orders currently cooking.
          </div>
        ` : ''}

        ${cooking.map(order => `
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${state.selectedOrderId === order.id ? 'ring-2 ring-[#12382c]' : ''}" data-order-id="${order.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#14b8a6]"></div>

            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${order.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-mono font-bold flex items-center gap-1">
                    <span class="material-symbols-outlined text-[12px]">timer</span>
                    ${order.timerMinutes || 8}:${order.timerSeconds ? String(order.timerSeconds).padStart(2, '0') : '30'}m
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${order.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${order.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#14b8a6] text-[20px]">skillet</span>
            </div>

            <!-- Items Brief List -->
            <div class="pl-2 space-y-1 my-2 bg-[#edf6f0]/60 p-2.5 rounded-lg text-xs">
              ${order.items.map(it => `
                <div class="flex justify-between font-semibold text-[#151d1a]">
                  <span>${it.quantity}x ${it.name}</span>
                  <span class="text-gray-500 font-mono">₹${it.price * it.quantity}</span>
                </div>
              `).join('')}
            </div>

            <!-- Quick Action Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-print-kot px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold transition flex items-center gap-1" data-order-id="${order.id}">
                <span class="material-symbols-outlined text-[14px]">receipt</span>
                <span>KOT</span>
              </button>
              <button class="btn-mark-ready flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-sm" data-order-id="${order.id}">
                <span class="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Mark as Ready</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- COLUMN 3: READY FOR PICKUP (Emerald Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
            <span class="text-sm font-bold text-[#002218]">Ready for Pickup</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-bold">
            ${ready.length} Orders
          </span>
        </div>

        ${ready.length === 0 ? `
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No orders waiting for rider pickup.
          </div>
        ` : ''}

        ${ready.map(order => `
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${state.selectedOrderId === order.id ? 'ring-2 ring-[#12382c]' : ''}" data-order-id="${order.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#22c55e]"></div>

            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${order.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] text-[11px] font-bold">
                    Packed & Ready
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${order.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${order.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#22c55e] text-[20px]">inventory_2</span>
            </div>

            <!-- Rider Assignment Info -->
            ${order.rider ? `
              <div class="pl-2 p-2 bg-[#f3fbf6] rounded-lg border border-[#c3ebda] my-2 text-xs">
                <div class="flex items-center justify-between font-bold text-[#002117]">
                  <span>Rider: ${order.rider.name}</span>
                  <span class="text-[#12382c] text-[11px] font-mono">${order.rider.eta}</span>
                </div>
                <div class="text-[11px] text-[#414845] mt-0.5">${order.rider.vehicle}</div>
              </div>
            ` : `
              <div class="pl-2 p-2 bg-gray-50 rounded-lg text-xs text-gray-500 my-2">
                Rider assigning automatically...
              </div>
            `}

            <!-- Quick Action Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-print-kot px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold transition" data-order-id="${order.id}">
                Print Bill
              </button>
              <button class="btn-handover-order flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-sm" data-order-id="${order.id}">
                <span class="material-symbols-outlined text-[16px]">sports_motorsports</span>
                <span>Hand Over to Rider</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderOrdersTable(orders) {
  return `
    <div class="bg-white rounded-2xl shadow-sm border border-[#e2eae5] overflow-hidden mt-2">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-[#edf6f0] text-[#717974] font-bold uppercase tracking-wider border-b border-[#e2eae5]">
              <th class="py-3.5 px-4">Order ID & Time</th>
              <th class="py-3.5 px-4">Customer</th>
              <th class="py-3.5 px-4">Items Summary</th>
              <th class="py-3.5 px-4">Payment</th>
              <th class="py-3.5 px-4">Total</th>
              <th class="py-3.5 px-4 text-center">Status</th>
              <th class="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 font-medium">
            ${orders.map(order => `
              <tr class="order-card hover:bg-[#f3fbf6] transition cursor-pointer" data-order-id="${order.id}">
                <td class="py-3.5 px-4">
                  <div class="font-bold text-[#002218] text-sm">#${order.id}</div>
                  <div class="text-[11px] text-gray-500 font-mono">${order.orderedAt}</div>
                </td>
                <td class="py-3.5 px-4">
                  <div class="font-bold text-[#151d1a]">${order.customerName}</div>
                  <div class="text-[11px] text-gray-500 truncate max-w-[150px]">${order.deliveryAddress}</div>
                </td>
                <td class="py-3.5 px-4">
                  <div class="font-semibold text-gray-800">
                    ${order.items.map(it => `${it.quantity}x ${it.name}`).join(', ')}
                  </div>
                </td>
                <td class="py-3.5 px-4 text-gray-600 font-medium">
                  ${order.paymentMethod}
                </td>
                <td class="py-3.5 px-4 font-mono font-bold text-[#12382c] text-sm">
                  ₹${order.totalAmount}
                </td>
                <td class="py-3.5 px-4 text-center">
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${
                    order.status === 'incoming' ? 'bg-[#ffdcbc] text-[#2c1700]' :
                    order.status === 'cooking' ? 'bg-[#fef3c7] text-[#92400e]' :
                    order.status === 'ready' ? 'bg-[#ccfbf1] text-[#0f766e]' :
                    order.status === 'delivery' ? 'bg-[#ffedd5] text-[#c2410c]' :
                    'bg-[#dcfce7] text-[#166534]'
                  }">
                    ${order.status.toUpperCase()}
                  </span>
                </td>
                <td class="py-3.5 px-4 text-right">
                  <button class="px-3 py-1 rounded-lg bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] text-xs font-bold transition">
                    Inspect
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderOrderDrawer(state) {
  if (!state.selectedOrderId) return '';
  const order = state.orders.find(o => o.id === state.selectedOrderId);
  if (!order) return '';

  return `
    <!-- Fixed Slide-in Order Detail Drawer -->
    <div class="fixed inset-0 z-[70] modal-backdrop flex justify-end" id="drawer-backdrop">
      <div class="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform border-l border-gray-200">
        
        <!-- Drawer Header -->
        <div class="p-5 bg-[#12382c] text-white flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-bold">Order #${order.id}</span>
              <span class="px-2.5 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-xs font-bold uppercase">
                ${order.status}
              </span>
            </div>
            <p class="text-xs text-[#7ba292] mt-0.5">Ordered at ${order.orderedAt} • Target: ${order.kitchenPrepTarget || 18}m</p>
          </div>
          <button id="btn-close-drawer" class="text-white/80 hover:text-white p-1 rounded-lg">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="p-5 space-y-5 flex-1">
          
          <!-- Customer Card -->
          <div class="p-4 bg-[#f3fbf6] rounded-xl border border-[#c3ebda] space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#002117] uppercase tracking-wider">Customer Details</span>
              <button class="flex items-center gap-1 text-xs font-bold text-[#12382c] hover:underline" onclick="alert('Calling customer: ${order.customerPhone}')">
                <span class="material-symbols-outlined text-[16px]">call</span>
                <span>${order.customerPhone}</span>
              </button>
            </div>
            <div class="font-bold text-sm text-[#151d1a]">${order.customerName}</div>
            <div class="text-xs text-[#414845] leading-relaxed flex items-start gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#717974] shrink-0 mt-0.5">location_on</span>
              <span>${order.deliveryAddress}</span>
            </div>
          </div>

          <!-- Items Breakdown -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Itemized Order Checklist</h4>
            <div class="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden bg-white">
              ${order.items.map(it => `
                <div class="p-3 flex justify-between items-start text-xs">
                  <div>
                    <span class="font-bold text-sm text-gray-900">${it.quantity}x</span> 
                    <span class="font-semibold text-gray-800">${it.name}</span>
                    ${it.customizations && it.customizations.length ? `
                      <div class="text-[11px] text-[#895100] font-medium pl-4 mt-0.5">
                        ↳ ${it.customizations.join(', ')}
                      </div>
                    ` : ''}
                  </div>
                  <span class="font-mono font-bold text-gray-900">₹${it.price * it.quantity}</span>
                </div>
              `).join('')}
            </div>
          </div>

          ${order.specialInstructions ? `
            <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 space-y-1">
              <div class="font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">restaurant</span>
                <span>Kitchen Chef Instructions</span>
              </div>
              <p class="italic">${order.specialInstructions}</p>
            </div>
          ` : ''}

          <!-- Delivery Rider Status -->
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block">Delivery Dispatch Status</span>
            ${order.rider ? `
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-bold text-xs text-gray-900">${order.rider.name}</div>
                  <div class="text-[11px] text-gray-500">${order.rider.vehicle}</div>
                </div>
                <button class="px-2.5 py-1 rounded-lg bg-white border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition flex items-center gap-1" onclick="alert('Calling delivery partner: ${order.rider.phone}')">
                  <span class="material-symbols-outlined text-[14px]">call</span>
                  <span>Contact</span>
                </button>
              </div>
              <div class="text-xs font-semibold text-[#12382c] flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#12382c] animate-pulse"></span>
                <span>${order.rider.status} (ETA: ${order.rider.eta})</span>
              </div>
            ` : `
              <div class="text-xs text-gray-500">Delivery partner will be assigned upon cooking completion.</div>
            `}
          </div>

          <!-- Total Bill -->
          <div class="p-3.5 bg-[#edf6f0] rounded-xl flex items-center justify-between text-sm font-bold text-[#002117]">
            <span>Net Payable (Paid Online)</span>
            <span class="text-base font-mono">₹${order.totalAmount}</span>
          </div>

        </div>

        <!-- Drawer Footer Actions -->
        <div class="p-5 border-t border-gray-200 bg-white flex items-center gap-2">
          <button id="btn-drawer-print-kot" class="px-3.5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold transition flex items-center gap-1.5" data-order-id="${order.id}">
            <span class="material-symbols-outlined text-[18px]">print</span>
            <span>Print KOT</span>
          </button>

          ${order.status === 'incoming' ? `
            <button class="btn-accept-order flex-1 py-2.5 rounded-xl bg-[#fd9d1a] text-[#2c1700] hover:bg-[#fd9d1a]/90 text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${order.id}">
              <span class="material-symbols-outlined text-[18px]">check</span>
              <span>Accept Order</span>
            </button>
          ` : order.status === 'cooking' ? `
            <button class="btn-mark-ready flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${order.id}">
              <span class="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Mark as Ready</span>
            </button>
          ` : order.status === 'ready' ? `
            <button class="btn-handover-order flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${order.id}">
              <span class="material-symbols-outlined text-[18px]">sports_motorsports</span>
              <span>Hand Over to Rider</span>
            </button>
          ` : ''}
        </div>

      </div>
    </div>
  `;
}

export function attachLiveOrdersEvents(state, onStateChange) {
  // Tab filters
  document.querySelectorAll('.kds-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.kdsStageFilter = btn.getAttribute('data-stage');
      playClickTone();
      onStateChange();
    });
  });

  // View mode toggles
  const btnKanban = document.getElementById('toggle-view-kanban');
  const btnList = document.getElementById('toggle-view-list');
  if (btnKanban) {
    btnKanban.addEventListener('click', () => {
      state.kdsViewMode = 'kanban';
      playClickTone();
      onStateChange();
    });
  }
  if (btnList) {
    btnList.addEventListener('click', () => {
      state.kdsViewMode = 'list';
      playClickTone();
      onStateChange();
    });
  }

  // Click order card to open drawer
  document.querySelectorAll('.order-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return; // ignore button clicks inside card
      const orderId = card.getAttribute('data-order-id');
      state.selectedOrderId = orderId;
      playClickTone();
      onStateChange();
    });
  });

  // Close drawer
  const closeBtn = document.getElementById('btn-close-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      state.selectedOrderId = null;
      onStateChange();
    });
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        state.selectedOrderId = null;
        onStateChange();
      }
    });
  }

  // Accept Order
  document.querySelectorAll('.btn-accept-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orderId = btn.getAttribute('data-order-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = 'cooking';
        order.timerMinutes = 15;
        order.timerSeconds = 0;
        playSuccessChime();
        showToast(`Order #${orderId} accepted! Moved to Kitchen Cooking stage.`);
        onStateChange();
      }
    });
  });

  // Reject Order
  document.querySelectorAll('.btn-reject-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orderId = btn.getAttribute('data-order-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = 'cancelled';
        playClickTone();
        showToast(`Order #${orderId} rejected and refund initiated.`, 'warning');
        onStateChange();
      }
    });
  });

  // Mark as Ready
  document.querySelectorAll('.btn-mark-ready').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orderId = btn.getAttribute('data-order-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = 'ready';
        if (!order.rider) {
          order.rider = {
            name: 'Surya Teja',
            phone: '+91 98480 22319',
            vehicle: 'Hero Splendor (AP 30 BE 8491)',
            status: 'At counter',
            eta: 'Ready to pick'
          };
        }
        playSuccessChime();
        showToast(`Order #${orderId} is Ready for pickup! Rider notified.`);
        onStateChange();
      }
    });
  });

  // Hand over to rider
  document.querySelectorAll('.btn-handover-order').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orderId = btn.getAttribute('data-order-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = 'delivery';
        playSuccessChime();
        showToast(`Order #${orderId} handed over to delivery rider!`);
        onStateChange();
      }
    });
  });

  // Print KOT
  document.querySelectorAll('.btn-print-kot, #btn-drawer-print-kot').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const orderId = btn.getAttribute('data-order-id');
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        openKOTModal(order);
      }
    });
  });

  // Simulate new order
  const simBtn = document.getElementById('btn-simulate-order');
  if (simBtn) {
    simBtn.addEventListener('click', () => {
      const randomId = `TK-${Math.floor(8500 + Math.random() * 900)}`;
      const newSimOrder = {
        id: randomId,
        customerName: 'Chaitanya V.',
        customerPhone: '+91 98492 88102',
        deliveryAddress: 'Near NTR Statue, Main Road, Tekkali',
        paymentMethod: 'UPI Paid (PhonePe)',
        totalAmount: 260,
        status: 'incoming',
        countdownSeconds: 50,
        orderedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        kitchenPrepTarget: 15,
        specialInstructions: 'Make it piping hot with extra chutney.',
        items: [
          { id: 't1', name: 'Ghee Karam Dosa (Crispy Thin)', quantity: 2, price: 65, customizations: ['Double Karam'] },
          { id: 't2', name: 'Steamed Rice Idli (4 Pcs)', quantity: 2, price: 50, customizations: ['Ghee Dip'] },
          { id: 'c1', name: 'Packaging', quantity: 1, price: 30, customizations: [] }
        ],
        rider: null
      };

      state.orders.unshift(newSimOrder);
      playOrderAlert();
      showToast(`🔥 New incoming order #${randomId} received!`, 'warning');
      onStateChange();
    });
  }
}
