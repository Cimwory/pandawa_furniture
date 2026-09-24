import DriftWall from './DriftWall';
import './DriftWall.css';

// Imports generated dynamically
import img1 from '../../assets/cabinet/02702143-1.jpg';
import img2 from '../../assets/cabinet/02702153-650x650.jpg';
import img3 from '../../assets/cabinet/02702809-1-650x650.jpg';
import img4 from '../../assets/cabinet/1380088840-650x650.jpg';
import img5 from '../../assets/chair/02702213-650x650.jpg';
import img6 from '../../assets/chair/02702930-650x650.jpg';
import img7 from '../../assets/chair/1380686619-650x650.jpg';
import img8 from '../../assets/chair/1532591640-650x650.jpg';
import img9 from '../../assets/chair/1565899437-650x650.jpg';
import img10 from '../../assets/chair/KL-J-010-A1-650x650.jpg';
import img11 from '../../assets/chair/x_0y_01458114406-650x650.jpg';
import img12 from '../../assets/dressoir/02703170-1-650x650.jpg';
import img13 from '../../assets/dressoir/02732018-1.jpg';
import img14 from '../../assets/dressoir/02732026-650x650.jpg';
import img15 from '../../assets/dressoir/MA-A-003-650x650.jpg';
import img16 from '../../assets/dressoir/TF-A-002-100-02732144-100x46x451-650x650.jpg';
import img17 from '../../assets/dressoir/TFA002-800-600x600.jpg';
import img18 from '../../assets/water sink/6a3d62e1-b9c4-496c-9132-a025c0627efb.jpg';
import img19 from '../../assets/water sink/8701061a-9a20-4757-a9df-0bb2bacd549d.jpg';
import img20 from '../../assets/water sink/8d9c2597-6d3d-472b-a82d-2cba04191bcf.jpg';
import img21 from '../../assets/water sink/a5d52f18-938e-4786-9764-f8f84bfb85bb.jpg';
import img22 from '../../assets/water sink/abbc1bbd-c466-4ce6-8d15-6de8fedae365.jpg';
import img23 from '../../assets/water sink/f074e6f2-a389-4b73-8f0e-dfe8252a78ae.jpg';

export const showcaseImages = [
  { image: img1, alt: 'Cabinet 1' },
  { image: img2, alt: 'Cabinet 2' },
  { image: img3, alt: 'Cabinet 3' },
  { image: img4, alt: 'Cabinet 4' },
  { image: img5, alt: 'Chair 5' },
  { image: img6, alt: 'Chair 6' },
  { image: img7, alt: 'Chair 7' },
  { image: img8, alt: 'Chair 8' },
  { image: img9, alt: 'Chair 9' },
  { image: img10, alt: 'Chair 10' },
  { image: img11, alt: 'Chair 11' },
  { image: img12, alt: 'Dressoir 12' },
  { image: img13, alt: 'Dressoir 13' },
  { image: img14, alt: 'Dressoir 14' },
  { image: img15, alt: 'Dressoir 15' },
  { image: img16, alt: 'Dressoir 16' },
  { image: img17, alt: 'Dressoir 17' },
  { image: img18, alt: 'Water sink 18' },
  { image: img19, alt: 'Water sink 19' },
  { image: img20, alt: 'Water sink 20' },
  { image: img21, alt: 'Water sink 21' },
  { image: img22, alt: 'Water sink 22' },
  { image: img23, alt: 'Water sink 23' },
];

export function VisualShowcase({ title = 'A Glimpse of Our Art' }: { title?: string }) {
  return (
    <section className="w-full relative py-section-gap-desktop overflow-hidden bg-brand-cream/10 border-y border-brand-dark-earth/10">
      <div className="text-center mb-16 relative z-10 px-grid-margin">
        <h2 className="font-headline-lg text-headline-lg text-brand-dark-earth mb-4 font-bold">{title}</h2>
        <div className="w-16 h-1 bg-brand-terracotta mx-auto rounded-full"></div>
      </div>
      <div className="w-full h-[600px] md:h-[800px] relative">
        <DriftWall
          items={showcaseImages}
          direction="up"
          speed={0.7}
          columns={7}
          tileWidth={200}
          tileHeight={260}
          gap={12}
          radius={8}
          overlayColor="rgba(0, 0, 0, 0.05)"
        />
      </div>
    </section>
  );
}

export default VisualShowcase;
