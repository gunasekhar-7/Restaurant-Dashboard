// Dashboard & Operations Analytics View
import { showToast } from '../components/Toast.js';
import { playClickTone, playSuccessChime } from '../utils/audio.js';

export function renderDashboardView(state) {
  const currentBranch = state.branches.find(b => b.id === state.activeBranchId) || state.branches[0];
  
  // Real-time calculations based on active orders state
  const cookingCount = state.orders.filter(o => o.status === 'cooking').length;
  const readyCount = state.orders.filter(o => o.status === 'ready').length;
  const deliveryCount = state.orders.filter(o => o.status === 'delivery').length;
  const activeTotal = cookingCount + readyCount + deliveryCount + state.orders.filter(o => o.status === 'incoming').length;

  return `
    <div class="flex flex-col w-full pb-12 gap-y-6">
      
      <!-- Branch Summary & Executive Actions Bar -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div class="flex items-start md:items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-[#edf6f0] flex items-center justify-center shrink-0 border border-[#c3ebda] relative overflow-hidden shadow-sm">
            <img class="w-full h-full object-cover" alt="Sri Venkateswara Meals Traditional Spread" src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80"/>
            <span class="absolute bottom-1 right-1 w-3 h-3 bg-[#fd9d1a] rounded-full ring-2 ring-white"></span>
          </div>
          <div class="flex flex-col">
            <div class="flex flex-wrap items-center gap-2">
              <h1 class="text-2xl font-bold text-[#002218] tracking-tight">${currentBranch.name}</h1>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e7f0eb] text-[#151d1a] text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#12382c]"></span>
                ${currentBranch.shortName}
              </span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdcbc] text-[#683d00] text-xs font-bold">
                <span class="material-symbols-outlined text-[14px]">star</span> ${currentBranch.rating} (${currentBranch.reviewsCount}+ reviews)
              </span>
            </div>
            <p class="text-xs text-[#414845] mt-1">
              Welcome back! Today's lunch rush completed with 98.4% fulfillment rate. Kitchen operations running smoothly in Tekkali cluster.
            </p>
          </div>
        </div>

        <!-- Quick Store Action Triggers -->
        <div class="flex items-center flex-wrap gap-2.5 self-start xl:self-center">
          <button id="btn-export-sales" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#e2eae5] text-[#151d1a] text-xs font-semibold hover:bg-[#edf6f0] transition shadow-xs" type="button">
            <span class="material-symbols-outlined text-[18px] text-[#414845]">file_download</span>
            <span>Export Daily Sales</span>
          </button>
          
          <button id="btn-pause-kitchen" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#e2eae5] text-[#414845] text-xs font-semibold hover:bg-[#edf6f0] transition shadow-xs" type="button">
            <span class="material-symbols-outlined text-[18px] text-[#895100]">pause_circle</span>
            <span id="pause-kitchen-text">${state.kitchenPaused ? 'Resume Kitchen' : 'Pause Kitchen (15m)'}</span>
          </button>

          <button id="btn-goto-live-orders" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#12382c] text-white text-xs font-bold hover:bg-[#1b4d3e] transition shadow-md" type="button">
            <span class="material-symbols-outlined text-[18px]">notifications_active</span>
            <span>Live Kitchen Feed</span>
            <span class="ml-1 px-2 py-0.5 bg-[#fd9d1a] text-[#2c1700] text-[11px] font-extrabold rounded-full">
              ${activeTotal}
            </span>
          </button>
        </div>
      </div>

      <!-- Real-time Kitchen Operations Pipeline Ribbon -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="pipeline-card bg-white rounded-2xl p-4 shadow-sm border border-[#e2eae5] flex items-center justify-between cursor-pointer hover:border-[#12382c] transition" data-filter="cooking">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#ffdcbc] flex items-center justify-center text-[#683d00]">
              <span class="material-symbols-outlined text-[22px]">skillet</span>
            </div>
            <div>
              <span class="block text-[11px] font-bold text-[#717974] uppercase tracking-wider">Cooking</span>
              <span class="text-lg font-bold text-[#151d1a]">${cookingCount} Active</span>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-bold">~14 min avg</span>
        </div>

        <div class="pipeline-card bg-white rounded-2xl p-4 shadow-sm border border-[#e2eae5] flex items-center justify-between cursor-pointer hover:border-[#12382c] transition" data-filter="ready">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0f766e]">
              <span class="material-symbols-outlined text-[22px]">inventory_2</span>
            </div>
            <div>
              <span class="block text-[11px] font-bold text-[#717974] uppercase tracking-wider">Ready for Pickup</span>
              <span class="text-lg font-bold text-[#151d1a]">${readyCount} Orders</span>
            </div>
          </div>
          <span class="w-2.5 h-2.5 rounded-full bg-[#14b8a6] animate-ping"></span>
        </div>

        <div class="pipeline-card bg-white rounded-2xl p-4 shadow-sm border border-[#e2eae5] flex items-center justify-between cursor-pointer hover:border-[#12382c] transition" data-filter="delivery">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#ffedd5] flex items-center justify-center text-[#c2410c]">
              <span class="material-symbols-outlined text-[22px]">two_wheeler</span>
            </div>
            <div>
              <span class="block text-[11px] font-bold text-[#717974] uppercase tracking-wider">On Delivery</span>
              <span class="text-lg font-bold text-[#151d1a]">${deliveryCount} En Route</span>
            </div>
          </div>
          <span class="text-xs text-[#717974] font-medium">Avg 9m drop</span>
        </div>

        <div class="pipeline-card bg-white rounded-2xl p-4 shadow-sm border border-[#e2eae5] flex items-center justify-between cursor-pointer hover:border-[#12382c] transition" data-filter="delivered">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#c3ebda] flex items-center justify-center text-[#002117]">
              <span class="material-symbols-outlined text-[22px]">check_circle</span>
            </div>
            <div>
              <span class="block text-[11px] font-bold text-[#717974] uppercase tracking-wider">Completed Today</span>
              <span class="text-lg font-bold text-[#151d1a]">130 Delivered</span>
            </div>
          </div>
          <span class="text-xs text-[#12382c] font-bold">98.5% SLA</span>
        </div>
      </div>

      <!-- Primary Metric KPI Quad -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Metric 1: Revenue -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-semibold text-[#717974] block uppercase tracking-wider">Total Gross Revenue</span>
              <div class="mt-1 flex items-baseline gap-2">
                <span class="text-2xl font-bold text-[#002218] tabular-nums tracking-tight">₹48,250</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
              <span class="material-symbols-outlined text-[20px]">currency_rupee</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-xs font-bold">
              <span class="material-symbols-outlined text-[14px]">trending_up</span>
              <span>+14.2%</span>
            </div>
            <span class="text-[11px] text-[#717974]">vs yesterday (₹42,250)</span>
          </div>
          <!-- Mini Sparkline Graph -->
          <div class="w-full h-8 mt-3">
            <svg class="w-full h-full text-[#fd9d1a]" fill="none" viewBox="0 0 160 30">
              <path d="M0 24 C 20 22, 35 28, 55 18 C 75 8, 90 20, 115 12 C 135 4, 150 14, 160 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
            </svg>
          </div>
        </div>

        <!-- Metric 2: Orders Count -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-semibold text-[#717974] block uppercase tracking-wider">Total Orders Today</span>
              <div class="mt-1 flex items-baseline gap-2">
                <span class="text-2xl font-bold text-[#002218] tabular-nums tracking-tight">142</span>
                <span class="text-xs text-[#717974]">Orders</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
              <span class="material-symbols-outlined text-[20px]">receipt_long</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-xs font-bold">
              <span class="material-symbols-outlined text-[14px]">trending_up</span>
              <span>+8.5%</span>
            </div>
            <span class="text-[11px] text-[#717974]">140 Fulfilled / 2 Cancelled</span>
          </div>
          <div class="w-full bg-[#e7f0eb] rounded-full h-1.5 mt-4 overflow-hidden">
            <div class="bg-[#12382c] h-1.5 rounded-full" style="width: 98.6%"></div>
          </div>
        </div>

        <!-- Metric 3: AOV -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-semibold text-[#717974] block uppercase tracking-wider">Average Order Value (AOV)</span>
              <div class="mt-1 flex items-baseline gap-2">
                <span class="text-2xl font-bold text-[#002218] tabular-nums tracking-tight">₹339.80</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
              <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-xs font-bold">
              <span class="material-symbols-outlined text-[14px]">trending_up</span>
              <span>+3.1%</span>
            </div>
            <span class="text-[11px] text-[#717974]">Lunch Peak: ₹410</span>
          </div>
          <div class="flex items-center gap-1.5 mt-4 text-[#717974] text-xs">
            <span class="material-symbols-outlined text-[16px] text-[#895100]">bolt</span>
            <span>Biryani combos driving basket size</span>
          </div>
        </div>

        <!-- Metric 4: Kitchen Dispatch Time -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-semibold text-[#717974] block uppercase tracking-wider">Avg Kitchen Dispatch Time</span>
              <div class="mt-1 flex items-baseline gap-2">
                <span class="text-2xl font-bold text-[#002218] tabular-nums tracking-tight">18 mins</span>
              </div>
            </div>
            <div class="w-10 h-10 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
              <span class="material-symbols-outlined text-[20px]">timer</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-xs font-bold">
              <span class="material-symbols-outlined text-[14px]">arrow_downward</span>
              <span>-2.4 mins</span>
            </div>
            <span class="text-[11px] text-[#717974]">SLA Target: &lt;22 mins</span>
          </div>
          <div class="w-full bg-[#e7f0eb] rounded-full h-1.5 mt-4 overflow-hidden">
            <div class="bg-[#fd9d1a] h-1.5 rounded-full" style="width: 82%"></div>
          </div>
        </div>

      </div>

      <!-- Main Analytics Row: Hourly Revenue Chart & Category Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Hourly Sales Trajectory Chart (8 Cols) -->
        <div class="lg:col-span-8 bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2 border-b border-gray-100">
            <div>
              <h2 class="text-base font-bold text-[#002218]">Revenue & Hourly Order Trajectory</h2>
              <p class="text-xs text-[#717974]">Showing peak rushes (Lunch 12:00-15:00, Dinner 19:00-22:00)</p>
            </div>
            <div class="flex items-center gap-1 bg-[#edf6f0] p-1 rounded-xl">
              <button class="chart-tab-btn px-3 py-1 text-xs font-bold rounded-lg bg-white text-[#12382c] shadow-xs" data-range="today">Today</button>
              <button class="chart-tab-btn px-3 py-1 text-xs font-medium rounded-lg text-[#717974] hover:text-[#151d1a]" data-range="yesterday">Yesterday</button>
              <button class="chart-tab-btn px-3 py-1 text-xs font-medium rounded-lg text-[#717974] hover:text-[#151d1a]" data-range="week">Last 7D</button>
            </div>
          </div>

          <!-- SVG Chart Area with Gradient Fill & Grid lines -->
          <div class="relative w-full h-72 pt-4">
            <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 text-[11px] font-mono text-[#717974]">
              <div class="w-full border-b border-[#dce5df] flex justify-between"><span>₹8,000</span></div>
              <div class="w-full border-b border-[#dce5df] flex justify-between"><span>₹6,000</span></div>
              <div class="w-full border-b border-[#dce5df] flex justify-between"><span>₹4,000</span></div>
              <div class="w-full border-b border-[#dce5df] flex justify-between"><span>₹2,000</span></div>
              <div class="w-full border-b border-[#dce5df] flex justify-between"><span>₹0</span></div>
            </div>

            <svg class="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 240">
              <defs>
                <linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#12382c" stop-opacity="0.25"></stop>
                  <stop offset="100%" stop-color="#12382c" stop-opacity="0.0"></stop>
                </linearGradient>
              </defs>
              <!-- Comparison dotted line (Last Week) -->
              <path d="M 30 200 Q 80 190 120 180 T 220 140 T 320 60 T 420 160 T 520 80 T 620 50 T 680 70" fill="none" opacity="0.4" stroke="#717974" stroke-dasharray="4 4" stroke-width="2"></path>
              <!-- Area fill for today -->
              <path d="M 30 210 L 30 195 C 65 190, 95 180, 130 160 C 165 140, 190 100, 230 70 C 270 40, 310 50, 350 90 C 390 130, 420 170, 460 165 C 500 160, 530 110, 570 45 C 610 30, 640 40, 680 55 L 680 210 Z" fill="url(#primaryAreaGrad)"></path>
              <!-- Primary Curve (Today) -->
              <path d="M 30 195 C 65 190, 95 180, 130 160 C 165 140, 190 100, 230 70 C 270 40, 310 50, 350 90 C 390 130, 420 170, 460 165 C 500 160, 530 110, 570 45 C 610 30, 640 40, 680 55" fill="none" stroke="#12382c" stroke-linecap="round" stroke-width="3.5"></path>
              
              <!-- Data Points -->
              <circle cx="230" cy="70" fill="#fd9d1a" r="5" stroke="#ffffff" stroke-width="2"></circle>
              <circle cx="570" cy="45" fill="#12382c" r="6" stroke="#ffffff" stroke-width="2"></circle>
            </svg>

            <!-- Peak Marker Floating Badge -->
            <div class="absolute top-8 right-24 bg-[#12382c] text-white px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none">
              <span class="w-2 h-2 rounded-full bg-[#fd9d1a] animate-pulse"></span>
              <span class="text-xs font-bold">Lunch Rush: ₹7,840/hr (13:30)</span>
            </div>
          </div>

          <!-- X-Axis Timestamps -->
          <div class="flex justify-between text-[11px] text-[#717974] font-mono pt-3 border-t border-gray-100">
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span class="font-bold text-[#12382c]">14:00 (Peak)</span>
            <span>16:00</span>
            <span>18:00</span>
            <span class="font-bold text-[#12382c]">20:00 (Peak)</span>
            <span>22:00</span>
          </div>
        </div>

        <!-- Category Sales Breakdown & Top Dishes (4 Cols) -->
        <div class="lg:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 class="text-base font-bold text-[#002218]">Sales by Category</h2>
              <span class="text-xs text-[#717974]">Today's Mix</span>
            </div>

            <!-- Category Bars -->
            <div class="space-y-3.5 my-4">
              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-[#151d1a]">Biryanis & Pulaos</span>
                  <span class="text-[#12382c] font-mono">₹20,265 (42%)</span>
                </div>
                <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#12382c] h-full rounded-full" style="width: 42%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-[#151d1a]">Meals & Thalis</span>
                  <span class="text-[#12382c] font-mono">₹16,887 (35%)</span>
                </div>
                <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#fd9d1a] h-full rounded-full" style="width: 35%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-[#151d1a]">Tiffins & Breakfast</span>
                  <span class="text-[#12382c] font-mono">₹7,238 (15%)</span>
                </div>
                <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#7ba292] h-full rounded-full" style="width: 15%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-semibold mb-1">
                  <span class="text-[#151d1a]">Curries & Extras</span>
                  <span class="text-[#12382c] font-mono">₹3,860 (8%)</span>
                </div>
                <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#d3dcd7] h-full rounded-full" style="width: 8%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Selling Dish Callout -->
          <div class="p-3.5 bg-[#edf6f0] rounded-xl border border-[#c3ebda] mt-2">
            <span class="text-[11px] font-bold text-[#002117] block uppercase tracking-wider">Top Performing Dish</span>
            <div class="flex items-center justify-between mt-1">
              <div>
                <h4 class="text-xs font-bold text-[#151d1a]">Special Chicken Dum Biryani</h4>
                <span class="text-[11px] text-[#414845]">184 portions sold today</span>
              </div>
              <span class="text-xs font-mono font-bold text-[#12382c]">₹33,120</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function attachDashboardEvents(state, onNavigate) {
  // Export sales CSV
  const exportBtn = document.getElementById('btn-export-sales');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      playSuccessChime();
      const csvContent = "data:text/csv;charset=utf-8," 
        + "Branch,Date,Total Revenue,Orders Fulfilled,AOV,Fulfillment Rate\n"
        + "Sri Venkateswara Meals - Tekkali,2026-10-27,48250,140,339.80,98.6%\n";
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "TastyKart_Tekkali_Daily_Sales_Report.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast('Daily Sales CSV downloaded successfully!');
    });
  }

  // Pause kitchen toggle
  const pauseBtn = document.getElementById('btn-pause-kitchen');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      state.kitchenPaused = !state.kitchenPaused;
      const textSpan = document.getElementById('pause-kitchen-text');
      if (textSpan) {
        textSpan.textContent = state.kitchenPaused ? 'Resume Kitchen' : 'Pause Kitchen (15m)';
      }
      playClickTone();
      showToast(state.kitchenPaused ? 'Kitchen paused for 15 minutes. Online orders halted.' : 'Kitchen resumed! Accepting online orders.', 'warning');
    });
  }

  // Go to live orders
  const gotoOrdersBtn = document.getElementById('btn-goto-live-orders');
  if (gotoOrdersBtn) {
    gotoOrdersBtn.addEventListener('click', () => {
      playClickTone();
      onNavigate('live-orders');
    });
  }

  // Pipeline ribbon cards jump to live orders
  document.querySelectorAll('.pipeline-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.getAttribute('data-filter');
      state.kdsStageFilter = filter;
      playClickTone();
      onNavigate('live-orders');
    });
  });

  // Chart range tabs
  document.querySelectorAll('.chart-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-tab-btn').forEach(b => {
        b.className = 'chart-tab-btn px-3 py-1 text-xs font-medium rounded-lg text-[#717974] hover:text-[#151d1a]';
      });
      btn.className = 'chart-tab-btn px-3 py-1 text-xs font-bold rounded-lg bg-white text-[#12382c] shadow-xs';
      playClickTone();
      showToast(`Chart filtered to: ${btn.textContent}`, 'info');
    });
  });
}
