import { Product } from '@/types/products';
import tomatoesImg from '@/assets/tomatoes.jpg';
import potatoesImg from '@/assets/potatoes.jpg';
import kaleImg from '@/assets/kale.jpg';
import cornImg from '@/assets/corn.jpg';
import onionsImg from '@/assets/onions.jpg';
import carrotsImg from '@/assets/carrots.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 3.50,
    image: tomatoesImg,
    category: 'Vegetables',
    unit: 'per kg',
    description: 'Vine-ripened organic tomatoes, perfect for salads and cooking',
    inStock: true,
  },
  {
    id: '2',
    name: 'Organic Potatoes',
    price: 2.25,
    image: potatoesImg,
    category: 'Vegetables',
    unit: 'per kg',
    description: 'Fresh farm potatoes, ideal for roasting, mashing, or frying',
    inStock: true,
  },
  {
    id: '3',
    name: 'Fresh Kale',
    price: 4.00,
    image: kaleImg,
    category: 'Leafy Greens',
    unit: 'per bunch',
    description: 'Nutrient-rich organic kale, perfect for smoothies and salads',
    inStock: true,
  },
  {
    id: '4',
    name: 'Sweet Corn',
    price: 1.75,
    image: cornImg,
    category: 'Grains',
    unit: 'per ear',
    description: 'Fresh sweet corn on the cob, harvested at peak sweetness',
    inStock: true,
  },
  {
    id: '5',
    name: 'Red Onions',
    price: 2.80,
    image: onionsImg,
    category: 'Vegetables',
    unit: 'per kg',
    description: 'Fresh red onions with rich flavor, essential for cooking',
    inStock: true,
  },
  {
    id: '6',
    name: 'Organic Carrots',
    price: 3.20,
    image: carrotsImg,
    category: 'Vegetables',
    unit: 'per kg',
    description: 'Sweet, crunchy organic carrots, great for snacking or cooking',
    inStock: true,
  },
];