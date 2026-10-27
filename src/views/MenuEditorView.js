// Menu Editor & Category Management View
import { showToast } from '../components/Toast.js';
import { playClickTone, playSuccessChime } from '../utils/audio.js';
import { openAddItemModal } from '../components/AddItemModal.js';

export function renderMenuEditorView(state) {
  const activeCategory = state.menuActiveCategory || 'all';
  const activeDiet = state.menuActiveDiet || 'all';
  const stockOnly = state.menuStockOnlyFilter || false;
  const searchQuery = (state.menuSearchQuery || '').toLowerCase();

  // Filter menu items
  let items = state.menuItems.filter(item => {
    // Search filter
    if (searchQuery) {
      const matchName = item.name.toLowerCase().includes(searchQuery);
      const matchSku = item.sku.toLowerCase().includes(searchQuery);
      const matchDesc = (item.description || '').toLowerCase().includes(searchQuery);
      const matchAddon = (item.customizations || []).some(c => c.toLowerCase().includes(searchQuery));
      if (!matchName && !matchSku && !matchDesc && !matchAddon) return false;
    }
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Diet filter
    if (activeDiet !== 'all' && item.diet !== activeDiet) {
      return false;
    }
    // Stock only filter
    if (stockOnly && item.inStock) {
      return false; // Show only out of stock
    }
    return true;
  });

  const outOfStockCount = state.menuItems.filter(i => !i.inStock).length;
  const totalSalesCount = state.menuItems.reduce((acc, it) => acc + (it.salesCount || 0), 0);

  return `
    <div class="flex flex-col w-full pb-12 gap-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-[#002218] tracking-tight">Menu Catalog & Category Management</h1>
          <p class="text-xs text-[#717974] mt-0.5">Control online visibility, instant 86/stock availability, custom pricing, and menu timing.</p>
        </div>
        <button id="btn-open-add-dish" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold shadow-md transition self-start sm:self-auto">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Add New Dish</span>
        </button>
      </div>

      <!-- Stat Quad Ribbon -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div>
            <span class="text-xs font-semibold text-[#717974] uppercase tracking-wider block mb-1">Active Menu Items</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-[#002218] tabular-nums">${state.menuItems.length}</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">Live in App</span>
            </div>
          </div>
          <div class="w-11 h-11 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
            <span class="material-symbols-outlined text-[24px]">restaurant</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div>
            <span class="text-xs font-semibold text-[#717974] uppercase tracking-wider block mb-1">Out of Stock (86'd)</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-[#ba1a1a] tabular-nums">${outOfStockCount}</span>
              <span class="px-2 py-0.5 rounded-full ${outOfStockCount > 0 ? 'bg-[#ffdad6] text-[#93000a]' : 'bg-gray-100 text-gray-600'} text-[11px] font-bold">
                ${outOfStockCount > 0 ? 'Needs Attention' : 'All In Stock'}
              </span>
            </div>
          </div>
          <div class="w-11 h-11 rounded-xl bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a]">
            <span class="material-symbols-outlined text-[24px]">do_not_disturb_on</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div>
            <span class="text-xs font-semibold text-[#717974] uppercase tracking-wider block mb-1">Total Dish Sales</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-[#002218] tabular-nums">${totalSalesCount}</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">↑ 18.4%</span>
            </div>
          </div>
          <div class="w-11 h-11 rounded-xl bg-[#ffdcbc] flex items-center justify-center text-[#683d00]">
            <span class="material-symbols-outlined text-[24px]">insights</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div>
            <span class="text-xs font-semibold text-[#717974] uppercase tracking-wider block mb-1">Average Dish Rating</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-[#002218] tabular-nums">4.62</span>
              <span class="text-[#895100] text-xs font-bold">★★★★☆</span>
            </div>
          </div>
          <div class="w-11 h-11 rounded-xl bg-[#edf6f0] flex items-center justify-center text-[#12382c]">
            <span class="material-symbols-outlined text-[24px]">star</span>
          </div>
        </div>
      </div>

      <!-- Main Layout: Table Area & Timing Rail -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        <!-- Center Left Workspace (Span 9) -->
        <div class="xl:col-span-9 flex flex-col gap-4">
          
          <!-- Filter and Query Header Surface -->
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] flex flex-col gap-4">
            
            <!-- Search bar + Out-of-Stock Filter Checkbox -->
            <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div class="flex items-center gap-2.5 bg-[#edf6f0] px-3.5 py-2 rounded-xl flex-1 border border-[#dce5df] focus-within:border-[#12382c] transition">
                <span class="material-symbols-outlined text-[#717974] text-[20px]">search</span>
                <input 
                  id="menu-search-input" 
                  class="bg-transparent w-full text-xs text-[#151d1a] placeholder:text-[#717974] focus:outline-none" 
                  placeholder="Search dish by name, add-on, tag, or SKU..." 
                  type="text"
                  value="${state.menuSearchQuery || ''}"
                />
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <label class="flex items-center gap-2 cursor-pointer bg-[#edf6f0] px-3 py-2 rounded-xl border border-[#dce5df] hover:bg-[#e7f0eb] transition">
                  <input 
                    id="stock-filter-toggle" 
                    type="checkbox" 
                    class="rounded w-4 h-4 accent-[#12382c] cursor-pointer"
                    ${stockOnly ? 'checked' : ''}
                  />
                  <span class="text-xs font-semibold text-[#151d1a]">Show Out-of-Stock Only (${outOfStockCount})</span>
                </label>
              </div>
            </div>

            <!-- Category Pills Bar -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'all' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="all">
                All Dishes (${state.menuItems.length})
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'meals' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="meals">
                Meals & Thali (8)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'biryanis' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="biryanis">
                Biryanis (6)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'tiffins' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="tiffins">
                Tiffins & Breakfast (12)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'curries' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="curries">
                Curries & Gravies (5)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${activeCategory === 'snacks' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]'}" data-cat="snacks">
                Snacks & Extras (3)
              </button>
            </div>

            <!-- Dietary Preference Sub-chips -->
            <div class="flex items-center gap-2 flex-wrap pt-2 border-t border-gray-100">
              <span class="text-xs font-bold text-[#717974] mr-1">Diet:</span>
              <button class="menu-diet-pill px-3 py-1 rounded-lg text-xs font-bold transition ${activeDiet === 'all' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a]'}" data-diet="all">
                All Types
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${activeDiet === 'veg' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a]'}" data-diet="veg">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Pure Veg</span>
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${activeDiet === 'nonveg' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a]'}" data-diet="nonveg">
                <span class="w-2 h-2 rounded-full bg-rose-600"></span>
                <span>Non-Veg</span>
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${activeDiet === 'special' ? 'bg-[#12382c] text-white' : 'bg-[#edf6f0] text-[#151d1a]'}" data-diet="special">
                <span class="material-symbols-outlined text-[14px] text-[#fd9d1a]">local_fire_department</span>
                <span>Chef's Special</span>
              </button>
            </div>

          </div>

          <!-- Dish Table Canvas -->
          <div class="bg-white rounded-2xl shadow-sm border border-[#e2eae5] overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-[#edf6f0] text-[#717974] font-bold uppercase tracking-wider border-b border-[#e2eae5]">
                    <th class="py-3.5 px-4 w-12 text-center">Diet</th>
                    <th class="py-3.5 px-4">Item Details & SKU</th>
                    <th class="py-3.5 px-4">Category</th>
                    <th class="py-3.5 px-4">Price</th>
                    <th class="py-3.5 px-4">Add-ons</th>
                    <th class="py-3.5 px-4">Sales & Rating</th>
                    <th class="py-3.5 px-4 text-center">Stock Availability</th>
                    <th class="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 font-medium">
                  ${items.length === 0 ? `
                    <tr>
                      <td colspan="8" class="py-12 text-center text-gray-500">
                        No dishes match the selected category, diet, or search query.
                      </td>
                    </tr>
                  ` : ''}

                  ${items.map(dish => `
                    <tr class="hover:bg-[#f3fbf6] transition group">
                      
                      <!-- Diet Icon -->
                      <td class="py-3.5 px-4 text-center align-top">
                        <div class="w-4 h-4 rounded-xs border-2 ${dish.diet === 'veg' ? 'border-emerald-600' : 'border-rose-600'} flex items-center justify-center mx-auto mt-1" title="${dish.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}">
                          <span class="w-2 h-2 rounded-full ${dish.diet === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'}"></span>
                        </div>
                      </td>

                      <!-- Item Details -->
                      <td class="py-3.5 px-4">
                        <div class="flex items-start gap-3">
                          <img class="w-12 h-12 rounded-xl object-cover shrink-0 border border-gray-200" src="${dish.image}" alt="${dish.name}"/>
                          <div>
                            <div class="font-bold text-sm text-[#002218] flex items-center gap-2">
                              <span>${dish.name}</span>
                              ${!dish.inStock ? `
                                <span class="px-1.5 py-0.2 bg-red-100 text-red-700 text-[10px] font-bold rounded">OUT OF STOCK</span>
                              ` : ''}
                            </div>
                            <div class="text-[11px] text-gray-500 font-mono mt-0.5">
                              SKU: ${dish.sku} • Prep: ${dish.prepTime || '15 mins'}
                            </div>
                            <p class="text-[11px] text-gray-600 line-clamp-1 mt-0.5 max-w-sm">
                              ${dish.description || ''}
                            </p>
                          </div>
                        </div>
                      </td>

                      <!-- Category -->
                      <td class="py-3.5 px-4">
                        <span class="px-2.5 py-1 rounded-full bg-[#edf6f0] text-[#12382c] text-[11px] font-bold">
                          ${dish.categoryLabel}
                        </span>
                      </td>

                      <!-- Price -->
                      <td class="py-3.5 px-4">
                        <div class="font-mono font-bold text-sm text-[#12382c]">₹${dish.price}</div>
                        ${dish.originalPrice ? `
                          <div class="text-[10px] text-gray-400 line-through font-mono">₹${dish.originalPrice}</div>
                        ` : ''}
                      </td>

                      <!-- Add-ons -->
                      <td class="py-3.5 px-4">
                        ${dish.customizations && dish.customizations.length ? `
                          <span class="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[11px] font-medium" title="${dish.customizations.join(', ')}">
                            ${dish.customizations.length} Add-on(s)
                          </span>
                        ` : `
                          <span class="text-gray-400 text-[11px]">None</span>
                        `}
                      </td>

                      <!-- Sales & Rating -->
                      <td class="py-3.5 px-4">
                        <div class="font-bold text-gray-800">${dish.salesCount || 0} sold</div>
                        <div class="text-[11px] text-[#895100] font-bold flex items-center gap-0.5">
                          <span>★ ${dish.rating}</span>
                          <span class="text-gray-400 font-normal">(${dish.reviewsCount || 0})</span>
                        </div>
                      </td>

                      <!-- Stock Availability Toggle Switch -->
                      <td class="py-3.5 px-4 text-center">
                        <button 
                          class="btn-toggle-stock px-3 py-1 rounded-full text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 mx-auto ${dish.inStock ? 'bg-[#c3ebda] text-[#002117] hover:bg-[#a7cfbe]' : 'bg-[#ffdad6] text-[#93000a] hover:bg-[#ffdad6]/80'}" 
                          data-dish-id="${dish.id}"
                        >
                          <span class="w-2 h-2 rounded-full ${dish.inStock ? 'bg-[#12382c]' : 'bg-[#ba1a1a]'}"></span>
                          <span>${dish.inStock ? 'In Stock' : 'Out of Stock'}</span>
                        </button>
                      </td>

                      <!-- Actions -->
                      <td class="py-3.5 px-4 text-right">
                        <button class="btn-edit-price p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition" title="Quick Edit Price" data-dish-id="${dish.id}">
                          <span class="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </td>

                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!-- Right Side Timing Rail (Span 3) -->
        <div class="xl:col-span-3 flex flex-col gap-4">
          
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-[#e2eae5] space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-gray-100">
              <span class="material-symbols-outlined text-[20px] text-[#12382c]">schedule</span>
              <h3 class="font-bold text-sm text-[#002218]">Kitchen Service Timings</h3>
            </div>

            <div class="space-y-3 text-xs">
              <div class="p-3 bg-[#edf6f0] rounded-xl border border-[#c3ebda]">
                <div class="flex justify-between font-bold text-[#002117]">
                  <span>Breakfast Service</span>
                  <span class="text-emerald-700">Completed</span>
                </div>
                <div class="text-[11px] text-gray-500 font-mono mt-0.5">07:00 AM - 11:30 AM</div>
              </div>

              <div class="p-3 bg-white rounded-xl border-2 border-[#12382c] shadow-xs">
                <div class="flex justify-between font-bold text-[#12382c]">
                  <span>Lunch Rush (Active)</span>
                  <span class="w-2 h-2 rounded-full bg-[#12382c] animate-pulse"></span>
                </div>
                <div class="text-[11px] text-gray-600 font-mono mt-0.5">12:00 PM - 03:30 PM</div>
                <div class="text-[11px] text-[#895100] font-semibold mt-1">Full meals & Biryanis live</div>
              </div>

              <div class="p-3 bg-[#f3fbf6] rounded-xl border border-[#e2eae5]">
                <div class="flex justify-between font-bold text-gray-700">
                  <span>Dinner Rush</span>
                  <span class="text-gray-400">Upcoming</span>
                </div>
                <div class="text-[11px] text-gray-500 font-mono mt-0.5">07:00 PM - 11:00 PM</div>
              </div>
            </div>

            <div class="p-3 bg-[#fef3c7] rounded-xl border border-amber-300 text-xs text-amber-900 space-y-1">
              <div class="font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">tips_and_updates</span>
                <span>Pro Chef Tip</span>
              </div>
              <p class="text-[11px]">Toggle dish availability to "Out of Stock" before 13:45 if biryani handi is reaching bottom, to prevent customer cancellation penalty.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

export function attachMenuEditorEvents(state, onStateChange) {
  // Add Dish button
  const addBtn = document.getElementById('btn-open-add-dish');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openAddItemModal((newItem) => {
        state.menuItems.unshift(newItem);
        onStateChange();
      });
    });
  }

  // Category filter pills
  document.querySelectorAll('.menu-cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.menuActiveCategory = pill.getAttribute('data-cat');
      playClickTone();
      onStateChange();
    });
  });

  // Diet filter pills
  document.querySelectorAll('.menu-diet-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.menuActiveDiet = pill.getAttribute('data-diet');
      playClickTone();
      onStateChange();
    });
  });

  // Stock only toggle checkbox
  const stockToggle = document.getElementById('stock-filter-toggle');
  if (stockToggle) {
    stockToggle.addEventListener('change', (e) => {
      state.menuStockOnlyFilter = e.target.checked;
      playClickTone();
      onStateChange();
    });
  }

  // Search input
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.menuSearchQuery = e.target.value;
      onStateChange();
    });
  }

  // Toggle in-stock / out-of-stock
  document.querySelectorAll('.btn-toggle-stock').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-dish-id');
      const dish = state.menuItems.find(d => d.id === dishId);
      if (dish) {
        dish.inStock = !dish.inStock;
        playSuccessChime();
        showToast(
          dish.inStock 
            ? `"${dish.name}" is now IN STOCK & live for orders!` 
            : `"${dish.name}" marked OUT OF STOCK (86'd).`,
          dish.inStock ? 'success' : 'warning'
        );
        onStateChange();
      }
    });
  });

  // Quick Edit Price
  document.querySelectorAll('.btn-edit-price').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-dish-id');
      const dish = state.menuItems.find(d => d.id === dishId);
      if (dish) {
        const newPriceStr = prompt(`Update Base Price for "${dish.name}":`, dish.price);
        if (newPriceStr !== null) {
          const newPrice = parseFloat(newPriceStr);
          if (!isNaN(newPrice) && newPrice > 0) {
            dish.price = newPrice;
            playSuccessChime();
            showToast(`Price updated to ₹${newPrice} for "${dish.name}"`);
            onStateChange();
          }
        }
      }
    });
  });
}
