// Cabinet Images
import cab1 from '../../assets/cabinet/1380088840-650x650.jpg';
import cab3 from '../../assets/cabinet/02702809-1-650x650.jpg';
import cab4 from '../../assets/cabinet/02702153-650x650.jpg';
import cab5 from '../../assets/cabinet/02702143-1.jpg';
import bookrackImg from '../../assets/cabinet/bookrack.jpg';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';

// Dressoir / Sideboard Images
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

// Table Images
import floresDiningTableImg from '../assets/flores_dining_table.jpg';

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
  dimensions?: string;
  finish?: string;
}

export interface Category {
  id: string;
  labelEn: string;
  labelId: string;
}

export const CATEGORIES: Category[] = [
  { id: 'chair', labelEn: 'Chair', labelId: 'Kursi' },
  { id: 'table', labelEn: 'Table', labelId: 'Meja' },
  { id: 'sideboard', labelEn: 'Sideboard', labelId: 'Dressoir' },
  { id: 'cabinet', labelEn: 'Cabinet', labelId: 'Lemari' },
  { id: 'sink-stone', labelEn: 'Sink Stone', labelId: 'Wastafel Batu' },
];

export const PRODUCTS: Product[] = [
  // ─── CHAIR SERIES ────────────────────────────────────────────────────
  {
    id: 'chr-01',
    name: 'Panel Chair',
    category: 'chair',
    image: chairImg1,
    badge: null,
    description: 'Solid teak dining chair with a clean straight panel back.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '48 × 52 × 84 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'chr-02',
    name: 'Curve Chair',
    category: 'chair',
    image: chairImg2,
    badge: null,
    description: 'Solid teak dining chair with an ergonomically contoured curved backrest.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '50 × 54 × 82 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'chr-03',
    name: 'Round Stool',
    category: 'chair',
    image: chairImg3,
    badge: null,
    description: 'Round solid teak accent stool with turned legs and smooth natural finish.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '38 × 38 × 45 cm',
    finish: 'Hand-Rubbed Beeswax',
  },
  {
    id: 'chr-04',
    name: 'Spindle Bench',
    category: 'chair',
    image: chairImg4,
    badge: null,
    description: 'Low solid teak bench featuring slim turned spindles and tapered legs.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '120 × 42 × 48 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'chr-05',
    name: 'Rattan Chair',
    category: 'chair',
    image: chairImg5,
    badge: null,
    description: 'Classic solid teak dining chair with hand-woven natural rattan backrest.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '52 × 55 × 85 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'chr-06',
    name: 'Rattan Lounger',
    category: 'chair',
    image: chairImg6,
    badge: null,
    description: 'Low-slung solid teak lounge chair with woven strap seating and an angled stance.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '64 × 75 × 72 cm',
    finish: 'Natural Matte Finish',
  },

  // ─── TABLE ───────────────────────────────────────────────────────────
  {
    id: 'drs-05',
    name: 'Coffee Table',
    category: 'table',
    image: dres5,
    badge: null,
    description: 'Low solid teak coffee table with integrated storage drawers and natural wood grain.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '100 × 46 × 45 cm',
    finish: 'Natural Matte Oil',
  },
  {
    id: 'tbl-01',
    name: 'Dining Set',
    category: 'table',
    image: floresDiningTableImg,
    badge: null,
    description: 'Solid reclaimed teak dining table paired with artisanal matching bench seating.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '200 × 90 × 76 cm',
    finish: 'Natural Botanical Oil',
  },

  // ─── SIDEBOARD (DRESSOIR) ────────────────────────────────────────────
  {
    id: 'drs-01',
    name: 'Drawer Credenza',
    category: 'sideboard',
    image: dres1,
    badge: null,
    description: 'Solid teak credenza featuring multi-tier storage drawers and traditional joinery.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '180 × 45 × 80 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'drs-02',
    name: 'Sliding Sideboard',
    category: 'sideboard',
    image: dres2,
    badge: null,
    description: 'Minimalist solid teak sideboard with smooth sliding doors and interior shelving.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '160 × 45 × 75 cm',
    finish: 'Natural Matte Finish',
  },
  {
    id: 'drs-03',
    name: 'Nightstand',
    category: 'sideboard',
    image: dres3,
    badge: null,
    description: 'Compact solid teak bedside table with an open display niche and slatted door.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '50 × 40 × 55 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'drs-04',
    name: 'Curve Lowboard',
    category: 'sideboard',
    image: dres4,
    badge: null,
    description: 'Low-profile solid teak media unit with softly rounded curved corners.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '170 × 42 × 48 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'drs-06',
    name: 'Long Lowboard',
    category: 'sideboard',
    image: dres6,
    badge: null,
    description: 'Extended-length solid teak credenza with clean architectural lines.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '200 × 45 × 52 cm',
    finish: 'Hand-Rubbed Botanical Wax',
  },

  // ─── CABINET & ARMOIRE ───────────────────────────────────────────────
  {
    id: 'cab-01',
    name: 'Open Bookcase',
    category: 'cabinet',
    image: cab1,
    badge: null,
    description: 'Tall architectural solid teak bookcase with graduated open shelves.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '100 × 38 × 190 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'cab-02',
    name: 'Wine Cabinet',
    category: 'cabinet',
    image: cab3,
    badge: null,
    description: 'Solid teak storage cabinet designed with bottle racks and stemware space.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '90 × 45 × 140 cm',
    finish: 'Natural Matte Oil',
  },
  {
    id: 'cab-03',
    name: 'Bookrack',
    category: 'cabinet',
    image: bookrackImg,
    badge: null,
    description: 'Solid teak shelving unit featuring three open tiers above a double-door base cabinet.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '85 × 40 × 175 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'cab-04',
    name: 'Glass Hutch',
    category: 'cabinet',
    image: cab4,
    badge: null,
    description: 'Two-piece solid teak vitrine hutch with framed glass upper doors and closed base.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '110 × 45 × 200 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'cab-05',
    name: 'Open Shelf',
    category: 'cabinet',
    image: cab5,
    badge: null,
    description: 'Symmetrical multi-tier open teak display unit with lower utility drawers.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '95 × 36 × 180 cm',
    finish: 'Natural Botanical Oil',
  },
  {
    id: 'cab-06',
    name: 'Wardrobe',
    category: 'cabinet',
    image: proofWardrobeImg,
    badge: null,
    description: 'Substantial three-door solid teak wardrobe with generous hanging and shelf space.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '160 × 60 × 210 cm',
    finish: 'Natural Matte Wax',
  },

  // ─── STONE & TEAK VANITY ─────────────────────────────────────────────
  {
    id: 'snk-01',
    name: 'Grey Basin',
    category: 'sink-stone',
    image: waterSinkImg1,
    badge: null,
    description: 'Oval vessel washbasin hand-carved from a single natural river stone boulder with polished grey bowl.',
    material: 'Natural river stone, hand-carved',
    dimensions: '45 × 38 × 15 cm',
    finish: 'Honed Interior / Raw Exterior',
  },
  {
    id: 'snk-02',
    name: 'Oval Basin',
    category: 'sink-stone',
    image: waterSinkImg2,
    badge: null,
    description: 'Chiseled natural granite vessel washbasin with a honed interior and textured exterior.',
    material: 'Natural river stone, hand-carved',
    dimensions: '48 × 40 × 14 cm',
    finish: 'Fine Chiseled / Polished Basin',
  },
  {
    id: 'snk-03',
    name: 'Chiseled Basin',
    category: 'sink-stone',
    image: waterSinkImg3,
    badge: null,
    description: 'Hand-carved organic stone washbasin featuring a chiseled perimeter and smooth vessel bowl.',
    material: 'Natural river stone, hand-carved',
    dimensions: '44 × 36 × 15 cm',
    finish: 'Natural Chiseled Stone',
  },
  {
    id: 'snk-04',
    name: 'Teak Vanity',
    category: 'sink-stone',
    image: waterSinkImg4,
    badge: null,
    description: 'Wall-mount solid teak bathroom vanity console designed to support a natural stone vessel.',
    material: 'Reclaimed or premium selected teak',
    dimensions: '90 × 50 × 40 cm',
    finish: 'Water-Resistant Botanical Seal',
  },
  {
    id: 'snk-05',
    name: 'Cream Basin',
    category: 'sink-stone',
    image: waterSinkImg5,
    badge: null,
    description: 'Organic river rock washbasin in warm cream earth tones with a smooth water bowl.',
    material: 'Natural river stone, hand-carved',
    dimensions: '46 × 37 × 14 cm',
    finish: 'Smooth Honed Surface',
  },
  {
    id: 'snk-06',
    name: 'Square Basin',
    category: 'sink-stone',
    image: waterSinkImg6,
    badge: null,
    description: 'Substantial geometric square washbasin carved from solid natural river stone.',
    material: 'Natural river stone, hand-carved',
    dimensions: '40 × 40 × 14 cm',
    finish: 'Honed Matte Stone',
  },
];
