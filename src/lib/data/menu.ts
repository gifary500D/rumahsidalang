export interface MenuItem {
  id: number;
  name: string;
  category: 'coffee' | 'non-coffee' | 'food' | 'dessert';
  price: number;
  description: string;
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 1,
    name: 'Kopi Dalang Signature',
    category: 'coffee',
    price: 25000,
    description: 'Kopi arabica pilihan dengan teknik seduh khas Rumah Si Dalang',
    image: '☕',
    popular: true
  },
  {
    id: 2,
    name: 'Espresso Klasik',
    category: 'coffee',
    price: 20000,
    description: 'Single shot espresso dengan crema sempurna',
    image: '☕'
  },
  {
    id: 3,
    name: 'Cappuccino Wayang',
    category: 'coffee',
    price: 28000,
    description: 'Cappuccino dengan latte art motif wayang',
    image: '☕',
    popular: true
  },
  {
    id: 4,
    name: 'Kopi Susu Gula Aren',
    category: 'coffee',
    price: 23000,
    description: 'Perpaduan kopi robusta dengan gula aren asli',
    image: '☕'
  },
  // Non-Coffee
  {
    id: 5,
    name: 'Teh Tarik Dalang',
    category: 'non-coffee',
    price: 18000,
    description: 'Teh tarik dengan teknik khas yang menghasilkan foam lembut',
    image: '🍵'
  },
  {
    id: 6,
    name: 'Coklat Panas Premium',
    category: 'non-coffee',
    price: 22000,
    description: 'Coklat panas dari kakao pilihan dengan marshmallow',
    image: '🍫',
    popular: true
  },
  {
    id: 7,
    name: 'Matcha Latte',
    category: 'non-coffee',
    price: 26000,
    description: 'Matcha premium Jepang dengan susu segar',
    image: '🍵'
  },
  // Food
  {
    id: 8,
    name: 'Nasi Goreng Kampung',
    category: 'food',
    price: 30000,
    description: 'Nasi goreng dengan bumbu tradisional dan telur mata sapi',
    image: '🍚'
  },
  {
    id: 9,
    name: 'Sandwich Club Dalang',
    category: 'food',
    price: 32000,
    description: 'Triple decker sandwich dengan isian lengkap',
    image: '🥪',
    popular: true
  },
  {
    id: 10,
    name: 'Pasta Carbonara',
    category: 'food',
    price: 35000,
    description: 'Pasta creamy dengan bacon dan parmesan',
    image: '🍝'
  },
  // Dessert
  {
    id: 11,
    name: 'Tiramisu Klasik',
    category: 'dessert',
    price: 28000,
    description: 'Tiramisu lembut dengan espresso dan mascarpone',
    image: '🍰',
    popular: true
  },
  {
    id: 12,
    name: 'Brownies Coklat',
    category: 'dessert',
    price: 22000,
    description: 'Brownies lumer dengan taburan almond',
    image: '🍰'
  }
];

export const categories = [
  { id: 'all', name: 'Semua Menu' },
  { id: 'coffee', name: 'Kopi' },
  { id: 'non-coffee', name: 'Non-Kopi' },
  { id: 'food', name: 'Makanan' },
  { id: 'dessert', name: 'Dessert' }
];