// Comprehensive Mock Data for TastyKart Partner Hub

export const branches = [
  {
    id: 104,
    name: 'Sri Venkateswara Meals - Tekkali Branch',
    shortName: 'Tekkali Junction Hub #104',
    rating: 4.5,
    reviewsCount: 1240,
    address: 'Main Road, Near Old Bus Stand, Tekkali, Srikakulam Dist',
    isOpen: true,
    isAccepting: true,
    manager: 'Narendra P.',
    phone: '+91 89452 48920'
  },
  {
    id: 105,
    name: 'Sri Venkateswara Meals - Sompeta Highway Branch',
    shortName: 'Sompeta Bypass Hub #105',
    rating: 4.4,
    reviewsCount: 820,
    address: 'NH-16 Junction, Sompeta, Srikakulam Dist',
    isOpen: true,
    isAccepting: true,
    manager: 'Satish K.',
    phone: '+91 89452 48925'
  },
  {
    id: 106,
    name: 'Sri Venkateswara Meals - Palasa Express Hub',
    shortName: 'Palasa Railway Road #106',
    rating: 4.6,
    reviewsCount: 950,
    address: 'Opp. Railway Station, Palasa-Kasibugga',
    isOpen: true,
    isAccepting: false,
    manager: 'Venkat R.',
    phone: '+91 89452 48930'
  }
];

export const initialOrders = [
  {
    id: 'TK-8492',
    customerName: 'Narendra P.',
    customerPhone: '+91 98480 34912',
    deliveryAddress: 'Flat 302, Sai Balaji Residency, Revenue Ward 4, Tekkali',
    paymentMethod: 'UPI Paid (PhonePe)',
    totalAmount: 355,
    status: 'incoming', // 'incoming' | 'cooking' | 'ready' | 'delivery' | 'delivered' | 'cancelled'
    countdownSeconds: 45,
    orderedAt: '13:42',
    kitchenPrepTarget: 18,
    specialInstructions: 'Please make biryani extra spicy with hot salan and send extra onion lemon salad. Do not ring doorbell, baby is sleeping.',
    items: [
      { id: 'b1', name: 'Hyderabadi Chicken Biryani', quantity: 2, price: 160, customizations: ['Extra Masala Raita', 'Boiled Egg'] },
      { id: 's1', name: 'Single Curd Cup', quantity: 1, price: 20, customizations: [] },
      { id: 'c1', name: 'Packaging & Cutlery', quantity: 1, price: 15, customizations: [] }
    ],
    rider: null
  },
  {
    id: 'TK-8493',
    customerName: 'Divya K.',
    customerPhone: '+91 94901 88472',
    deliveryAddress: 'Door No. 12-4-8, College Road, Near Govt Junior College, Tekkali',
    paymentMethod: 'Prepaid (Google Pay)',
    totalAmount: 220,
    status: 'incoming',
    countdownSeconds: 85,
    orderedAt: '13:44',
    kitchenPrepTarget: 15,
    specialInstructions: 'Pack hot appalam/papad separately in paper cover so it does not turn soft.',
    items: [
      { id: 'm1', name: 'Andhra Special Veg Meals (Full)', quantity: 1, price: 180, customizations: ['Ghee Rice Upgrade', 'Extra Gongura Pachadi'] },
      { id: 's2', name: 'Masala Butter Milk', quantity: 1, price: 25, customizations: [] },
      { id: 'c1', name: 'Eco Container Pack', quantity: 1, price: 15, customizations: [] }
    ],
    rider: null
  },
  {
    id: 'TK-8489',
    customerName: 'Rajesh V.',
    customerPhone: '+91 99890 12044',
    deliveryAddress: 'H.No 4-18, Teachers Colony, Tekkali',
    paymentMethod: 'UPI Paid (Paytm)',
    totalAmount: 940,
    status: 'cooking',
    timerMinutes: 8,
    timerSeconds: 45,
    orderedAt: '13:30',
    kitchenPrepTarget: 22,
    specialInstructions: 'Less oil in mutton gravy. Include extra lime slices.',
    items: [
      { id: 'b2', name: 'Guntur Gongura Mutton Biryani', quantity: 3, price: 290, customizations: ['Double Mirchi Salan'] },
      { id: 'bv1', name: 'Thums Up (250ml Can)', quantity: 2, price: 35, customizations: ['Chilled'] }
    ],
    rider: {
      name: 'P. Tarun Kumar',
      phone: '+91 97014 55321',
      vehicle: 'Hero Glamour (AP 30 AQ 7712)',
      status: 'On the way to restaurant',
      eta: '5 mins'
    }
  },
  {
    id: 'TK-8490',
    customerName: 'Santosh M.',
    customerPhone: '+91 94412 76390',
    deliveryAddress: 'State Bank Colony, Near Water Tank, Tekkali',
    paymentMethod: 'Cash on Delivery',
    totalAmount: 390,
    status: 'cooking',
    timerMinutes: 14,
    timerSeconds: 20,
    orderedAt: '13:36',
    kitchenPrepTarget: 20,
    specialInstructions: 'Make paneer curry sweet & spicy blend. Naan crispy buttered.',
    items: [
      { id: 'c2', name: 'Paneer Butter Masala (Handi)', quantity: 1, price: 210, customizations: ['Cashew Rich Gravy'] },
      { id: 'n1', name: 'Tandoori Butter Naan', quantity: 4, price: 40, customizations: ['Crisp Roast'] },
      { id: 'c1', name: 'Packaging', quantity: 1, price: 20, customizations: [] }
    ],
    rider: {
      name: 'B. Shiva',
      phone: '+91 88970 33418',
      vehicle: 'Honda Activa 6G (AP 30 BB 4519)',
      status: 'Assigned',
      eta: '8 mins'
    }
  },
  {
    id: 'TK-8491',
    customerName: 'Sneha R.',
    customerPhone: '+91 96180 43900',
    deliveryAddress: 'Sri Krishna Nagar, Main Lane, Tekkali',
    paymentMethod: 'UPI Paid (Cred UPI)',
    totalAmount: 360,
    status: 'cooking',
    timerMinutes: 4,
    timerSeconds: 15,
    orderedAt: '13:28',
    kitchenPrepTarget: 16,
    specialInstructions: 'Hot sambar strictly.',
    items: [
      { id: 'm2', name: 'Andhra Traditional Meals Thali', quantity: 2, price: 160, customizations: ['Extra Sambar Bowl'] },
      { id: 'm3', name: 'Cream Curd Rice Bowl', quantity: 1, price: 40, customizations: ['Pomegranate Topping'] }
    ],
    rider: {
      name: 'D. Manoj',
      phone: '+91 91770 19283',
      vehicle: 'TVS Jupiter (AP 30 DH 2210)',
      status: 'Reached Restaurant',
      eta: 'At gate'
    }
  },
  {
    id: 'TK-8486',
    customerName: 'K. Prasad',
    customerPhone: '+91 98481 00293',
    deliveryAddress: 'Court Road, Judicial Quarters, Tekkali',
    paymentMethod: 'Prepaid',
    totalAmount: 780,
    status: 'ready',
    orderedAt: '13:15',
    readyAt: '13:35',
    specialInstructions: 'Packed in thermal insulated bag.',
    items: [
      { id: 'b3', name: 'Chicken Dum Biryani Family Bucket', quantity: 1, price: 740, customizations: ['Extra Gravy (500ml)', 'Gulab Jamun (4pcs)'] },
      { id: 'c1', name: 'Family Packaging', quantity: 1, price: 40, customizations: [] }
    ],
    rider: {
      name: 'Surya Teja',
      phone: '+91 98480 22319',
      vehicle: 'Hero Splendor (AP 30 BE 8491)',
      status: 'Waiting at Pickup Counter',
      eta: 'Ready to dispatch'
    }
  },
  {
    id: 'TK-8488',
    customerName: 'Anil Kumar',
    customerPhone: '+91 93902 44102',
    deliveryAddress: 'R&B Guest House Road, Tekkali',
    paymentMethod: 'UPI Paid',
    totalAmount: 240,
    status: 'ready',
    orderedAt: '13:20',
    readyAt: '13:38',
    specialInstructions: 'Include extra spicy schezwan dip.',
    items: [
      { id: 'ch1', name: 'Veg Fried Rice + Veg Manchurian Combo', quantity: 1, price: 220, customizations: ['Spicy Gravy'] },
      { id: 'c1', name: 'Container Box', quantity: 1, price: 20, customizations: [] }
    ],
    rider: {
      name: 'K. Ramesh',
      phone: '+91 94401 88321',
      vehicle: 'Bajaj Pulsar (AP 30 CZ 1024)',
      status: 'Entering Parking',
      eta: '1 min'
    }
  },
  {
    id: 'TK-8484',
    customerName: 'Harish Varma',
    customerPhone: '+91 95020 77129',
    deliveryAddress: 'MRO Office Colony, Block B, Tekkali',
    paymentMethod: 'UPI Paid',
    totalAmount: 520,
    status: 'delivery',
    orderedAt: '13:05',
    dispatchedAt: '13:26',
    specialInstructions: 'Call rider when reached near water tank.',
    items: [
      { id: 'b1', name: 'Special Chicken Biryani + Chicken 65', quantity: 1, price: 340, customizations: [] },
      { id: 'm1', name: 'Mini Veg Meals Thali', quantity: 1, price: 150, customizations: [] },
      { id: 'c1', name: 'Packaging', quantity: 1, price: 30, customizations: [] }
    ],
    rider: {
      name: 'M. Vamsi',
      phone: '+91 99630 18294',
      vehicle: 'Hero Passion Pro (AP 30 CL 9081)',
      status: 'In Transit to Customer',
      eta: '4 mins away'
    }
  }
];

export const initialMenuItems = [
  {
    id: 'dish-101',
    sku: 'TK-BIR-001',
    name: 'Special Chicken Dum Biryani (Single)',
    category: 'biryanis',
    categoryLabel: 'Biryanis',
    diet: 'nonveg',
    price: 180,
    originalPrice: 200,
    inStock: true,
    salesCount: 184,
    rating: 4.8,
    reviewsCount: 342,
    prepTime: '15 mins',
    description: 'Aromatic Seeraga Samba & Basmati blend slow-cooked in copper handi with bone-in tender chicken and authentic Srikakulam spices.',
    customizations: ['Extra Salan', 'Boiled Egg', 'Raita Cup'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80'
  },
  {
    id: 'dish-102',
    sku: 'TK-BIR-002',
    name: 'Guntur Gongura Mutton Biryani',
    category: 'biryanis',
    categoryLabel: 'Biryanis',
    diet: 'special',
    price: 320,
    originalPrice: 350,
    inStock: true,
    salesCount: 96,
    rating: 4.9,
    reviewsCount: 158,
    prepTime: '22 mins',
    description: 'Chef signature specialty tender baby goat meat layered with sour gongura paste, caramelized shallots, and fragrant aged basmati.',
    customizations: ['Extra Gongura Gravy', 'Fried Onions'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80'
  },
  {
    id: 'dish-103',
    sku: 'TK-BIR-003',
    name: 'Hyderabadi Chicken Dum Biryani (Family Pack)',
    category: 'biryanis',
    categoryLabel: 'Biryanis',
    diet: 'nonveg',
    price: 680,
    originalPrice: 750,
    inStock: true,
    salesCount: 42,
    rating: 4.7,
    reviewsCount: 89,
    prepTime: '20 mins',
    description: 'Feeds 3-4 hungry foodies. Includes 4 large chicken pieces, 2 boiled eggs, 500ml mirchi salan, and rich curd raita.',
    customizations: ['Double Salan', 'Extra Raita', 'Sweet Box'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80'
  },
  {
    id: 'dish-104',
    sku: 'TK-THL-001',
    name: 'Andhra Traditional Unlimited Meals Thali',
    category: 'meals',
    categoryLabel: 'Meals & Thali',
    diet: 'veg',
    price: 160,
    originalPrice: 180,
    inStock: true,
    salesCount: 248,
    rating: 4.9,
    reviewsCount: 512,
    prepTime: '10 mins',
    description: 'Steaming Sona Masoori rice served with homemade cow ghee, gun powder (kandi podi), avakaya pickle, sambar, majjiga pulusu, rasam, and fresh curd.',
    customizations: ['Extra Cow Ghee (50ml)', 'Extra Sambar', 'Appalam Pack'],
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80'
  },
  {
    id: 'dish-105',
    sku: 'TK-THL-002',
    name: 'Special Non-Veg Meals with Natu Kodi Pulusu',
    category: 'meals',
    categoryLabel: 'Meals & Thali',
    diet: 'special',
    price: 280,
    originalPrice: 310,
    inStock: false, // Out of Stock
    salesCount: 110,
    rating: 4.85,
    reviewsCount: 210,
    prepTime: '20 mins',
    description: 'Country chicken curry simmered in earthen clay pot with poppy seeds and dry coconut paste, paired with Andhra rice meals set.',
    customizations: ['Extra Country Chicken Piece', 'Rasam Cup'],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&q=80'
  },
  {
    id: 'dish-106',
    sku: 'TK-TIF-001',
    name: 'Ghee Karam Dosa (Crispy Thin)',
    category: 'tiffins',
    categoryLabel: 'Tiffins & Breakfast',
    diet: 'veg',
    price: 65,
    originalPrice: 75,
    inStock: true,
    salesCount: 315,
    rating: 4.75,
    reviewsCount: 420,
    prepTime: '8 mins',
    description: 'Golden fermented rice crepe smeared with fiery red garlic chili chutney, roasted in pure country ghee. Served with 3 coconut chutneys.',
    customizations: ['Double Karam', 'Butter Dollop', 'Sambar Dip'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&q=80'
  },
  {
    id: 'dish-107',
    sku: 'TK-TIF-002',
    name: 'Steamed Rice Idli with Sambar & Allam Chutney (4 Pcs)',
    category: 'tiffins',
    categoryLabel: 'Tiffins & Breakfast',
    diet: 'veg',
    price: 50,
    originalPrice: 60,
    inStock: true,
    salesCount: 410,
    rating: 4.8,
    reviewsCount: 630,
    prepTime: '5 mins',
    description: 'Feather-light steamed rice cakes accompanied by piping hot drumstick sambar, ginger jaggery pachadi, and creamy peanut chutney.',
    customizations: ['Ghee Dip', 'Podi Dusting'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&q=80'
  },
  {
    id: 'dish-108',
    sku: 'TK-TIF-003',
    name: 'Crispy Medu Vada (3 Pcs)',
    category: 'tiffins',
    categoryLabel: 'Tiffins & Breakfast',
    diet: 'veg',
    price: 60,
    originalPrice: 70,
    inStock: false, // Out of Stock
    salesCount: 198,
    rating: 4.6,
    reviewsCount: 240,
    prepTime: '10 mins',
    description: 'Crispy golden urad dal fritters spiced with fresh peppercorns, crushed cumin, green chilies, and curry leaves.',
    customizations: ['Dunked in Sambar', 'Extra Coconut Chutney'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&q=80'
  },
  {
    id: 'dish-109',
    sku: 'TK-CUR-001',
    name: 'Nellore Chepala Pulusu (Fish Curry)',
    category: 'curries',
    categoryLabel: 'Curries & Gravies',
    diet: 'special',
    price: 240,
    originalPrice: 270,
    inStock: true,
    salesCount: 88,
    rating: 4.92,
    reviewsCount: 174,
    prepTime: '18 mins',
    description: 'Fresh river Murrel fish steaks simmered in tangy raw mango, aged tamarind, and fenugreek masala. Famous coastal Andhra delicacy.',
    customizations: ['Extra Fish Piece', 'Spicy Gravy Bowl'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&q=80'
  },
  {
    id: 'dish-110',
    sku: 'TK-CUR-002',
    name: 'Paneer Butter Masala (Handi)',
    category: 'curries',
    categoryLabel: 'Curries & Gravies',
    diet: 'veg',
    price: 210,
    originalPrice: 230,
    inStock: true,
    salesCount: 165,
    rating: 4.7,
    reviewsCount: 190,
    prepTime: '15 mins',
    description: 'Soft cottage cheese cubes enveloped in a rich, buttery tomato-cashew satin gravy finished with kasuri methi and fresh cream.',
    customizations: ['Mild Spice', 'Extra Butter Cubes'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80'
  },
  {
    id: 'dish-111',
    sku: 'TK-SNK-001',
    name: 'Chicken 65 (Boneless Andhra Style)',
    category: 'snacks',
    categoryLabel: 'Snacks & Extras',
    diet: 'nonveg',
    price: 190,
    originalPrice: 220,
    inStock: true,
    salesCount: 220,
    rating: 4.88,
    reviewsCount: 310,
    prepTime: '12 mins',
    description: 'Bite-sized chicken chunks tossed with tempered curry leaves, slit green chilies, yogurt marinade, and garlic cloves.',
    customizations: ['Crispy Dry', 'Semi Gravy', 'Onion Ring Salad'],
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80'
  },
  {
    id: 'dish-112',
    sku: 'TK-SNK-002',
    name: 'Palli Karam Podi & Ghee Rice Bowl',
    category: 'snacks',
    categoryLabel: 'Snacks & Extras',
    diet: 'veg',
    price: 90,
    originalPrice: 100,
    inStock: false, // Out of Stock
    salesCount: 84,
    rating: 4.65,
    reviewsCount: 92,
    prepTime: '6 mins',
    description: 'Comfort meal of steaming rice mixed with freshly pounded roasted peanut powder, garlic podi, and generous buffalo ghee.',
    customizations: ['Extra Ghee', 'Dry Chilli Papad'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&q=80'
  }
];

export const initialSettlements = [
  {
    id: 'SETTL-2026-W42',
    cyclePeriod: '13 Oct 2026 - 19 Oct 2026',
    cycleType: 'Weekly Settlement',
    payoutDate: '20 Oct 2026',
    utrNumber: 'HDFCN2629482910',
    bankAccount: 'HDFC Bank ****4921',
    grossSales: 154200.00,
    ordersCount: 462,
    packagingCharges: 5800.00,
    customerDeliveryFee: 9240.00,
    platformCommissionRate: '15.0%',
    platformCommissionAmount: 23130.00,
    gstOnCommission: 4163.40,
    tcsRate: '1.0%',
    tcsAmount: 1542.00,
    tdsRate: '1.0%',
    tdsAmount: 1542.00,
    adjustments: 0.00,
    netPayout: 124620.00,
    status: 'settled', // 'settled' | 'processing' | 'upcoming'
    settledTimestamp: '20 Oct 2026, 11:24 AM'
  },
  {
    id: 'SETTL-2026-W43',
    cyclePeriod: '20 Oct 2026 - 26 Oct 2026',
    cycleType: 'Weekly Settlement',
    payoutDate: 'Tomorrow at 10:00 AM',
    utrNumber: 'Pending Processing',
    bankAccount: 'HDFC Bank ****4921',
    grossSales: 61400.00,
    ordersCount: 184,
    packagingCharges: 2300.00,
    customerDeliveryFee: 3680.00,
    platformCommissionRate: '15.0%',
    platformCommissionAmount: 9210.00,
    gstOnCommission: 1657.80,
    tcsRate: '1.0%',
    tcsAmount: 614.00,
    tdsRate: '1.0%',
    tdsAmount: 614.00,
    adjustments: 0.00,
    netPayout: 48250.00,
    status: 'processing',
    settledTimestamp: 'Scheduled for 28 Oct 2026'
  },
  {
    id: 'SETTL-2026-W41',
    cyclePeriod: '06 Oct 2026 - 12 Oct 2026',
    cycleType: 'Weekly Settlement',
    payoutDate: '13 Oct 2026',
    utrNumber: 'HDFCN2628791048',
    bankAccount: 'HDFC Bank ****4921',
    grossSales: 142100.00,
    ordersCount: 418,
    packagingCharges: 5200.00,
    customerDeliveryFee: 8360.00,
    platformCommissionRate: '15.0%',
    platformCommissionAmount: 21315.00,
    gstOnCommission: 3836.70,
    tcsRate: '1.0%',
    tcsAmount: 1421.00,
    tdsRate: '1.0%',
    tdsAmount: 1421.00,
    adjustments: 0.00,
    netPayout: 114880.00,
    status: 'settled',
    settledTimestamp: '13 Oct 2026, 10:15 AM'
  },
  {
    id: 'SETTL-2026-W40',
    cyclePeriod: '29 Sep 2026 - 05 Oct 2026',
    cycleType: 'Weekly Settlement',
    payoutDate: '06 Oct 2026',
    utrNumber: 'HDFCN2628019482',
    bankAccount: 'HDFC Bank ****4921',
    grossSales: 136500.00,
    ordersCount: 395,
    packagingCharges: 4900.00,
    customerDeliveryFee: 7900.00,
    platformCommissionRate: '15.0%',
    platformCommissionAmount: 20475.00,
    gstOnCommission: 3685.50,
    tcsRate: '1.0%',
    tcsAmount: 1365.00,
    tdsRate: '1.0%',
    tdsAmount: 1365.00,
    adjustments: -500.00, // Customer compensation refund
    netPayout: 109850.00,
    status: 'settled',
    settledTimestamp: '06 Oct 2026, 10:48 AM'
  }
];

export const initialNotifications = [
  {
    id: 'n1',
    type: 'order',
    title: 'New High-Value Order #TK-8492',
    message: '2x Hyderabadi Chicken Biryani + Addons (₹355). Immediate kitchen prep required.',
    time: '2 mins ago',
    unread: true
  },
  {
    id: 'n2',
    type: 'rush',
    title: 'Peak Rush Advisory (Lunch Service)',
    message: 'Incoming order velocity up +42% in Tekkali cluster. Average delivery time 24 mins.',
    time: '18 mins ago',
    unread: true
  },
  {
    id: 'n3',
    type: 'payout',
    title: 'Weekly Payout Ready for Clearance',
    message: '₹48,250 scheduled for direct bank credit to HDFC ****4921 tomorrow morning.',
    time: '1 hour ago',
    unread: false
  },
  {
    id: 'n4',
    type: 'inventory',
    title: 'Out of Stock Alert',
    message: 'Natu Kodi Pulusu marked unavailable by head chef Narendra.',
    time: '3 hours ago',
    unread: false
  }
];
