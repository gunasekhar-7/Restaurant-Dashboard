(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:104,name:`Sri Venkateswara Meals - Tekkali Branch`,shortName:`Tekkali Junction Hub #104`,rating:4.5,reviewsCount:1240,address:`Main Road, Near Old Bus Stand, Tekkali, Srikakulam Dist`,isOpen:!0,isAccepting:!0,manager:`Narendra P.`,phone:`+91 89452 48920`},{id:105,name:`Sri Venkateswara Meals - Sompeta Highway Branch`,shortName:`Sompeta Bypass Hub #105`,rating:4.4,reviewsCount:820,address:`NH-16 Junction, Sompeta, Srikakulam Dist`,isOpen:!0,isAccepting:!0,manager:`Satish K.`,phone:`+91 89452 48925`},{id:106,name:`Sri Venkateswara Meals - Palasa Express Hub`,shortName:`Palasa Railway Road #106`,rating:4.6,reviewsCount:950,address:`Opp. Railway Station, Palasa-Kasibugga`,isOpen:!0,isAccepting:!1,manager:`Venkat R.`,phone:`+91 89452 48930`}],t=[{id:`TK-8492`,customerName:`Narendra P.`,customerPhone:`+91 98480 34912`,deliveryAddress:`Flat 302, Sai Balaji Residency, Revenue Ward 4, Tekkali`,paymentMethod:`UPI Paid (PhonePe)`,totalAmount:355,status:`incoming`,countdownSeconds:45,orderedAt:`13:42`,kitchenPrepTarget:18,specialInstructions:`Please make biryani extra spicy with hot salan and send extra onion lemon salad. Do not ring doorbell, baby is sleeping.`,items:[{id:`b1`,name:`Hyderabadi Chicken Biryani`,quantity:2,price:160,customizations:[`Extra Masala Raita`,`Boiled Egg`]},{id:`s1`,name:`Single Curd Cup`,quantity:1,price:20,customizations:[]},{id:`c1`,name:`Packaging & Cutlery`,quantity:1,price:15,customizations:[]}],rider:null},{id:`TK-8493`,customerName:`Divya K.`,customerPhone:`+91 94901 88472`,deliveryAddress:`Door No. 12-4-8, College Road, Near Govt Junior College, Tekkali`,paymentMethod:`Prepaid (Google Pay)`,totalAmount:220,status:`incoming`,countdownSeconds:85,orderedAt:`13:44`,kitchenPrepTarget:15,specialInstructions:`Pack hot appalam/papad separately in paper cover so it does not turn soft.`,items:[{id:`m1`,name:`Andhra Special Veg Meals (Full)`,quantity:1,price:180,customizations:[`Ghee Rice Upgrade`,`Extra Gongura Pachadi`]},{id:`s2`,name:`Masala Butter Milk`,quantity:1,price:25,customizations:[]},{id:`c1`,name:`Eco Container Pack`,quantity:1,price:15,customizations:[]}],rider:null},{id:`TK-8489`,customerName:`Rajesh V.`,customerPhone:`+91 99890 12044`,deliveryAddress:`H.No 4-18, Teachers Colony, Tekkali`,paymentMethod:`UPI Paid (Paytm)`,totalAmount:940,status:`cooking`,timerMinutes:8,timerSeconds:45,orderedAt:`13:30`,kitchenPrepTarget:22,specialInstructions:`Less oil in mutton gravy. Include extra lime slices.`,items:[{id:`b2`,name:`Guntur Gongura Mutton Biryani`,quantity:3,price:290,customizations:[`Double Mirchi Salan`]},{id:`bv1`,name:`Thums Up (250ml Can)`,quantity:2,price:35,customizations:[`Chilled`]}],rider:{name:`P. Tarun Kumar`,phone:`+91 97014 55321`,vehicle:`Hero Glamour (AP 30 AQ 7712)`,status:`On the way to restaurant`,eta:`5 mins`}},{id:`TK-8490`,customerName:`Santosh M.`,customerPhone:`+91 94412 76390`,deliveryAddress:`State Bank Colony, Near Water Tank, Tekkali`,paymentMethod:`Cash on Delivery`,totalAmount:390,status:`cooking`,timerMinutes:14,timerSeconds:20,orderedAt:`13:36`,kitchenPrepTarget:20,specialInstructions:`Make paneer curry sweet & spicy blend. Naan crispy buttered.`,items:[{id:`c2`,name:`Paneer Butter Masala (Handi)`,quantity:1,price:210,customizations:[`Cashew Rich Gravy`]},{id:`n1`,name:`Tandoori Butter Naan`,quantity:4,price:40,customizations:[`Crisp Roast`]},{id:`c1`,name:`Packaging`,quantity:1,price:20,customizations:[]}],rider:{name:`B. Shiva`,phone:`+91 88970 33418`,vehicle:`Honda Activa 6G (AP 30 BB 4519)`,status:`Assigned`,eta:`8 mins`}},{id:`TK-8491`,customerName:`Sneha R.`,customerPhone:`+91 96180 43900`,deliveryAddress:`Sri Krishna Nagar, Main Lane, Tekkali`,paymentMethod:`UPI Paid (Cred UPI)`,totalAmount:360,status:`cooking`,timerMinutes:4,timerSeconds:15,orderedAt:`13:28`,kitchenPrepTarget:16,specialInstructions:`Hot sambar strictly.`,items:[{id:`m2`,name:`Andhra Traditional Meals Thali`,quantity:2,price:160,customizations:[`Extra Sambar Bowl`]},{id:`m3`,name:`Cream Curd Rice Bowl`,quantity:1,price:40,customizations:[`Pomegranate Topping`]}],rider:{name:`D. Manoj`,phone:`+91 91770 19283`,vehicle:`TVS Jupiter (AP 30 DH 2210)`,status:`Reached Restaurant`,eta:`At gate`}},{id:`TK-8486`,customerName:`K. Prasad`,customerPhone:`+91 98481 00293`,deliveryAddress:`Court Road, Judicial Quarters, Tekkali`,paymentMethod:`Prepaid`,totalAmount:780,status:`ready`,orderedAt:`13:15`,readyAt:`13:35`,specialInstructions:`Packed in thermal insulated bag.`,items:[{id:`b3`,name:`Chicken Dum Biryani Family Bucket`,quantity:1,price:740,customizations:[`Extra Gravy (500ml)`,`Gulab Jamun (4pcs)`]},{id:`c1`,name:`Family Packaging`,quantity:1,price:40,customizations:[]}],rider:{name:`Surya Teja`,phone:`+91 98480 22319`,vehicle:`Hero Splendor (AP 30 BE 8491)`,status:`Waiting at Pickup Counter`,eta:`Ready to dispatch`}},{id:`TK-8488`,customerName:`Anil Kumar`,customerPhone:`+91 93902 44102`,deliveryAddress:`R&B Guest House Road, Tekkali`,paymentMethod:`UPI Paid`,totalAmount:240,status:`ready`,orderedAt:`13:20`,readyAt:`13:38`,specialInstructions:`Include extra spicy schezwan dip.`,items:[{id:`ch1`,name:`Veg Fried Rice + Veg Manchurian Combo`,quantity:1,price:220,customizations:[`Spicy Gravy`]},{id:`c1`,name:`Container Box`,quantity:1,price:20,customizations:[]}],rider:{name:`K. Ramesh`,phone:`+91 94401 88321`,vehicle:`Bajaj Pulsar (AP 30 CZ 1024)`,status:`Entering Parking`,eta:`1 min`}},{id:`TK-8484`,customerName:`Harish Varma`,customerPhone:`+91 95020 77129`,deliveryAddress:`MRO Office Colony, Block B, Tekkali`,paymentMethod:`UPI Paid`,totalAmount:520,status:`delivery`,orderedAt:`13:05`,dispatchedAt:`13:26`,specialInstructions:`Call rider when reached near water tank.`,items:[{id:`b1`,name:`Special Chicken Biryani + Chicken 65`,quantity:1,price:340,customizations:[]},{id:`m1`,name:`Mini Veg Meals Thali`,quantity:1,price:150,customizations:[]},{id:`c1`,name:`Packaging`,quantity:1,price:30,customizations:[]}],rider:{name:`M. Vamsi`,phone:`+91 99630 18294`,vehicle:`Hero Passion Pro (AP 30 CL 9081)`,status:`In Transit to Customer`,eta:`4 mins away`}}],n=[{id:`dish-101`,sku:`TK-BIR-001`,name:`Special Chicken Dum Biryani (Single)`,category:`biryanis`,categoryLabel:`Biryanis`,diet:`nonveg`,price:180,originalPrice:200,inStock:!0,salesCount:184,rating:4.8,reviewsCount:342,prepTime:`15 mins`,description:`Aromatic Seeraga Samba & Basmati blend slow-cooked in copper handi with bone-in tender chicken and authentic Srikakulam spices.`,customizations:[`Extra Salan`,`Boiled Egg`,`Raita Cup`],image:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80`},{id:`dish-102`,sku:`TK-BIR-002`,name:`Guntur Gongura Mutton Biryani`,category:`biryanis`,categoryLabel:`Biryanis`,diet:`special`,price:320,originalPrice:350,inStock:!0,salesCount:96,rating:4.9,reviewsCount:158,prepTime:`22 mins`,description:`Chef signature specialty tender baby goat meat layered with sour gongura paste, caramelized shallots, and fragrant aged basmati.`,customizations:[`Extra Gongura Gravy`,`Fried Onions`],image:`https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80`},{id:`dish-103`,sku:`TK-BIR-003`,name:`Hyderabadi Chicken Dum Biryani (Family Pack)`,category:`biryanis`,categoryLabel:`Biryanis`,diet:`nonveg`,price:680,originalPrice:750,inStock:!0,salesCount:42,rating:4.7,reviewsCount:89,prepTime:`20 mins`,description:`Feeds 3-4 hungry foodies. Includes 4 large chicken pieces, 2 boiled eggs, 500ml mirchi salan, and rich curd raita.`,customizations:[`Double Salan`,`Extra Raita`,`Sweet Box`],image:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80`},{id:`dish-104`,sku:`TK-THL-001`,name:`Andhra Traditional Unlimited Meals Thali`,category:`meals`,categoryLabel:`Meals & Thali`,diet:`veg`,price:160,originalPrice:180,inStock:!0,salesCount:248,rating:4.9,reviewsCount:512,prepTime:`10 mins`,description:`Steaming Sona Masoori rice served with homemade cow ghee, gun powder (kandi podi), avakaya pickle, sambar, majjiga pulusu, rasam, and fresh curd.`,customizations:[`Extra Cow Ghee (50ml)`,`Extra Sambar`,`Appalam Pack`],image:`https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80`},{id:`dish-105`,sku:`TK-THL-002`,name:`Special Non-Veg Meals with Natu Kodi Pulusu`,category:`meals`,categoryLabel:`Meals & Thali`,diet:`special`,price:280,originalPrice:310,inStock:!1,salesCount:110,rating:4.85,reviewsCount:210,prepTime:`20 mins`,description:`Country chicken curry simmered in earthen clay pot with poppy seeds and dry coconut paste, paired with Andhra rice meals set.`,customizations:[`Extra Country Chicken Piece`,`Rasam Cup`],image:`https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&q=80`},{id:`dish-106`,sku:`TK-TIF-001`,name:`Ghee Karam Dosa (Crispy Thin)`,category:`tiffins`,categoryLabel:`Tiffins & Breakfast`,diet:`veg`,price:65,originalPrice:75,inStock:!0,salesCount:315,rating:4.75,reviewsCount:420,prepTime:`8 mins`,description:`Golden fermented rice crepe smeared with fiery red garlic chili chutney, roasted in pure country ghee. Served with 3 coconut chutneys.`,customizations:[`Double Karam`,`Butter Dollop`,`Sambar Dip`],image:`https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&q=80`},{id:`dish-107`,sku:`TK-TIF-002`,name:`Steamed Rice Idli with Sambar & Allam Chutney (4 Pcs)`,category:`tiffins`,categoryLabel:`Tiffins & Breakfast`,diet:`veg`,price:50,originalPrice:60,inStock:!0,salesCount:410,rating:4.8,reviewsCount:630,prepTime:`5 mins`,description:`Feather-light steamed rice cakes accompanied by piping hot drumstick sambar, ginger jaggery pachadi, and creamy peanut chutney.`,customizations:[`Ghee Dip`,`Podi Dusting`],image:`https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&q=80`},{id:`dish-108`,sku:`TK-TIF-003`,name:`Crispy Medu Vada (3 Pcs)`,category:`tiffins`,categoryLabel:`Tiffins & Breakfast`,diet:`veg`,price:60,originalPrice:70,inStock:!1,salesCount:198,rating:4.6,reviewsCount:240,prepTime:`10 mins`,description:`Crispy golden urad dal fritters spiced with fresh peppercorns, crushed cumin, green chilies, and curry leaves.`,customizations:[`Dunked in Sambar`,`Extra Coconut Chutney`],image:`https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80`},{id:`dish-109`,sku:`TK-CUR-001`,name:`Nellore Chepala Pulusu (Fish Curry)`,category:`curries`,categoryLabel:`Curries & Gravies`,diet:`special`,price:240,originalPrice:270,inStock:!0,salesCount:88,rating:4.92,reviewsCount:174,prepTime:`18 mins`,description:`Fresh river Murrel fish steaks simmered in tangy raw mango, aged tamarind, and fenugreek masala. Famous coastal Andhra delicacy.`,customizations:[`Extra Fish Piece`,`Spicy Gravy Bowl`],image:`https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&q=80`},{id:`dish-110`,sku:`TK-CUR-002`,name:`Paneer Butter Masala (Handi)`,category:`curries`,categoryLabel:`Curries & Gravies`,diet:`veg`,price:210,originalPrice:230,inStock:!0,salesCount:165,rating:4.7,reviewsCount:190,prepTime:`15 mins`,description:`Soft cottage cheese cubes enveloped in a rich, buttery tomato-cashew satin gravy finished with kasuri methi and fresh cream.`,customizations:[`Mild Spice`,`Extra Butter Cubes`],image:`https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80`},{id:`dish-111`,sku:`TK-SNK-001`,name:`Chicken 65 (Boneless Andhra Style)`,category:`snacks`,categoryLabel:`Snacks & Extras`,diet:`nonveg`,price:190,originalPrice:220,inStock:!0,salesCount:220,rating:4.88,reviewsCount:310,prepTime:`12 mins`,description:`Bite-sized chicken chunks tossed with tempered curry leaves, slit green chilies, yogurt marinade, and garlic cloves.`,customizations:[`Crispy Dry`,`Semi Gravy`,`Onion Ring Salad`],image:`https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80`},{id:`dish-112`,sku:`TK-SNK-002`,name:`Palli Karam Podi & Ghee Rice Bowl`,category:`snacks`,categoryLabel:`Snacks & Extras`,diet:`veg`,price:90,originalPrice:100,inStock:!1,salesCount:84,rating:4.65,reviewsCount:92,prepTime:`6 mins`,description:`Comfort meal of steaming rice mixed with freshly pounded roasted peanut powder, garlic podi, and generous buffalo ghee.`,customizations:[`Extra Ghee`,`Dry Chilli Papad`],image:`https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&q=80`}],r=[{id:`SETTL-2026-W42`,cyclePeriod:`13 Oct 2026 - 19 Oct 2026`,cycleType:`Weekly Settlement`,payoutDate:`20 Oct 2026`,utrNumber:`HDFCN2629482910`,bankAccount:`HDFC Bank ****4921`,grossSales:154200,ordersCount:462,packagingCharges:5800,customerDeliveryFee:9240,platformCommissionRate:`15.0%`,platformCommissionAmount:23130,gstOnCommission:4163.4,tcsRate:`1.0%`,tcsAmount:1542,tdsRate:`1.0%`,tdsAmount:1542,adjustments:0,netPayout:124620,status:`settled`,settledTimestamp:`20 Oct 2026, 11:24 AM`},{id:`SETTL-2026-W43`,cyclePeriod:`20 Oct 2026 - 26 Oct 2026`,cycleType:`Weekly Settlement`,payoutDate:`Tomorrow at 10:00 AM`,utrNumber:`Pending Processing`,bankAccount:`HDFC Bank ****4921`,grossSales:61400,ordersCount:184,packagingCharges:2300,customerDeliveryFee:3680,platformCommissionRate:`15.0%`,platformCommissionAmount:9210,gstOnCommission:1657.8,tcsRate:`1.0%`,tcsAmount:614,tdsRate:`1.0%`,tdsAmount:614,adjustments:0,netPayout:48250,status:`processing`,settledTimestamp:`Scheduled for 28 Oct 2026`},{id:`SETTL-2026-W41`,cyclePeriod:`06 Oct 2026 - 12 Oct 2026`,cycleType:`Weekly Settlement`,payoutDate:`13 Oct 2026`,utrNumber:`HDFCN2628791048`,bankAccount:`HDFC Bank ****4921`,grossSales:142100,ordersCount:418,packagingCharges:5200,customerDeliveryFee:8360,platformCommissionRate:`15.0%`,platformCommissionAmount:21315,gstOnCommission:3836.7,tcsRate:`1.0%`,tcsAmount:1421,tdsRate:`1.0%`,tdsAmount:1421,adjustments:0,netPayout:114880,status:`settled`,settledTimestamp:`13 Oct 2026, 10:15 AM`},{id:`SETTL-2026-W40`,cyclePeriod:`29 Sep 2026 - 05 Oct 2026`,cycleType:`Weekly Settlement`,payoutDate:`06 Oct 2026`,utrNumber:`HDFCN2628019482`,bankAccount:`HDFC Bank ****4921`,grossSales:136500,ordersCount:395,packagingCharges:4900,customerDeliveryFee:7900,platformCommissionRate:`15.0%`,platformCommissionAmount:20475,gstOnCommission:3685.5,tcsRate:`1.0%`,tcsAmount:1365,tdsRate:`1.0%`,tdsAmount:1365,adjustments:-500,netPayout:109850,status:`settled`,settledTimestamp:`06 Oct 2026, 10:48 AM`}],i=[{id:`n1`,type:`order`,title:`New High-Value Order #TK-8492`,message:`2x Hyderabadi Chicken Biryani + Addons (₹355). Immediate kitchen prep required.`,time:`2 mins ago`,unread:!0},{id:`n2`,type:`rush`,title:`Peak Rush Advisory (Lunch Service)`,message:`Incoming order velocity up +42% in Tekkali cluster. Average delivery time 24 mins.`,time:`18 mins ago`,unread:!0},{id:`n3`,type:`payout`,title:`Weekly Payout Ready for Clearance`,message:`₹48,250 scheduled for direct bank credit to HDFC ****4921 tomorrow morning.`,time:`1 hour ago`,unread:!1},{id:`n4`,type:`inventory`,title:`Out of Stock Alert`,message:`Natu Kodi Pulusu marked unavailable by head chef Narendra.`,time:`3 hours ago`,unread:!1}],a=null,o=localStorage.getItem(`tastykart_audio_muted`)===`true`;function s(){if(!a){let e=window.AudioContext||window.webkitAudioContext;e&&(a=new e)}return a&&a.state===`suspended`&&a.resume(),a}function c(){return o}function l(){return o=!o,localStorage.setItem(`tastykart_audio_muted`,o),o||d(),!o}function u(){if(!o)try{let e=s();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(659.25,t),r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.35);let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.setValueAtTime(783.99,t+.12),a.gain.setValueAtTime(.25,t+.12),a.gain.exponentialRampToValueAtTime(.001,t+.6),i.connect(a),a.connect(e.destination),i.start(t+.12),i.stop(t+.6)}catch(e){console.debug(`Web Audio not allowed yet without user gesture`,e)}}function d(){if(!o)try{let e=s();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`triangle`,n.frequency.setValueAtTime(523.25,t),n.frequency.exponentialRampToValueAtTime(1046.5,t+.22),r.gain.setValueAtTime(.18,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.35)}catch(e){console.debug(`Audio error`,e)}}function f(){if(!o)try{let e=s();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(440,t),r.gain.setValueAtTime(.05,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(r),r.connect(e.destination),n.start(t),n.stop(t+.08)}catch{}}var p=null;function m(){return p||(p=document.createElement(`div`),p.id=`toast-container`,p.className=`fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none`,document.body.appendChild(p)),p}function h(e,t=`success`,n=3200){let r=m(),i=document.createElement(`div`),a=t===`success`?`check_circle`:t===`error`?`error`:t===`warning`?`warning`:`info`;i.className=`${t===`success`?`bg-[#12382c] text-white border border-[#7ba292]/30`:t===`error`?`bg-[#ba1a1a] text-white border border-[#ffdad6]/30`:t===`warning`?`bg-[#fd9d1a] text-[#2c1700] border border-[#ffdcbc]`:`bg-[#2a322f] text-white border border-[#717974]/30`} pointer-events-auto px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 text-sm font-medium transform transition-all duration-200 translate-y-3 opacity-0`,i.innerHTML=`
    <span class="material-symbols-outlined text-[20px] shrink-0">${a}</span>
    <span class="leading-snug">${e}</span>
    <button class="ml-auto opacity-70 hover:opacity-100 transition p-1" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `,r.appendChild(i),requestAnimationFrame(()=>{i.classList.remove(`translate-y-3`,`opacity-0`),i.classList.add(`translate-y-0`,`opacity-100`)}),setTimeout(()=>{i.classList.remove(`translate-y-0`,`opacity-100`),i.classList.add(`translate-y-2`,`opacity-0`),setTimeout(()=>i.remove(),250)},n)}function g(e,t,n,r){let i=e.branches.find(t=>t.id===e.activeBranchId)||e.branches[0],a=e.orders.filter(e=>e.status!==`delivered`&&e.status!==`cancelled`).length;return`
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
              <span class="w-2.5 h-2.5 rounded-full ${i.isAccepting?`bg-[#12382c]`:`bg-[#ba1a1a]`} shrink-0 ring-2 ring-[#c3ebda]"></span>
              <span class="text-xs text-[#151d1a] font-bold truncate">${i.name}</span>
            </div>
            <span class="material-symbols-outlined text-[#414845] text-[18px] shrink-0">unfold_more</span>
          </div>

          <!-- Dropdown Menu (Hidden by default) -->
          <div id="branch-dropdown" class="hidden absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-50 overflow-hidden">
            ${e.branches.map(t=>`
              <div class="px-3 py-2 text-xs hover:bg-[#f3fbf6] cursor-pointer flex items-center justify-between ${t.id===e.activeBranchId?`bg-[#edf6f0] font-bold text-[#12382c]`:`text-gray-700`}" data-branch-id="${t.id}">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${t.isAccepting?`bg-emerald-600`:`bg-rose-500`}"></span>
                  <span>${t.shortName}</span>
                </div>
                <span class="text-[11px] text-gray-500">★ ${t.rating}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1.5" id="nav-container">
          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${e.activeView===`dashboard`?`bg-[#12382c] text-white font-semibold shadow-md`:`text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]`}" data-view="dashboard">
            <span class="material-symbols-outlined text-[20px]">space_dashboard</span>
            <span class="text-sm font-medium">Dashboard & Analytics</span>
          </a>

          <a class="nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${e.activeView===`live-orders`?`bg-[#12382c] text-white font-semibold shadow-md`:`text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]`}" data-view="live-orders">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[20px]">skillet</span>
              <span class="text-sm font-medium">Live Kitchen Feed</span>
            </div>
            <span class="px-2 py-0.5 rounded-full ${a>0?`bg-[#fd9d1a] text-[#663b00]`:`bg-gray-200 text-gray-600`} text-xs font-bold shadow-sm">
              ${a}
            </span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${e.activeView===`menu-editor`?`bg-[#12382c] text-white font-semibold shadow-md`:`text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]`}" data-view="menu-editor">
            <span class="material-symbols-outlined text-[20px]">restaurant_menu</span>
            <span class="text-sm font-medium">Menu Catalog & Stock</span>
          </a>

          <a class="nav-item flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${e.activeView===`payout-history`?`bg-[#12382c] text-white font-semibold shadow-md`:`text-[#414845] hover:bg-[#e7f0eb] hover:text-[#151d1a]`}" data-view="payout-history">
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
            <button id="sidebar-accepting-toggle" class="flex items-center gap-1.5 px-2.5 py-1 rounded-full ${i.isAccepting?`bg-[#c3ebda] text-[#002117]`:`bg-[#ffdad6] text-[#93000a]`} text-xs font-bold transition hover:opacity-90">
              <span class="w-2 h-2 rounded-full ${i.isAccepting?`bg-[#12382c] animate-pulse`:`bg-[#ba1a1a]`}"></span>
              <span>${i.isAccepting?`ON`:`PAUSED`}</span>
            </button>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[#12382c] flex items-center justify-center text-white shrink-0 font-bold text-xs shadow-sm">
              NP
            </div>
            <div class="flex flex-col min-w-0">
              <span class="text-xs text-[#151d1a] font-bold truncate">${i.manager}</span>
              <span class="text-[11px] text-[#717974] truncate">Shift Manager</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `}function _(e,t,n,r){document.querySelectorAll(`.nav-item[data-view]`).forEach(e=>{e.addEventListener(`click`,()=>{f(),t(e.getAttribute(`data-view`))})});let i=document.getElementById(`branch-select-btn`),a=document.getElementById(`branch-dropdown`);i&&a&&(i.addEventListener(`click`,e=>{e.stopPropagation(),a.classList.toggle(`hidden`)}),a.querySelectorAll(`[data-branch-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let r=parseInt(e.getAttribute(`data-branch-id`),10);a.classList.add(`hidden`),d(),n(r)})}),document.addEventListener(`click`,()=>{a.classList.add(`hidden`)}));let o=document.getElementById(`sidebar-accepting-toggle`);o&&o.addEventListener(`click`,()=>{d(),r()});let s=document.getElementById(`btn-customer-reviews`);s&&s.addEventListener(`click`,()=>{h(`Opening Customer Reviews: 4.5 Stars across 1,240+ verified patrons`,`info`)});let c=document.getElementById(`btn-store-settings`);c&&c.addEventListener(`click`,()=>{h(`Kitchen Settings: Auto-printing enabled, Bluetooth thermal connected`,`info`)})}var v=[...i];function y(){return v.filter(e=>e.unread).length}function b(e){let t=document.getElementById(`notifications-modal`);if(t){t.remove();return}t=document.createElement(`div`),t.id=`notifications-modal`,t.className=`fixed top-16 right-6 z-[80] w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transform transition-all duration-200`;let n=()=>v.map(e=>`
      <div class="p-3.5 border-b border-gray-100 hover:bg-[#f3fbf6] transition cursor-pointer ${e.unread?`bg-[#edf6f0]/60`:``}" data-id="${e.id}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-1.5 font-semibold text-xs text-[#002218]">
            ${e.unread?`<span class="w-2 h-2 rounded-full bg-[#fd9d1a]"></span>`:``}
            <span>${e.title}</span>
          </div>
          <span class="text-[10px] text-gray-400 shrink-0">${e.time}</span>
        </div>
        <p class="text-xs text-gray-600 mt-1 leading-relaxed">${e.message}</p>
      </div>
    `).join(``);t.innerHTML=`
    <div class="p-4 bg-[#12382c] text-white flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">notifications</span>
        <span class="font-bold text-sm">Notifications & Alerts</span>
        <span class="px-2 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-[10px] font-bold" id="notif-badge-count">
          ${y()} new
        </span>
      </div>
      <button class="text-xs text-[#7ba292] hover:text-white transition font-medium" id="mark-all-read-btn">
        Mark all read
      </button>
    </div>

    <div class="max-h-96 overflow-y-auto divide-y divide-gray-100" id="notif-list-container">
      ${n()}
    </div>

    <div class="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
      <span>Operational alerts update in real-time</span>
      <button class="text-[#12382c] font-bold hover:underline" onclick="document.getElementById('notifications-modal').remove()">
        Close
      </button>
    </div>
  `,document.body.appendChild(t);let r=e=>{let n=document.getElementById(`notif-bell-btn`);t&&!t.contains(e.target)&&n&&!n.contains(e.target)&&(t.remove(),document.removeEventListener(`click`,r))};setTimeout(()=>document.addEventListener(`click`,r),50),document.getElementById(`mark-all-read-btn`).onclick=()=>{v.forEach(e=>e.unread=!1),document.getElementById(`notif-list-container`).innerHTML=n(),document.getElementById(`notif-badge-count`).textContent=`0 new`;let e=document.getElementById(`header-notif-dot`);e&&e.classList.add(`hidden`)}}function x(e){let t=document.getElementById(`add-item-modal`);t||(t=document.createElement(`div`),t.id=`add-item-modal`,t.className=`fixed inset-0 z-[90] flex items-center justify-center p-4 modal-backdrop transition-opacity`,document.body.appendChild(t)),t.innerHTML=`
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
  `,document.getElementById(`new-item-form`).onsubmit=n=>{n.preventDefault();let r=document.getElementById(`dish-name`).value.trim(),i=document.getElementById(`dish-category`).value,a=document.getElementById(`dish-diet`).value,o=parseFloat(document.getElementById(`dish-price`).value),s=document.getElementById(`dish-prep-time`).value.trim()||`15 mins`,c=document.getElementById(`dish-desc`).value.trim()||`Authentic dish prepared fresh daily.`,l=document.getElementById(`dish-stock`).checked,u=document.getElementById(`dish-addons`).value,f=u?u.split(`,`).map(e=>e.trim()).filter(Boolean):[],p={id:`dish-${Date.now()}`,sku:`TK-${i.toUpperCase().slice(0,3)}-${Math.floor(100+Math.random()*900)}`,name:r,category:i,categoryLabel:{biryanis:`Biryanis`,meals:`Meals & Thali`,tiffins:`Tiffins & Breakfast`,curries:`Curries & Gravies`,snacks:`Snacks & Extras`}[i]||`Specialty`,diet:a,price:o,originalPrice:Math.round(o*1.15),inStock:l,salesCount:0,rating:5,reviewsCount:1,prepTime:s,description:c,customizations:f,image:a===`veg`?`https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80`:`https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80`};e&&e(p),d(),h(`"${p.name}" added to menu catalog!`),t.remove()}}function S(e){let t=e.branches.find(t=>t.id===e.activeBranchId)||e.branches[0],n=c(),r=y();return`
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
              value="${e.searchQuery||``}"
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
            <span class="w-2.5 h-2.5 rounded-full ${t.isAccepting?`bg-[#12382c] animate-pulse`:`bg-[#ba1a1a]`}"></span>
            <span class="text-xs text-[#151d1a] font-bold">
              ${t.isAccepting?`Open • Accepting Orders`:`Store Paused`}
            </span>
          </div>

          <!-- Audio Alert Toggle -->
          <button 
            id="header-audio-toggle" 
            class="flex items-center gap-1.5 p-2 rounded-xl border border-[#e2eae5] bg-white text-[#414845] hover:bg-[#edf6f0] transition shadow-xs" 
            title="${n?`Unmute Audio Alert Chime`:`Mute Audio Alert Chime`}"
            type="button"
          >
            <span class="material-symbols-outlined text-[20px] ${n?`text-[#ba1a1a]`:`text-[#895100]`}">
              ${n?`volume_off`:`volume_up`}
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
            ${r>0?`
              <span id="header-notif-dot" class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#fd9d1a] ring-2 ring-white"></span>
            `:``}
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
  `}function C(e,t,n){let r=document.getElementById(`global-search-input`);r&&r.addEventListener(`input`,e=>{t(e.target.value)});let i=document.getElementById(`header-audio-toggle`);i&&i.addEventListener(`click`,()=>{let e=l();h(e?`Alert chimes turned ON`:`Alert chimes MUTED`,`info`);let t=i.querySelector(`.material-symbols-outlined`);t&&(t.textContent=e?`volume_up`:`volume_off`,t.className=`material-symbols-outlined text-[20px] ${e?`text-[#895100]`:`text-[#ba1a1a]`}`)});let a=document.getElementById(`notif-bell-btn`);a&&a.addEventListener(`click`,e=>{e.stopPropagation(),f(),b()});let o=document.getElementById(`header-add-item-btn`);o&&o.addEventListener(`click`,()=>{f(),x(n)});let s=document.getElementById(`date-range-select`);s&&s.addEventListener(`change`,e=>{h(`Analytics filtered to: ${e.target.options[e.target.selectedIndex].text}`,`info`)})}function w(e){let t=e.branches.find(t=>t.id===e.activeBranchId)||e.branches[0],n=e.orders.filter(e=>e.status===`cooking`).length,r=e.orders.filter(e=>e.status===`ready`).length,i=e.orders.filter(e=>e.status===`delivery`).length,a=n+r+i+e.orders.filter(e=>e.status===`incoming`).length;return`
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
              <h1 class="text-2xl font-bold text-[#002218] tracking-tight">${t.name}</h1>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e7f0eb] text-[#151d1a] text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-[#12382c]"></span>
                ${t.shortName}
              </span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdcbc] text-[#683d00] text-xs font-bold">
                <span class="material-symbols-outlined text-[14px]">star</span> ${t.rating} (${t.reviewsCount}+ reviews)
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
            <span id="pause-kitchen-text">${e.kitchenPaused?`Resume Kitchen`:`Pause Kitchen (15m)`}</span>
          </button>

          <button id="btn-goto-live-orders" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#12382c] text-white text-xs font-bold hover:bg-[#1b4d3e] transition shadow-md" type="button">
            <span class="material-symbols-outlined text-[18px]">notifications_active</span>
            <span>Live Kitchen Feed</span>
            <span class="ml-1 px-2 py-0.5 bg-[#fd9d1a] text-[#2c1700] text-[11px] font-extrabold rounded-full">
              ${a}
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
              <span class="text-lg font-bold text-[#151d1a]">${n} Active</span>
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
              <span class="text-lg font-bold text-[#151d1a]">${r} Orders</span>
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
              <span class="text-lg font-bold text-[#151d1a]">${i} En Route</span>
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
  `}function T(e,t){let n=document.getElementById(`btn-export-sales`);n&&n.addEventListener(`click`,()=>{d();let e=document.createElement(`a`);e.setAttribute(`href`,`data:text/csv;charset=utf-8,Branch,Date,Total%20Revenue,Orders%20Fulfilled,AOV,Fulfillment%20Rate%0ASri%20Venkateswara%20Meals%20-%20Tekkali,2026-10-27,48250,140,339.80,98.6%25%0A`),e.setAttribute(`download`,`TastyKart_Tekkali_Daily_Sales_Report.csv`),document.body.appendChild(e),e.click(),e.remove(),h(`Daily Sales CSV downloaded successfully!`)});let r=document.getElementById(`btn-pause-kitchen`);r&&r.addEventListener(`click`,()=>{e.kitchenPaused=!e.kitchenPaused;let t=document.getElementById(`pause-kitchen-text`);t&&(t.textContent=e.kitchenPaused?`Resume Kitchen`:`Pause Kitchen (15m)`),f(),h(e.kitchenPaused?`Kitchen paused for 15 minutes. Online orders halted.`:`Kitchen resumed! Accepting online orders.`,`warning`)});let i=document.getElementById(`btn-goto-live-orders`);i&&i.addEventListener(`click`,()=>{f(),t(`live-orders`)}),document.querySelectorAll(`.pipeline-card`).forEach(n=>{n.addEventListener(`click`,()=>{e.kdsStageFilter=n.getAttribute(`data-filter`),f(),t(`live-orders`)})}),document.querySelectorAll(`.chart-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.chart-tab-btn`).forEach(e=>{e.className=`chart-tab-btn px-3 py-1 text-xs font-medium rounded-lg text-[#717974] hover:text-[#151d1a]`}),e.className=`chart-tab-btn px-3 py-1 text-xs font-bold rounded-lg bg-white text-[#12382c] shadow-xs`,f(),h(`Chart filtered to: ${e.textContent}`,`info`)})})}function E(e){let t=document.getElementById(`kot-modal`);t||(t=document.createElement(`div`),t.id=`kot-modal`,t.className=`fixed inset-0 z-[90] flex items-center justify-center p-4 modal-backdrop transition-opacity`,document.body.appendChild(t));let n=e.items.map(e=>`
    <div class="flex justify-between items-start text-xs font-mono py-1 border-b border-dashed border-gray-300">
      <div class="flex-1 pr-2">
        <span class="font-bold">${e.quantity}x</span> ${e.name}
        ${e.customizations&&e.customizations.length?`
          <div class="text-[11px] text-gray-600 pl-3">↳ ${e.customizations.join(`, `)}</div>
        `:``}
      </div>
      <span class="font-bold">₹${e.price*e.quantity}</span>
    </div>
  `).join(``);t.innerHTML=`
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
          <p class="text-[11px] text-gray-600">Order Token: <strong>#${e.id}</strong></p>
        </div>

        <div class="flex justify-between text-[11px] text-gray-600 pb-1 border-b border-dashed border-gray-300">
          <span>Time: ${e.orderedAt||`13:42`}</span>
          <span>Prep Target: ${e.kitchenPrepTarget||15}m</span>
        </div>

        <div class="py-1">
          <div class="text-[11px] uppercase tracking-wider font-bold text-gray-500 mb-1">Kitchen Prep Items:</div>
          ${n}
        </div>

        ${e.specialInstructions?`
          <div class="p-2 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-900 font-sans">
            <strong>CHEF NOTE:</strong> ${e.specialInstructions}
          </div>
        `:``}

        <div class="pt-2 border-t border-dashed border-gray-400 flex justify-between font-bold text-sm">
          <span>TOTAL AMOUNT</span>
          <span>₹${e.totalAmount}</span>
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
  `,document.getElementById(`print-kot-trigger`).onclick=()=>{d(),h(`KOT #${e.id} printed to kitchen thermal station!`),t.remove()}}function D(e){let t=e.kdsStageFilter||`all`,n=e.kdsViewMode||`kanban`,r=e.orders;t!==`all`&&(r=e.orders.filter(e=>e.status===t));let i=e.orders.filter(e=>e.status===`incoming`),a=e.orders.filter(e=>e.status===`cooking`),o=e.orders.filter(e=>e.status===`ready`),s=e.orders.filter(e=>e.status===`delivery`);return`
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
              ${e.orders.filter(e=>e.status!==`delivered`&&e.status!==`cancelled`).length} Active
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
            <button class="p-1.5 rounded-lg ${n===`kanban`?`bg-white text-[#12382c] shadow-xs font-bold`:`text-[#717974] hover:text-[#151d1a]`}" id="toggle-view-kanban" title="Kanban Board View">
              <span class="material-symbols-outlined text-[18px]">view_kanban</span>
            </button>
            <button class="p-1.5 rounded-lg ${n===`list`?`bg-white text-[#12382c] shadow-xs font-bold`:`text-[#717974] hover:text-[#151d1a]`}" id="toggle-view-list" title="Table List View">
              <span class="material-symbols-outlined text-[18px]">format_list_bulleted</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Stage Filter Quick Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${t===`all`?`bg-[#12382c] text-white`:`bg-white text-[#414845] hover:bg-[#edf6f0]`}" data-stage="all">
          <span>All Orders</span>
          <span class="px-1.5 py-0.2 rounded-full ${t===`all`?`bg-[#002218] text-white`:`bg-[#e7f0eb] text-[#151d1a]`} text-[10px]">
            ${e.orders.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${t===`incoming`?`bg-[#12382c] text-white`:`bg-white text-[#414845] hover:bg-[#edf6f0]`}" data-stage="incoming">
          <span class="w-2 h-2 rounded-full bg-[#fd9d1a]"></span>
          <span>Incoming</span>
          <span class="px-1.5 py-0.2 rounded-full ${t===`incoming`?`bg-[#002218] text-white`:`bg-[#e7f0eb] text-[#151d1a]`} text-[10px]">
            ${i.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${t===`cooking`?`bg-[#12382c] text-white`:`bg-white text-[#414845] hover:bg-[#edf6f0]`}" data-stage="cooking">
          <span class="w-2 h-2 rounded-full bg-[#14b8a6]"></span>
          <span>In Kitchen</span>
          <span class="px-1.5 py-0.2 rounded-full ${t===`cooking`?`bg-[#002218] text-white`:`bg-[#e7f0eb] text-[#151d1a]`} text-[10px]">
            ${a.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${t===`ready`?`bg-[#12382c] text-white`:`bg-white text-[#414845] hover:bg-[#edf6f0]`}" data-stage="ready">
          <span class="w-2 h-2 rounded-full bg-[#22c55e]"></span>
          <span>Ready / Counter</span>
          <span class="px-1.5 py-0.2 rounded-full ${t===`ready`?`bg-[#002218] text-white`:`bg-[#e7f0eb] text-[#151d1a]`} text-[10px]">
            ${o.length}
          </span>
        </button>

        <button class="kds-tab-btn px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs flex items-center gap-2 transition ${t===`delivery`?`bg-[#12382c] text-white`:`bg-white text-[#414845] hover:bg-[#edf6f0]`}" data-stage="delivery">
          <span class="w-2 h-2 rounded-full bg-[#ea580c]"></span>
          <span>Out for Delivery</span>
          <span class="px-1.5 py-0.2 rounded-full ${t===`delivery`?`bg-[#002218] text-white`:`bg-[#e7f0eb] text-[#151d1a]`} text-[10px]">
            ${s.length}
          </span>
        </button>
      </div>

      <!-- Main Stage: Kanban vs List Table -->
      ${n===`kanban`?O(e,i,a,o):k(r)}

      <!-- Order Detail Drawer (Rendered conditionally if an order is selected) -->
      ${A(e)}

    </div>
  `}function O(e,t,n,r){return`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mt-2">
      
      <!-- COLUMN 1: NEW INCOMING (Urgent Mango Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#fd9d1a] ring-4 ring-[#ffdcbc] animate-pulse"></span>
            <span class="text-sm font-bold text-[#002218]">New Incoming</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#ffdcbc] text-[#2c1700] text-xs font-bold">
            ${t.length} Orders
          </span>
        </div>

        ${t.length===0?`
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No incoming orders pending acceptance.
          </div>
        `:``}

        ${t.map(t=>`
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${e.selectedOrderId===t.id?`ring-2 ring-[#12382c]`:``}" data-order-id="${t.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#fd9d1a]"></div>
            
            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${t.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-[11px] font-mono font-bold animate-pulse">
                    ${t.countdownSeconds}s
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${t.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${t.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#fd9d1a] text-[20px]">notifications_active</span>
            </div>

            <!-- Items Brief List -->
            <div class="pl-2 space-y-1 my-2 bg-[#edf6f0]/60 p-2.5 rounded-lg text-xs">
              ${t.items.slice(0,2).map(e=>`
                <div class="flex justify-between font-semibold text-[#151d1a]">
                  <span>${e.quantity}x ${e.name}</span>
                  <span class="text-gray-500 font-mono">₹${e.price*e.quantity}</span>
                </div>
              `).join(``)}
              ${t.items.length>2?`
                <div class="text-[11px] text-[#717974] font-medium">+${t.items.length-2} more item(s)</div>
              `:``}
            </div>

            ${t.specialInstructions?`
              <div class="pl-2 flex items-start gap-1.5 my-2 p-1.5 rounded bg-[#fef3c7] text-[#92400e] text-[11px]">
                <span class="material-symbols-outlined text-[14px] shrink-0 mt-0.5">info</span>
                <span class="line-clamp-1 italic">${t.specialInstructions}</span>
              </div>
            `:``}

            <!-- Quick Action Split Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-reject-order px-3 py-1.5 rounded-lg border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold transition" data-order-id="${t.id}">
                Reject
              </button>
              <button class="btn-accept-order flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fd9d1a] text-[#2c1700] hover:bg-[#fd9d1a]/90 text-xs font-bold transition shadow-sm" data-order-id="${t.id}">
                <span class="material-symbols-outlined text-[16px]">done</span>
                <span>Accept Order</span>
              </button>
            </div>
          </div>
        `).join(``)}
      </div>

      <!-- COLUMN 2: IN KITCHEN / COOKING (Teal Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#14b8a6]"></span>
            <span class="text-sm font-bold text-[#002218]">Cooking / In Prep</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#ccfbf1] text-[#0f766e] text-xs font-bold">
            ${n.length} Orders
          </span>
        </div>

        ${n.length===0?`
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No orders currently cooking.
          </div>
        `:``}

        ${n.map(t=>`
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${e.selectedOrderId===t.id?`ring-2 ring-[#12382c]`:``}" data-order-id="${t.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#14b8a6]"></div>

            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${t.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-mono font-bold flex items-center gap-1">
                    <span class="material-symbols-outlined text-[12px]">timer</span>
                    ${t.timerMinutes||8}:${t.timerSeconds?String(t.timerSeconds).padStart(2,`0`):`30`}m
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${t.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${t.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#14b8a6] text-[20px]">skillet</span>
            </div>

            <!-- Items Brief List -->
            <div class="pl-2 space-y-1 my-2 bg-[#edf6f0]/60 p-2.5 rounded-lg text-xs">
              ${t.items.map(e=>`
                <div class="flex justify-between font-semibold text-[#151d1a]">
                  <span>${e.quantity}x ${e.name}</span>
                  <span class="text-gray-500 font-mono">₹${e.price*e.quantity}</span>
                </div>
              `).join(``)}
            </div>

            <!-- Quick Action Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-print-kot px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold transition flex items-center gap-1" data-order-id="${t.id}">
                <span class="material-symbols-outlined text-[14px]">receipt</span>
                <span>KOT</span>
              </button>
              <button class="btn-mark-ready flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-sm" data-order-id="${t.id}">
                <span class="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Mark as Ready</span>
              </button>
            </div>
          </div>
        `).join(``)}
      </div>

      <!-- COLUMN 3: READY FOR PICKUP (Emerald Accent) -->
      <div class="flex flex-col gap-3 bg-[#edf6f0] p-3.5 rounded-2xl border border-[#c3ebda] shadow-xs">
        <div class="flex items-center justify-between px-1 py-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
            <span class="text-sm font-bold text-[#002218]">Ready for Pickup</span>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-bold">
            ${r.length} Orders
          </span>
        </div>

        ${r.length===0?`
          <div class="p-8 text-center text-xs text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No orders waiting for rider pickup.
          </div>
        `:``}

        ${r.map(t=>`
          <div class="order-card cursor-pointer bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden border border-[#e2eae5] ${e.selectedOrderId===t.id?`ring-2 ring-[#12382c]`:``}" data-order-id="${t.id}">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#22c55e]"></div>

            <div class="flex items-start justify-between gap-2 pl-2 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-base font-bold text-[#002218]">#${t.id}</span>
                  <span class="px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] text-[11px] font-bold">
                    Packed & Ready
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5 text-xs text-[#717974]">
                  <span>${t.customerName}</span>
                  <span>•</span>
                  <span class="text-[#12382c] font-bold">₹${t.totalAmount}</span>
                </div>
              </div>
              <span class="material-symbols-outlined text-[#22c55e] text-[20px]">inventory_2</span>
            </div>

            <!-- Rider Assignment Info -->
            ${t.rider?`
              <div class="pl-2 p-2 bg-[#f3fbf6] rounded-lg border border-[#c3ebda] my-2 text-xs">
                <div class="flex items-center justify-between font-bold text-[#002117]">
                  <span>Rider: ${t.rider.name}</span>
                  <span class="text-[#12382c] text-[11px] font-mono">${t.rider.eta}</span>
                </div>
                <div class="text-[11px] text-[#414845] mt-0.5">${t.rider.vehicle}</div>
              </div>
            `:`
              <div class="pl-2 p-2 bg-gray-50 rounded-lg text-xs text-gray-500 my-2">
                Rider assigning automatically...
              </div>
            `}

            <!-- Quick Action Footer -->
            <div class="pl-2 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <button class="btn-print-kot px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-semibold transition" data-order-id="${t.id}">
                Print Bill
              </button>
              <button class="btn-handover-order flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-sm" data-order-id="${t.id}">
                <span class="material-symbols-outlined text-[16px]">sports_motorsports</span>
                <span>Hand Over to Rider</span>
              </button>
            </div>
          </div>
        `).join(``)}
      </div>

    </div>
  `}function k(e){return`
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
            ${e.map(e=>`
              <tr class="order-card hover:bg-[#f3fbf6] transition cursor-pointer" data-order-id="${e.id}">
                <td class="py-3.5 px-4">
                  <div class="font-bold text-[#002218] text-sm">#${e.id}</div>
                  <div class="text-[11px] text-gray-500 font-mono">${e.orderedAt}</div>
                </td>
                <td class="py-3.5 px-4">
                  <div class="font-bold text-[#151d1a]">${e.customerName}</div>
                  <div class="text-[11px] text-gray-500 truncate max-w-[150px]">${e.deliveryAddress}</div>
                </td>
                <td class="py-3.5 px-4">
                  <div class="font-semibold text-gray-800">
                    ${e.items.map(e=>`${e.quantity}x ${e.name}`).join(`, `)}
                  </div>
                </td>
                <td class="py-3.5 px-4 text-gray-600 font-medium">
                  ${e.paymentMethod}
                </td>
                <td class="py-3.5 px-4 font-mono font-bold text-[#12382c] text-sm">
                  ₹${e.totalAmount}
                </td>
                <td class="py-3.5 px-4 text-center">
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${e.status===`incoming`?`bg-[#ffdcbc] text-[#2c1700]`:e.status===`cooking`?`bg-[#fef3c7] text-[#92400e]`:e.status===`ready`?`bg-[#ccfbf1] text-[#0f766e]`:e.status===`delivery`?`bg-[#ffedd5] text-[#c2410c]`:`bg-[#dcfce7] text-[#166534]`}">
                    ${e.status.toUpperCase()}
                  </span>
                </td>
                <td class="py-3.5 px-4 text-right">
                  <button class="px-3 py-1 rounded-lg bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] text-xs font-bold transition">
                    Inspect
                  </button>
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function A(e){if(!e.selectedOrderId)return``;let t=e.orders.find(t=>t.id===e.selectedOrderId);return t?`
    <!-- Fixed Slide-in Order Detail Drawer -->
    <div class="fixed inset-0 z-[70] modal-backdrop flex justify-end" id="drawer-backdrop">
      <div class="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform border-l border-gray-200">
        
        <!-- Drawer Header -->
        <div class="p-5 bg-[#12382c] text-white flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-bold">Order #${t.id}</span>
              <span class="px-2.5 py-0.5 rounded-full bg-[#fd9d1a] text-[#2c1700] text-xs font-bold uppercase">
                ${t.status}
              </span>
            </div>
            <p class="text-xs text-[#7ba292] mt-0.5">Ordered at ${t.orderedAt} • Target: ${t.kitchenPrepTarget||18}m</p>
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
              <button class="flex items-center gap-1 text-xs font-bold text-[#12382c] hover:underline" onclick="alert('Calling customer: ${t.customerPhone}')">
                <span class="material-symbols-outlined text-[16px]">call</span>
                <span>${t.customerPhone}</span>
              </button>
            </div>
            <div class="font-bold text-sm text-[#151d1a]">${t.customerName}</div>
            <div class="text-xs text-[#414845] leading-relaxed flex items-start gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#717974] shrink-0 mt-0.5">location_on</span>
              <span>${t.deliveryAddress}</span>
            </div>
          </div>

          <!-- Items Breakdown -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Itemized Order Checklist</h4>
            <div class="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden bg-white">
              ${t.items.map(e=>`
                <div class="p-3 flex justify-between items-start text-xs">
                  <div>
                    <span class="font-bold text-sm text-gray-900">${e.quantity}x</span> 
                    <span class="font-semibold text-gray-800">${e.name}</span>
                    ${e.customizations&&e.customizations.length?`
                      <div class="text-[11px] text-[#895100] font-medium pl-4 mt-0.5">
                        ↳ ${e.customizations.join(`, `)}
                      </div>
                    `:``}
                  </div>
                  <span class="font-mono font-bold text-gray-900">₹${e.price*e.quantity}</span>
                </div>
              `).join(``)}
            </div>
          </div>

          ${t.specialInstructions?`
            <div class="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 space-y-1">
              <div class="font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[16px]">restaurant</span>
                <span>Kitchen Chef Instructions</span>
              </div>
              <p class="italic">${t.specialInstructions}</p>
            </div>
          `:``}

          <!-- Delivery Rider Status -->
          <div class="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block">Delivery Dispatch Status</span>
            ${t.rider?`
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-bold text-xs text-gray-900">${t.rider.name}</div>
                  <div class="text-[11px] text-gray-500">${t.rider.vehicle}</div>
                </div>
                <button class="px-2.5 py-1 rounded-lg bg-white border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition flex items-center gap-1" onclick="alert('Calling delivery partner: ${t.rider.phone}')">
                  <span class="material-symbols-outlined text-[14px]">call</span>
                  <span>Contact</span>
                </button>
              </div>
              <div class="text-xs font-semibold text-[#12382c] flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#12382c] animate-pulse"></span>
                <span>${t.rider.status} (ETA: ${t.rider.eta})</span>
              </div>
            `:`
              <div class="text-xs text-gray-500">Delivery partner will be assigned upon cooking completion.</div>
            `}
          </div>

          <!-- Total Bill -->
          <div class="p-3.5 bg-[#edf6f0] rounded-xl flex items-center justify-between text-sm font-bold text-[#002117]">
            <span>Net Payable (Paid Online)</span>
            <span class="text-base font-mono">₹${t.totalAmount}</span>
          </div>

        </div>

        <!-- Drawer Footer Actions -->
        <div class="p-5 border-t border-gray-200 bg-white flex items-center gap-2">
          <button id="btn-drawer-print-kot" class="px-3.5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold transition flex items-center gap-1.5" data-order-id="${t.id}">
            <span class="material-symbols-outlined text-[18px]">print</span>
            <span>Print KOT</span>
          </button>

          ${t.status===`incoming`?`
            <button class="btn-accept-order flex-1 py-2.5 rounded-xl bg-[#fd9d1a] text-[#2c1700] hover:bg-[#fd9d1a]/90 text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${t.id}">
              <span class="material-symbols-outlined text-[18px]">check</span>
              <span>Accept Order</span>
            </button>
          `:t.status===`cooking`?`
            <button class="btn-mark-ready flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${t.id}">
              <span class="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Mark as Ready</span>
            </button>
          `:t.status===`ready`?`
            <button class="btn-handover-order flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-1" data-order-id="${t.id}">
              <span class="material-symbols-outlined text-[18px]">sports_motorsports</span>
              <span>Hand Over to Rider</span>
            </button>
          `:``}
        </div>

      </div>
    </div>
  `:``}function j(e,t){document.querySelectorAll(`.kds-tab-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.kdsStageFilter=n.getAttribute(`data-stage`),f(),t()})});let n=document.getElementById(`toggle-view-kanban`),r=document.getElementById(`toggle-view-list`);n&&n.addEventListener(`click`,()=>{e.kdsViewMode=`kanban`,f(),t()}),r&&r.addEventListener(`click`,()=>{e.kdsViewMode=`list`,f(),t()}),document.querySelectorAll(`.order-card`).forEach(n=>{n.addEventListener(`click`,r=>{r.target.closest(`button`)||(e.selectedOrderId=n.getAttribute(`data-order-id`),f(),t())})});let i=document.getElementById(`btn-close-drawer`),a=document.getElementById(`drawer-backdrop`);i&&i.addEventListener(`click`,()=>{e.selectedOrderId=null,t()}),a&&a.addEventListener(`click`,n=>{n.target===a&&(e.selectedOrderId=null,t())}),document.querySelectorAll(`.btn-accept-order`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-order-id`),a=e.orders.find(e=>e.id===i);a&&(a.status=`cooking`,a.timerMinutes=15,a.timerSeconds=0,d(),h(`Order #${i} accepted! Moved to Kitchen Cooking stage.`),t())})}),document.querySelectorAll(`.btn-reject-order`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-order-id`),a=e.orders.find(e=>e.id===i);a&&(a.status=`cancelled`,f(),h(`Order #${i} rejected and refund initiated.`,`warning`),t())})}),document.querySelectorAll(`.btn-mark-ready`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-order-id`),a=e.orders.find(e=>e.id===i);a&&(a.status=`ready`,a.rider||={name:`Surya Teja`,phone:`+91 98480 22319`,vehicle:`Hero Splendor (AP 30 BE 8491)`,status:`At counter`,eta:`Ready to pick`},d(),h(`Order #${i} is Ready for pickup! Rider notified.`),t())})}),document.querySelectorAll(`.btn-handover-order`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-order-id`),a=e.orders.find(e=>e.id===i);a&&(a.status=`delivery`,d(),h(`Order #${i} handed over to delivery rider!`),t())})}),document.querySelectorAll(`.btn-print-kot, #btn-drawer-print-kot`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.getAttribute(`data-order-id`),i=e.orders.find(e=>e.id===r);i&&E(i)})});let o=document.getElementById(`btn-simulate-order`);o&&o.addEventListener(`click`,()=>{let n=`TK-${Math.floor(8500+Math.random()*900)}`,r={id:n,customerName:`Chaitanya V.`,customerPhone:`+91 98492 88102`,deliveryAddress:`Near NTR Statue, Main Road, Tekkali`,paymentMethod:`UPI Paid (PhonePe)`,totalAmount:260,status:`incoming`,countdownSeconds:50,orderedAt:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),kitchenPrepTarget:15,specialInstructions:`Make it piping hot with extra chutney.`,items:[{id:`t1`,name:`Ghee Karam Dosa (Crispy Thin)`,quantity:2,price:65,customizations:[`Double Karam`]},{id:`t2`,name:`Steamed Rice Idli (4 Pcs)`,quantity:2,price:50,customizations:[`Ghee Dip`]},{id:`c1`,name:`Packaging`,quantity:1,price:30,customizations:[]}],rider:null};e.orders.unshift(r),u(),h(`🔥 New incoming order #${n} received!`,`warning`),t()})}function M(e){let t=e.menuActiveCategory||`all`,n=e.menuActiveDiet||`all`,r=e.menuStockOnlyFilter||!1,i=(e.menuSearchQuery||``).toLowerCase(),a=e.menuItems.filter(e=>{if(i){let t=e.name.toLowerCase().includes(i),n=e.sku.toLowerCase().includes(i),r=(e.description||``).toLowerCase().includes(i),a=(e.customizations||[]).some(e=>e.toLowerCase().includes(i));if(!t&&!n&&!r&&!a)return!1}return!(t!==`all`&&e.category!==t||n!==`all`&&e.diet!==n||r&&e.inStock)}),o=e.menuItems.filter(e=>!e.inStock).length,s=e.menuItems.reduce((e,t)=>e+(t.salesCount||0),0);return`
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
              <span class="text-2xl font-bold text-[#002218] tabular-nums">${e.menuItems.length}</span>
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
              <span class="text-2xl font-bold text-[#ba1a1a] tabular-nums">${o}</span>
              <span class="px-2 py-0.5 rounded-full ${o>0?`bg-[#ffdad6] text-[#93000a]`:`bg-gray-100 text-gray-600`} text-[11px] font-bold">
                ${o>0?`Needs Attention`:`All In Stock`}
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
              <span class="text-2xl font-bold text-[#002218] tabular-nums">${s}</span>
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
                  value="${e.menuSearchQuery||``}"
                />
              </div>

              <div class="flex items-center gap-3 shrink-0">
                <label class="flex items-center gap-2 cursor-pointer bg-[#edf6f0] px-3 py-2 rounded-xl border border-[#dce5df] hover:bg-[#e7f0eb] transition">
                  <input 
                    id="stock-filter-toggle" 
                    type="checkbox" 
                    class="rounded w-4 h-4 accent-[#12382c] cursor-pointer"
                    ${r?`checked`:``}
                  />
                  <span class="text-xs font-semibold text-[#151d1a]">Show Out-of-Stock Only (${o})</span>
                </label>
              </div>
            </div>

            <!-- Category Pills Bar -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`all`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="all">
                All Dishes (${e.menuItems.length})
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`meals`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="meals">
                Meals & Thali (8)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`biryanis`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="biryanis">
                Biryanis (6)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`tiffins`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="tiffins">
                Tiffins & Breakfast (12)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`curries`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="curries">
                Curries & Gravies (5)
              </button>
              <button class="menu-cat-pill whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${t===`snacks`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a] hover:bg-[#e7f0eb]`}" data-cat="snacks">
                Snacks & Extras (3)
              </button>
            </div>

            <!-- Dietary Preference Sub-chips -->
            <div class="flex items-center gap-2 flex-wrap pt-2 border-t border-gray-100">
              <span class="text-xs font-bold text-[#717974] mr-1">Diet:</span>
              <button class="menu-diet-pill px-3 py-1 rounded-lg text-xs font-bold transition ${n===`all`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a]`}" data-diet="all">
                All Types
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${n===`veg`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a]`}" data-diet="veg">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Pure Veg</span>
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${n===`nonveg`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a]`}" data-diet="nonveg">
                <span class="w-2 h-2 rounded-full bg-rose-600"></span>
                <span>Non-Veg</span>
              </button>
              <button class="menu-diet-pill flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${n===`special`?`bg-[#12382c] text-white`:`bg-[#edf6f0] text-[#151d1a]`}" data-diet="special">
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
                  ${a.length===0?`
                    <tr>
                      <td colspan="8" class="py-12 text-center text-gray-500">
                        No dishes match the selected category, diet, or search query.
                      </td>
                    </tr>
                  `:``}

                  ${a.map(e=>`
                    <tr class="hover:bg-[#f3fbf6] transition group">
                      
                      <!-- Diet Icon -->
                      <td class="py-3.5 px-4 text-center align-top">
                        <div class="w-4 h-4 rounded-xs border-2 ${e.diet===`veg`?`border-emerald-600`:`border-rose-600`} flex items-center justify-center mx-auto mt-1" title="${e.diet===`veg`?`Pure Veg`:`Non-Veg`}">
                          <span class="w-2 h-2 rounded-full ${e.diet===`veg`?`bg-emerald-600`:`bg-rose-600`}"></span>
                        </div>
                      </td>

                      <!-- Item Details -->
                      <td class="py-3.5 px-4">
                        <div class="flex items-start gap-3">
                          <img class="w-12 h-12 rounded-xl object-cover shrink-0 border border-gray-200" src="${e.image}" alt="${e.name}"/>
                          <div>
                            <div class="font-bold text-sm text-[#002218] flex items-center gap-2">
                              <span>${e.name}</span>
                              ${e.inStock?``:`
                                <span class="px-1.5 py-0.2 bg-red-100 text-red-700 text-[10px] font-bold rounded">OUT OF STOCK</span>
                              `}
                            </div>
                            <div class="text-[11px] text-gray-500 font-mono mt-0.5">
                              SKU: ${e.sku} • Prep: ${e.prepTime||`15 mins`}
                            </div>
                            <p class="text-[11px] text-gray-600 line-clamp-1 mt-0.5 max-w-sm">
                              ${e.description||``}
                            </p>
                          </div>
                        </div>
                      </td>

                      <!-- Category -->
                      <td class="py-3.5 px-4">
                        <span class="px-2.5 py-1 rounded-full bg-[#edf6f0] text-[#12382c] text-[11px] font-bold">
                          ${e.categoryLabel}
                        </span>
                      </td>

                      <!-- Price -->
                      <td class="py-3.5 px-4">
                        <div class="font-mono font-bold text-sm text-[#12382c]">₹${e.price}</div>
                        ${e.originalPrice?`
                          <div class="text-[10px] text-gray-400 line-through font-mono">₹${e.originalPrice}</div>
                        `:``}
                      </td>

                      <!-- Add-ons -->
                      <td class="py-3.5 px-4">
                        ${e.customizations&&e.customizations.length?`
                          <span class="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[11px] font-medium" title="${e.customizations.join(`, `)}">
                            ${e.customizations.length} Add-on(s)
                          </span>
                        `:`
                          <span class="text-gray-400 text-[11px]">None</span>
                        `}
                      </td>

                      <!-- Sales & Rating -->
                      <td class="py-3.5 px-4">
                        <div class="font-bold text-gray-800">${e.salesCount||0} sold</div>
                        <div class="text-[11px] text-[#895100] font-bold flex items-center gap-0.5">
                          <span>★ ${e.rating}</span>
                          <span class="text-gray-400 font-normal">(${e.reviewsCount||0})</span>
                        </div>
                      </td>

                      <!-- Stock Availability Toggle Switch -->
                      <td class="py-3.5 px-4 text-center">
                        <button 
                          class="btn-toggle-stock px-3 py-1 rounded-full text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 mx-auto ${e.inStock?`bg-[#c3ebda] text-[#002117] hover:bg-[#a7cfbe]`:`bg-[#ffdad6] text-[#93000a] hover:bg-[#ffdad6]/80`}" 
                          data-dish-id="${e.id}"
                        >
                          <span class="w-2 h-2 rounded-full ${e.inStock?`bg-[#12382c]`:`bg-[#ba1a1a]`}"></span>
                          <span>${e.inStock?`In Stock`:`Out of Stock`}</span>
                        </button>
                      </td>

                      <!-- Actions -->
                      <td class="py-3.5 px-4 text-right">
                        <button class="btn-edit-price p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition" title="Quick Edit Price" data-dish-id="${e.id}">
                          <span class="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                      </td>

                    </tr>
                  `).join(``)}
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
  `}function N(e,t){let n=document.getElementById(`btn-open-add-dish`);n&&n.addEventListener(`click`,()=>{x(n=>{e.menuItems.unshift(n),t()})}),document.querySelectorAll(`.menu-cat-pill`).forEach(n=>{n.addEventListener(`click`,()=>{e.menuActiveCategory=n.getAttribute(`data-cat`),f(),t()})}),document.querySelectorAll(`.menu-diet-pill`).forEach(n=>{n.addEventListener(`click`,()=>{e.menuActiveDiet=n.getAttribute(`data-diet`),f(),t()})});let r=document.getElementById(`stock-filter-toggle`);r&&r.addEventListener(`change`,n=>{e.menuStockOnlyFilter=n.target.checked,f(),t()});let i=document.getElementById(`menu-search-input`);i&&i.addEventListener(`input`,n=>{e.menuSearchQuery=n.target.value,t()}),document.querySelectorAll(`.btn-toggle-stock`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-dish-id`),a=e.menuItems.find(e=>e.id===i);a&&(a.inStock=!a.inStock,d(),h(a.inStock?`"${a.name}" is now IN STOCK & live for orders!`:`"${a.name}" marked OUT OF STOCK (86'd).`,a.inStock?`success`:`warning`),t())})}),document.querySelectorAll(`.btn-edit-price`).forEach(n=>{n.addEventListener(`click`,r=>{r.stopPropagation();let i=n.getAttribute(`data-dish-id`),a=e.menuItems.find(e=>e.id===i);if(a){let e=prompt(`Update Base Price for "${a.name}":`,a.price);if(e!==null){let n=parseFloat(e);!isNaN(n)&&n>0&&(a.price=n,d(),h(`Price updated to ₹${n} for "${a.name}"`),t())}}})})}function P(e){let t=e.settlements.find(t=>t.id===e.selectedSettlementId);return`
    <div class="flex flex-col w-full pb-12 gap-y-6">
      
      <!-- Top Title Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-[#002218] tracking-tight">Payout History & Settlement Statement</h1>
          <p class="text-xs text-[#717974] mt-0.5">Automated weekly disbursements, commission reconciliations, and GST/TCS tax invoices.</p>
        </div>
        <button id="btn-download-all-statements" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#e2eae5] text-[#12382c] hover:bg-[#edf6f0] text-xs font-bold shadow-xs transition self-start sm:self-auto">
          <span class="material-symbols-outlined text-[18px]">download</span>
          <span>Download All Statements (FY 2026-27)</span>
        </button>
      </div>

      <!-- Financial Metric Quad -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Next Estimated Payout -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Next Estimated Payout</span>
              <span class="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-bold">In Clearance</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹48,250.00</div>
            <p class="text-xs text-[#717974] mt-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#895100]">schedule</span>
              <span>Tomorrow at 10:00 AM</span>
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974]">To HDFC Bank ****4921</span>
            <span class="font-bold text-[#12382c]">Auto-Release</span>
          </div>
        </div>

        <!-- Last Payout Received -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Last Payout Received</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold flex items-center gap-1">
                <span class="material-symbols-outlined text-[12px]">check_circle</span>
                <span>Settled</span>
              </span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹1,24,620.00</div>
            <p class="text-xs text-[#717974] mt-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-[#12382c]">event_available</span>
              <span>Deposited on 20 Oct 2026</span>
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974] font-mono text-[11px] truncate">UTR: HDFCN2629482910</span>
            <span class="material-symbols-outlined text-[16px] text-[#12382c] cursor-pointer hover:opacity-70" title="Copy UTR" onclick="navigator.clipboard.writeText('HDFCN2629482910'); alert('UTR copied to clipboard!');">content_copy</span>
          </div>
        </div>

        <!-- Net Earnings (This Month) -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Net Earnings (Oct)</span>
              <span class="px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">+18.4%</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">₹3,88,400.00</div>
            <p class="text-xs text-[#717974] mt-1">
              After TastyKart 15% cut, GST & TCS
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100">
            <div class="w-full bg-[#edf6f0] h-2 rounded-full overflow-hidden flex">
              <div class="bg-[#12382c] h-full" style="width: 78%;" title="Net Merchant Earnings"></div>
              <div class="bg-[#fd9d1a] h-full" style="width: 15%;" title="Platform Commission"></div>
              <div class="bg-gray-400 h-full" style="width: 7%;" title="GST & Taxes"></div>
            </div>
          </div>
        </div>

        <!-- Commission Tier -->
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-[#e2eae5] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-[#717974] uppercase tracking-wider">Commission Tier</span>
              <span class="px-2 py-0.5 rounded-full bg-[#e7f0eb] text-[#12382c] text-[11px] font-bold">Standard</span>
            </div>
            <div class="text-2xl font-bold text-[#002218] tabular-nums">15.0%</div>
            <p class="text-xs text-[#717974] mt-1">
              Next tier at ₹5,00,000 monthly (12.5%)
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <span class="text-[#717974]">Target: 77.6%</span>
            <span class="font-bold text-[#895100]">₹1,11,600 to unlock</span>
          </div>
        </div>

      </div>

      <!-- Bank Details & Settlement Cycle -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
        
        <!-- Bank Information Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] xl:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-[#edf6f0] flex items-center justify-center text-[#12382c] shrink-0 border border-[#c3ebda]">
              <span class="material-symbols-outlined text-[32px]">account_balance</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-[#002218]">HDFC Bank Limited</h3>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c3ebda] text-[#002117] text-[11px] font-bold">
                  <span class="material-symbols-outlined text-[12px]">verified</span>
                  <span>Verified Merchant</span>
                </span>
              </div>
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-[#717974]">
                <span>A/C: <strong class="text-[#151d1a] font-mono">5020 0041 8492 4921</strong></span>
                <span>IFSC: <strong class="text-[#151d1a] font-mono">HDFC0001844</strong></span>
                <span>Branch: <strong class="text-[#151d1a]">Main Road, Tekkali</strong></span>
              </div>
            </div>
          </div>
          <button class="px-4 py-2 rounded-xl bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] transition text-xs font-bold" onclick="alert('Bank details locked. Contact TastyKart partner manager to update KYC.');">
            Update Account
          </button>
        </div>

        <!-- Settlement Cadence Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e2eae5] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-[#ffdcbc] flex items-center justify-center text-[#683d00] shrink-0">
              <span class="material-symbols-outlined text-[26px]">calendar_today</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#717974]">Payout Cadence</span>
              <h4 class="text-base font-bold text-[#002218]">Every Tuesday</h4>
              <p class="text-xs text-[#717974]">Mon 00:00 to Sun 23:59</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-[#12382c] text-[24px]">sync</span>
        </div>

      </div>

      <!-- Settlement Ledger Table -->
      <div class="bg-white rounded-2xl shadow-sm border border-[#e2eae5] overflow-hidden">
        <div class="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-[#002218]">Settlement Disbursal Ledger</h3>
            <p class="text-xs text-[#717974]">Click any weekly statement row to inspect full tax & deductions breakdown.</p>
          </div>
          <span class="text-xs text-gray-500 font-mono">${e.settlements.length} statements on record</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-[#edf6f0] text-[#717974] font-bold uppercase tracking-wider border-b border-[#e2eae5]">
                <th class="py-3.5 px-4">Statement Cycle</th>
                <th class="py-3.5 px-4">Disbursal Date</th>
                <th class="py-3.5 px-4">Gross Sales</th>
                <th class="py-3.5 px-4">Commission (15%)</th>
                <th class="py-3.5 px-4">Taxes & Deductions</th>
                <th class="py-3.5 px-4">Net Payout</th>
                <th class="py-3.5 px-4 text-center">Status</th>
                <th class="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 font-medium">
              ${e.settlements.map(t=>`
                <tr class="settlement-row hover:bg-[#f3fbf6] transition cursor-pointer ${e.selectedSettlementId===t.id?`bg-[#edf6f0]/80`:``}" data-settlement-id="${t.id}">
                  
                  <td class="py-3.5 px-4">
                    <div class="font-bold text-[#002218] text-sm">${t.id}</div>
                    <div class="text-[11px] text-gray-500 font-mono">${t.cyclePeriod}</div>
                  </td>

                  <td class="py-3.5 px-4">
                    <div class="font-semibold text-gray-900">${t.payoutDate}</div>
                    <div class="text-[11px] text-gray-500 font-mono truncate max-w-[140px]">${t.utrNumber}</div>
                  </td>

                  <td class="py-3.5 px-4 font-mono font-bold text-gray-800">
                    ₹${t.grossSales.toLocaleString(`en-IN`,{minimumFractionDigits:2})}
                  </td>

                  <td class="py-3.5 px-4 font-mono text-red-600">
                    -₹${t.platformCommissionAmount.toLocaleString(`en-IN`,{minimumFractionDigits:2})}
                  </td>

                  <td class="py-3.5 px-4 font-mono text-gray-600">
                    -₹${(t.gstOnCommission+t.tcsAmount+t.tdsAmount).toLocaleString(`en-IN`,{minimumFractionDigits:2})}
                  </td>

                  <td class="py-3.5 px-4 font-mono font-bold text-sm text-[#12382c]">
                    ₹${t.netPayout.toLocaleString(`en-IN`,{minimumFractionDigits:2})}
                  </td>

                  <td class="py-3.5 px-4 text-center">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${t.status===`settled`?`bg-[#c3ebda] text-[#002117]`:t.status===`processing`?`bg-[#fef3c7] text-[#92400e]`:`bg-gray-100 text-gray-600`}">
                      ${t.status.toUpperCase()}
                    </span>
                  </td>

                  <td class="py-3.5 px-4 text-right">
                    <button class="btn-view-statement px-3 py-1.5 rounded-lg bg-[#edf6f0] text-[#12382c] hover:bg-[#c3ebda] text-xs font-bold transition" data-settlement-id="${t.id}">
                      View Details
                    </button>
                  </td>

                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Itemized Settlement Statement Drawer -->
      ${F(t)}

    </div>
  `}function F(e){return e?`
    <div class="fixed inset-0 z-[70] modal-backdrop flex justify-end" id="settlement-drawer-backdrop">
      <div class="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform border-l border-gray-200">
        
        <!-- Header -->
        <div class="p-6 bg-[#12382c] text-white flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-bold">${e.id}</span>
              <span class="px-2.5 py-0.5 rounded-full ${e.status===`settled`?`bg-[#c3ebda] text-[#002117]`:`bg-[#fef3c7] text-[#92400e]`} text-xs font-bold uppercase">
                ${e.status}
              </span>
            </div>
            <p class="text-xs text-[#7ba292] mt-0.5">${e.cyclePeriod} (${e.ordersCount} total orders)</p>
          </div>
          <button id="btn-close-settlement-drawer" class="text-white/80 hover:text-white p-1 rounded-lg">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <!-- Content Statement -->
        <div class="p-6 space-y-5 text-xs text-gray-800 flex-1">
          
          <!-- Bank Disbursement Banner -->
          <div class="p-4 bg-[#f3fbf6] rounded-xl border border-[#c3ebda] space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#002117] uppercase tracking-wider">Disbursement Details</span>
              <span class="text-xs font-bold text-[#12382c]">${e.bankAccount}</span>
            </div>
            <div class="text-[11px] text-[#414845] font-mono">UTR: ${e.utrNumber}</div>
            <div class="text-[11px] text-[#717974]">${e.settledTimestamp}</div>
          </div>

          <!-- Tax Invoice Itemized Calculation -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-100">
              Tax Invoice & Deductions Calculation
            </h4>

            <div class="flex justify-between py-1">
              <span class="text-gray-700">Gross Food Sales (${e.ordersCount} Orders)</span>
              <span class="font-mono font-bold">₹${e.grossSales.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1">
              <span class="text-gray-700">Packaging Charges Reimbursed</span>
              <span class="font-mono font-bold">₹${e.packagingCharges.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600 border-t border-dashed border-gray-200 pt-2">
              <span>Platform Service Fee (${e.platformCommissionRate})</span>
              <span class="font-mono font-bold">-₹${e.platformCommissionAmount.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>GST on Platform Service Fee (18%)</span>
              <span class="font-mono font-bold">-₹${e.gstOnCommission.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>Tax Collected at Source (1% TCS u/s 52)</span>
              <span class="font-mono font-bold">-₹${e.tcsAmount.toFixed(2)}</span>
            </div>

            <div class="flex justify-between py-1 text-red-600">
              <span>Tax Deducted at Source (1% TDS u/s 194O)</span>
              <span class="font-mono font-bold">-₹${e.tdsAmount.toFixed(2)}</span>
            </div>

            ${e.adjustments?`
              <div class="flex justify-between py-1 text-red-600">
                <span>Adjustments / Refunds</span>
                <span class="font-mono font-bold">-₹${Math.abs(e.adjustments).toFixed(2)}</span>
              </div>
            `:``}

            <!-- Final Net Amount -->
            <div class="p-4 bg-[#12382c] text-white rounded-xl flex items-center justify-between text-sm font-bold mt-4 shadow-sm">
              <span>NET PAYABLE TO BANK</span>
              <span class="text-lg font-mono">₹${e.netPayout.toFixed(2)}</span>
            </div>
          </div>

          <div class="p-3 bg-gray-50 rounded-xl text-[11px] text-gray-500 leading-relaxed border border-gray-200">
            This statement serves as an official Tax Invoice under Rule 46 of CGST Rules 2017. All TDS & TCS credits are credited against your registered GSTIN / PAN.
          </div>

        </div>

        <!-- Actions Footer -->
        <div class="p-6 border-t border-gray-200 bg-white flex items-center gap-3">
          <button id="btn-download-single-invoice" class="flex-1 py-2.5 rounded-xl bg-[#12382c] text-white hover:bg-[#1b4d3e] text-xs font-bold transition shadow-md flex items-center justify-center gap-2" data-settlement-id="${e.id}">
            <span class="material-symbols-outlined text-[18px]">download</span>
            <span>Download Tax Invoice (PDF / CSV)</span>
          </button>
        </div>

      </div>
    </div>
  `:``}function I(e,t){document.querySelectorAll(`.settlement-row, .btn-view-statement`).forEach(n=>{n.addEventListener(`click`,r=>{e.selectedSettlementId=n.getAttribute(`data-settlement-id`),f(),t()})});let n=document.getElementById(`btn-close-settlement-drawer`),r=document.getElementById(`settlement-drawer-backdrop`);n&&n.addEventListener(`click`,()=>{e.selectedSettlementId=null,t()}),r&&r.addEventListener(`click`,n=>{n.target===r&&(e.selectedSettlementId=null,t())});let i=document.getElementById(`btn-download-single-invoice`);i&&i.addEventListener(`click`,()=>{let t=i.getAttribute(`data-settlement-id`),n=e.settlements.find(e=>e.id===t);if(n){d();let e=`data:text/csv;charset=utf-8,Statement ID,Period,Gross Sales,Commission 15%,GST 18%,TCS 1%,TDS 1%,Net Payout,UTR,Bank
"${n.id}","${n.cyclePeriod}",${n.grossSales},${n.platformCommissionAmount},${n.gstOnCommission},${n.tcsAmount},${n.tdsAmount},${n.netPayout},"${n.utrNumber}","${n.bankAccount}"\n`,t=encodeURI(e),r=document.createElement(`a`);r.setAttribute(`href`,t),r.setAttribute(`download`,`TastyKart_Tax_Invoice_${n.id}.csv`),document.body.appendChild(r),r.click(),r.remove(),h(`Tax invoice for ${n.id} downloaded!`)}});let a=document.getElementById(`btn-download-all-statements`);a&&a.addEventListener(`click`,()=>{d();let t=`data:text/csv;charset=utf-8,Statement ID,Cycle Period,Gross Sales,Commission,Net Payout,Status,UTR
`;e.settlements.forEach(e=>{t+=`"${e.id}","${e.cyclePeriod}",${e.grossSales},${e.platformCommissionAmount},${e.netPayout},"${e.status}","${e.utrNumber}"\n`});let n=encodeURI(t),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,`TastyKart_FY2026_All_Settlement_Statements.csv`),document.body.appendChild(r),r.click(),r.remove(),h(`All settlement statements downloaded (CSV)!`)})}var L={activeView:`dashboard`,activeBranchId:104,branches:[...e],orders:[...t],menuItems:[...n],settlements:[...r],kdsStageFilter:`all`,kdsViewMode:`kanban`,selectedOrderId:null,menuActiveCategory:`all`,menuActiveDiet:`all`,menuStockOnlyFilter:!1,menuSearchQuery:``,selectedSettlementId:null,kitchenPaused:!1,searchQuery:``},R=document.getElementById(`app`);function z(){if(!R)return;let e=``;L.activeView===`dashboard`?e=w(L):L.activeView===`live-orders`?e=D(L):L.activeView===`menu-editor`?e=M(L):L.activeView===`payout-history`&&(e=P(L)),R.innerHTML=`
    <!-- Persistent Collapsible Sidebar -->
    ${g(L,B,V,H)}

    <!-- Main Container -->
    <div class="pl-72 min-h-screen flex flex-col bg-[#f3fbf6]">
      
      <!-- Top Persistent Header -->
      ${S(L)}

      <!-- Main Stage Workspace -->
      <main class="w-full pt-20 px-8 flex-1">
        ${e}
      </main>

    </div>
  `,_(L,B,V,H),C(L,U,W),L.activeView===`dashboard`?T(L,B):L.activeView===`live-orders`?j(L,z):L.activeView===`menu-editor`?N(L,z):L.activeView===`payout-history`&&I(L,z)}function B(e){L.activeView=e,L.selectedOrderId=null,L.selectedSettlementId=null,window.scrollTo({top:0,behavior:`smooth`}),z()}function V(e){L.activeBranchId=e,h(`Switched active store branch to: ${L.branches.find(t=>t.id===e).name}`),z()}function H(){let e=L.branches.find(e=>e.id===L.activeBranchId);e&&(e.isAccepting=!e.isAccepting,h(e.isAccepting?`${e.shortName} is now accepting online orders.`:`${e.shortName} has PAUSED incoming orders.`,e.isAccepting?`success`:`warning`),z())}function U(e){L.searchQuery=e;let t=e.trim().toLowerCase();t&&(t.startsWith(`#tk`)||t.startsWith(`tk`))&&(L.activeView=`live-orders`,L.kdsStageFilter=`all`,z())}function W(e){L.menuItems.unshift(e),z()}setInterval(()=>{let e=!1;if(L.orders.forEach(t=>{t.status===`incoming`&&t.countdownSeconds>0?(--t.countdownSeconds,e=!0,t.countdownSeconds===10&&u()):t.status===`cooking`&&(t.timerMinutes>0||t.timerSeconds>0)&&(t.timerSeconds>0?--t.timerSeconds:t.timerMinutes>0&&(--t.timerMinutes,t.timerSeconds=59),e=!0)}),e&&L.activeView===`live-orders`){let e=document.getElementById(`kds-refresh-timer`);if(e){let t=parseInt(e.textContent)||12;e.textContent=t>1?`${t-1}s`:`15s`}L.orders.forEach(e=>{let t=document.querySelector(`.order-card[data-order-id="${e.id}"]`);if(t&&e.status===`incoming`){let n=t.querySelector(`.font-mono.font-bold`);n&&(n.textContent=`${e.countdownSeconds}s`)}})}},1e3),z();