// Add New Dish Modal
import { showToast } from './Toast.js';
import { playSuccessChime } from '../utils/audio.js';

export function openAddItemModal(onItemAdded) {
  let modal = document.getElementById('add-item-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'add-item-modal';
    modal.className = 'fixed inset-0 z-[90] flex items-center justify-center p-4 modal-backdrop transition-opacity';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col border border-surface-container-high transform transition-all scale-100 max-h-[90vh]">
      <!-- Header -->
      <div class="bg-[#12382c] text-white px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-[22px]">restaurant_menu</span>
          <div>
            <h2 class="font-bold text-base leading-tight">Add New Menu Dish</h2>
            <p class="text-xs text-[#7ba292]">Publish item to online menu immediately</p>
          </div>
        </div>
        <button class="text-white/80 hover:text-white transition p-1" onclick="document.getElementById('add-item-modal').remove()">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      <!-- Form Body -->
      <form id="new-item-form" class="p-6 overflow-y-auto space-y-4 text-left">
        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Dish Name *</label>
          <input required type="text" id="dish-name" placeholder="e.g. Gongura Paneer Pulao" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] focus:ring-1 focus:ring-[#12382c] outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Category *</label>
            <select id="dish-category" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none bg-white">
              <option value="biryanis">Biryanis</option>
              <option value="meals">Meals & Thali</option>
              <option value="tiffins">Tiffins & Breakfast</option>
              <option value="curries">Curries & Gravies</option>
              <option value="snacks">Snacks & Extras</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Diet Classification *</label>
            <select id="dish-diet" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none bg-white">
              <option value="veg">🟢 Pure Veg</option>
              <option value="nonveg">🔴 Non-Veg</option>
              <option value="special">🔥 Chef's Special</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Base Price (₹) *</label>
            <div class="relative">
              <span class="absolute left-3 top-2 text-gray-500 font-bold">₹</span>
              <input required type="number" id="dish-price" min="10" placeholder="180" class="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none font-mono font-semibold" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Kitchen Prep Time *</label>
            <input type="text" id="dish-prep-time" placeholder="15 mins" value="15 mins" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none" />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Custom Add-on Options (Comma separated)</label>
          <input type="text" id="dish-addons" placeholder="Extra Gravy, Fried Cashews, Double Butter" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none" />
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Description</label>
          <textarea id="dish-desc" rows="2" placeholder="Tell customers about the aroma, traditional spices, and ingredients..." class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#12382c] outline-none"></textarea>
        </div>

        <!-- Initial Stock State -->
        <div class="flex items-center justify-between p-3 bg-[#edf6f0] rounded-xl border border-[#c3ebda]">
          <div>
            <span class="text-xs font-bold text-[#002117] block">Available in Kitchen Now</span>
            <span class="text-[11px] text-[#414845]">Will show as In Stock for ordering immediately</span>
          </div>
          <input type="checkbox" id="dish-stock" checked class="w-5 h-5 accent-[#12382c] rounded cursor-pointer" />
        </div>

        <!-- Footer Actions -->
        <div class="pt-3 border-t border-gray-200 flex items-center justify-end gap-2.5">
          <button type="button" class="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition" onclick="document.getElementById('add-item-modal').remove()">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-sm font-semibold shadow-md transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px]">add_task</span>
            <span>Publish Dish to Menu</span>
          </button>
        </div>
      </form>
    </div>
  `;

  document.getElementById('new-item-form').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('dish-name').value.trim();
    const category = document.getElementById('dish-category').value;
    const diet = document.getElementById('dish-diet').value;
    const price = parseFloat(document.getElementById('dish-price').value);
    const prepTime = document.getElementById('dish-prep-time').value.trim() || '15 mins';
    const desc = document.getElementById('dish-desc').value.trim() || 'Authentic dish prepared fresh daily.';
    const inStock = document.getElementById('dish-stock').checked;
    const addonsRaw = document.getElementById('dish-addons').value;
    const customizations = addonsRaw ? addonsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

    const categoryLabels = {
      biryanis: 'Biryanis',
      meals: 'Meals & Thali',
      tiffins: 'Tiffins & Breakfast',
      curries: 'Curries & Gravies',
      snacks: 'Snacks & Extras'
    };

    const newItem = {
      id: `dish-${Date.now()}`,
      sku: `TK-${category.toUpperCase().slice(0, 3)}-${Math.floor(100 + Math.random() * 900)}`,
      name,
      category,
      categoryLabel: categoryLabels[category] || 'Specialty',
      diet,
      price,
      originalPrice: Math.round(price * 1.15),
      inStock,
      salesCount: 0,
      rating: 5.0,
      reviewsCount: 1,
      prepTime,
      description: desc,
      customizations,
      image: diet === 'veg' ? 
        'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80' : 
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80'
    };

    if (onItemAdded) {
      onItemAdded(newItem);
    }

    playSuccessChime();
    showToast(`"${newItem.name}" added to menu catalog!`);
    modal.remove();
  };
}
