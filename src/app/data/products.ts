// Cabinet Images
import cab1 from '../../assets/cabinet/1380088840-650x650.jpg';
import cab3 from '../../assets/cabinet/02702809-1-650x650.jpg';
import cab4 from '../../assets/cabinet/02702153-650x650.jpg';
import cab5 from '../../assets/cabinet/02702143-1.jpg';
import proofCabinetImg from '../assets/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';

// Dressoir Images
import dres1 from '../../assets/dressoir/02703170-1-650x650.jpg';
import dres2 from '../../assets/dressoir/02732018-1.jpg';
import dres3 from '../../assets/dressoir/02732026-650x650.jpg';
import dres4 from '../../assets/dressoir/MA-A-003-650x650.jpg';
import dres5 from '../../assets/dressoir/TF-A-002-100-02732144-100x46x451-650x650.jpg';
import dres6 from '../../assets/dressoir/TFA002-800-600x600.jpg';

// Chair Images
import chairImg1 from '../../assets/chair/02702213-650x650.jpg';
import chairImg2 from '../../assets/chair/02702930-650x650.jpg';
import chairImg3 from '../../assets/chair/1380686619-650x650.jpg';
import chairImg4 from '../../assets/chair/1532591640-650x650.jpg';
import chairImg5 from '../../assets/chair/1565899437-650x650.jpg';
import chairImg6 from '../../assets/chair/KL-J-010-A1-650x650.jpg';

// Water Sink Images
import waterSinkImg1 from '../../assets/water sink/6a3d62e1-b9c4-496c-9132-a025c0627efb.jpg';
import waterSinkImg2 from '../../assets/water sink/8701061a-9a20-4757-a9df-0bb2bacd549d.jpg';
import waterSinkImg3 from '../../assets/water sink/8d9c2597-6d3d-472b-a82d-2cba04191bcf.jpg';
import waterSinkImg4 from '../../assets/water sink/a5d52f18-938e-4786-9764-f8f84bfb85bb.jpg';
import waterSinkImg5 from '../../assets/water sink/abbc1bbd-c466-4ce6-8d15-6de8fedae365.jpg';
import waterSinkImg6 from '../../assets/water sink/f074e6f2-a389-4b73-8f0e-dfe8252a78ae.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: 'New' | 'Custom' | null;
  description?: string;
  material?: string;
}

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: 'chair', label: 'Chair' },
  { id: 'dressoir', label: 'Dressoir' },
  { id: 'cabinet', label: 'Cabinet' },
  { id: 'sink-stone', label: 'Sink Stone' },
];

export const PRODUCTS: Product[] = [
  // ─── Chair ──────────────────────────────────────────────────────────
  {
    id: 'chr-01',
    name: 'Ergonomic Teak Lounge Chair',
    category: 'chair',
    image: chairImg1,
    badge: 'New',
    description: 'Ergonomic curved solid teak lounge chair crafted with traditional joinery.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'chr-02',
    name: 'Minimalist Teak Dining Chair',
    category: 'chair',
    image: chairImg2,
    badge: null,
    description: 'Minimalist solid teak dining chair with ergonomic lumbar contour.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'chr-03',
    name: 'Heritage Kudus Armchair',
    category: 'chair',
    image: chairImg3,
    badge: null,
    description: 'Traditional handcrafted Kudus armchair with artisan carved details.',
    material: 'Aged Solid Teak',
  },
  {
    id: 'chr-04',
    name: 'Nordic Teak Stool & Ottoman',
    category: 'chair',
    image: chairImg4,
    badge: null,
    description: 'Solid circular teak accent stool, minimal and versatile.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'chr-05',
    name: 'Classic Scandinavian Teak Chair',
    category: 'chair',
    image: chairImg5,
    badge: null,
    description: 'Classic Scandinavian design teak chair with natural botanical oil finish.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'chr-06',
    name: 'Solid Teak Studio Desk Chair',
    category: 'chair',
    image: chairImg6,
    badge: null,
    description: 'Natural finish solid teak studio desk chair with ergonomic back support.',
    material: '100% Solid Heartwood Teak',
  },

  // ─── Dressoir ────────────────────────────────────────────────────────
  {
    id: 'drs-01',
    name: 'Solid Teak 4-Door Credenza',
    category: 'dressoir',
    image: dres1,
    badge: null,
    description: 'Solid teak 4 sliding door credenza with ample storage and sleek profile.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'drs-02',
    name: 'Minimalist Sideboard Console',
    category: 'dressoir',
    image: dres2,
    badge: null,
    description: 'Minimalist console with smooth sliding drawers and clean geometric lines.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'drs-03',
    name: 'Sliding Louvre Dressoir',
    category: 'dressoir',
    image: dres3,
    badge: 'New',
    description: 'Louvred teak sideboard with airflow ventilation and brass fittings.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'drs-04',
    name: 'Lowline Teak Media Credenza',
    category: 'dressoir',
    image: dres4,
    badge: null,
    description: 'Low profile teak media console designed for modern living rooms.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'drs-05',
    name: 'Multi-Drawer Teak Dresser',
    category: 'dressoir',
    image: dres5,
    badge: null,
    description: 'Multi-tiered storage teak drawer dresser with soft dovetail joinery.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'drs-06',
    name: 'Vintage Kudus Wide Sideboard',
    category: 'dressoir',
    image: dres6,
    badge: null,
    description: 'Elegant wide-profile vintage Kudus credenza with handcrafted textures.',
    material: 'Aged Solid Teak',
  },

  // ─── Cabinet ─────────────────────────────────────────────────────────
  {
    id: 'cab-01',
    name: 'Glass Display Teak Cabinet',
    category: 'cabinet',
    image: cab1,
    badge: null,
    description: 'Glass display showcase with solid teak frame and tempered glass panels.',
    material: 'Solid Teak & Tempered Glass',
  },
  {
    id: 'cab-02',
    name: 'Double Door Tall Wardrobe',
    category: 'cabinet',
    image: cab3,
    badge: null,
    description: 'Sturdy 2-door tall solid teak wardrobe with internal shelving and hang rod.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'cab-03',
    name: 'Custom Pantry & Linen Cabinet',
    category: 'cabinet',
    image: proofCabinetImg,
    badge: 'Custom',
    description: 'Handcrafted Kudus pantry & storage cabinet customized to bespoke specifications.',
    material: 'Custom Solid Teak',
  },
  {
    id: 'cab-04',
    name: 'Modern Teak Vitrine Cabinet',
    category: 'cabinet',
    image: cab4,
    badge: null,
    description: 'Minimalist modern glass vitrine display cabinet with warm LED accents.',
    material: 'Solid Teak & Glass',
  },
  {
    id: 'cab-05',
    name: 'Open Teak Bookshelf & Cabinet',
    category: 'cabinet',
    image: cab5,
    badge: null,
    description: 'Open teak bookshelf with lower concealed storage cabinet.',
    material: '100% Solid Heartwood Teak',
  },
  {
    id: 'cab-06',
    name: 'Three-Door Master Teak Wardrobe',
    category: 'cabinet',
    image: proofWardrobeImg,
    badge: null,
    description: '3-door master bedroom teak wardrobe with lower drawers and mirror option.',
    material: '100% Solid Heartwood Teak',
  },

  // ─── Sink Stone ──────────────────────────────────────────────────────
  {
    id: 'snk-01',
    name: 'River Stone Vessel Basin',
    category: 'sink-stone',
    image: waterSinkImg1,
    badge: 'New',
    description: 'Organic natural river stone vessel washbasin hollowed by hand.',
    material: 'Natural River Stone',
  },
  {
    id: 'snk-02',
    name: 'Chiseled Granite Natural Basin',
    category: 'sink-stone',
    image: waterSinkImg2,
    badge: null,
    description: 'Hand-chiseled smooth interior natural granite sink with rustic exterior.',
    material: 'Natural Granite Stone',
  },
  {
    id: 'snk-03',
    name: 'Floating Teak Vanity & Stone Sink',
    category: 'sink-stone',
    image: waterSinkImg3,
    badge: null,
    description: 'Floating solid teak vanity paired seamlessly with a carved stone vessel.',
    material: 'Solid Teak & River Stone',
  },
  {
    id: 'snk-04',
    name: 'Hand-Carved Marble Washbasin',
    category: 'sink-stone',
    image: waterSinkImg4,
    badge: null,
    description: 'Artisan hand-carved natural marble basin with silky honed finish.',
    material: 'Natural Indonesian Marble',
  },
  {
    id: 'snk-05',
    name: 'Oval River Rock Vanity Basin',
    category: 'sink-stone',
    image: waterSinkImg5,
    badge: null,
    description: 'Natural smooth oval river rock washbasin with pre-drilled drain hole.',
    material: 'Natural River Rock',
  },
  {
    id: 'snk-06',
    name: 'Rustic Monolith Stone Basin',
    category: 'sink-stone',
    image: waterSinkImg6,
    badge: null,
    description: 'Raw rustic textured monolithic stone sink for bold statement bathrooms.',
    material: 'Monolithic Volcanic Stone',
  },
];
