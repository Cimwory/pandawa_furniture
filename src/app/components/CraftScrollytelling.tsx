import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Craft images from production assets
import timberImg from '../../assets/f5553a4a208f9b99979e04e8268a24f5a5feabcd.png';
import joineryImg from '../../assets/ea4e0d3666996065ddeb190c4028a8c43ca1eab2.png';
import carvingImg from '../../assets/1aad063b976faef1f4b68af17eca100c145ee9a7.png';
import finishImg from '../../assets/810c3ec98355f08a9c766659a6ea0cd9314b15ac.png';

interface Chapter {
  id: string;
  number: string;
  tag: string;
  titleEn: string;
  titleId: string;
  descEn: string;
  descId: string;
  accent: string;
  accentRgb: string;
  image: string;
  specs: {
    labelEn: string;
    labelId: string;
    val: string;
  }[];
  codeSnippet: {
    phase: string;
    technique: string;
    tolerance: string;
    sustainability: string;
    durability: string;
  };
}

const CHAPTERS: Chapter[] = [
  {
    id: 'timber',
    number: '01',
    tag: 'SOURCE SELECTION',
    titleEn: 'Aged Teak Timber Selection',
    titleId: 'Seleksi Kayu Jati Tua Berkualitas',
    descEn: 'Only reclaimed heartwood teak aged 30+ years is ethically harvested. Kiln-dried to an exact 10-12% equilibrium moisture content to guarantee generational dimensional stability.',
    descId: 'Hanya kayu jati tua berusia 30+ tahun yang dipilih secara etis. Dikeringkan oven hingga kadar air presisi 10-12% guna menjamin stabilitas dimensi antargenerasi.',
    accent: '#BE733D', // Terracotta
    accentRgb: '190, 115, 61',
    image: timberImg,
    specs: [
      { labelEn: 'MOISTURE RATIO', labelId: 'KADAR AIR', val: '10.8% KILN-DRIED' },
      { labelEn: 'TIMBER ORIGIN', labelId: 'ASAL KAYU', val: 'CENTRAL JAVA TEAK' },
      { labelEn: 'HEARTWOOD PURITY', labelId: 'KEMURNIAN KAYU', val: 'GRADE-A SOLID' }
    ],
    codeSnippet: {
      phase: 'timber_selection',
      technique: 'kiln_dried_equilibrium',
      tolerance: '±0.5% moisture',
      sustainability: '100% legal reclaimed',
      durability: '50+ years guarantee'
    }
  },
  {
    id: 'joinery',
    number: '02',
    tag: 'STRUCTURAL JOINERY',
    titleEn: 'Mortise & Tenon Architectural Joinery',
    titleId: 'Konstruksi Purus & Lubang Tradisional',
    descEn: 'Pure zero-nail architectural joinery. Master artisans hand-chisel interlocking tenons with sub-millimeter tolerances, allowing natural wood expansion while maintaining unbreakable load integrity.',
    descId: 'Struktur murni tanpa paku besi. Pengrajin ahli memahat sambungan purus & lubang dengan toleransi sub-milimeter, memberi ruang muai-susut alami dengan kekuatan beban kokoh.',
    accent: '#4A5E3D', // Deep Olive
    accentRgb: '74, 94, 61',
    image: joineryImg,
    specs: [
      { labelEn: 'INTERLOCK METHOD', labelId: 'METODE SAMBUNGAN', val: 'MORTISE & TENON' },
      { labelEn: 'NAIL DEPENDENCY', labelId: 'KETERGANTUNGAN PAKU', val: '0% (ALL WOOD DOWEL)' },
      { labelEn: 'STRUCTURAL TOLERANCE', labelId: 'TOLERANSI STRUKTUR', val: '< 0.35 MM' }
    ],
    codeSnippet: {
      phase: 'architectural_joinery',
      technique: 'traditional_purus_lubang',
      tolerance: '< 0.35mm precision',
      sustainability: 'zero_metal_hardware',
      durability: 'seismic_shock_resistant'
    }
  },
  {
    id: 'carving',
    number: '03',
    tag: 'ARTISANAL SCULPTING',
    titleEn: 'Master Hand-Carving & Contouring',
    titleId: 'Pahat Seni Tangan Pengrajin Jepara',
    descEn: 'Sculptural organic ergonomics carved entirely by hand. Jepara artisans with generations of lineage bring warmth and fluid curves to every surface, transforming rigid timber into living art.',
    descId: 'Ergonomi organik skulptural yang dipahat sepenuhnya dengan tangan. Pengrajin Jepara turun-temurun menghadirkan kehangatan lekuk dinamis, mengubah balok kaku menjadi mahakarya.',
    accent: '#483124', // Cocoa Brown
    accentRgb: '72, 49, 36',
    image: carvingImg,
    specs: [
      { labelEn: 'CARVING HERITAGE', labelId: 'WARISAN PAHAT', val: 'JEPARA ARTISAN GUILD' },
      { labelEn: 'SURFACE DETAIL', labelId: 'DETAIL PERMUKAAN', val: 'ORGANIC TACTILE RELIEF' },
      { labelEn: 'EXECUTION TIME', labelId: 'WAKTU PENGERJAAN', val: '48+ HOURS / PIECE' }
    ],
    codeSnippet: {
      phase: 'artisanal_carving',
      technique: 'hand_chiseled_relief',
      tolerance: 'human_tactile_perfection',
      sustainability: 'heritage_preservation',
      durability: 'timeless_aesthetic'
    }
  },
  {
    id: 'finish',
    number: '04',
    tag: 'HEIRLOOM FINISHING',
    titleEn: 'Organic Natural Oil & Beeswax Polish',
    titleId: 'Finishing Minyak Alami & Lilin Lebah',
    descEn: 'Non-toxic, hand-rubbed botanical oils permeate deep into the wood pores. Sealed with organic beeswax to enhance natural golden-brown chatoyancy while remaining breathable and silky to touch.',
    descId: 'Minyak nabati alami tanpa zat kimia diusapkan manual meresap ke dalam pori kayu. Dilapisi lilin lebah organik untuk menonjolkan kilau urat jati alami yang bernapas dan halus.',
    accent: '#BE733D', // Terracotta Gold
    accentRgb: '190, 115, 61',
    image: finishImg,
    specs: [
      { labelEn: 'FINISHING AGENT', labelId: 'BAHAN FINISHING', val: 'PURE NATURAL TEAK OIL' },
      { labelEn: 'VOC EMISSION', labelId: 'EMISI KIMIA (VOC)', val: '0.00% NON-TOXIC' },
      { labelEn: 'SURFACE FEEL', labelId: 'SENTUHAN TEKSTUR', val: 'MATTE SATIN SILK' }
    ],
    codeSnippet: {
      phase: 'heirloom_finishing',
      technique: 'hand_buffed_beeswax',
      tolerance: 'food_safe_contact',
      sustainability: '100% bio_degradable',
      durability: 'self_healing_patina'
    }
  }
];

export function CraftScrollytelling() {
  const { i18n } = useTranslation();
  const isId = i18n.language === 'id';

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      
      if (containerHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / containerHeight, 0), 1);
      setScrollProgress(progress);

      // 4 steps -> partition progress into 4 intervals
      const step = Math.min(Math.floor(progress * CHAPTERS.length), CHAPTERS.length - 1);
      setActiveIdx(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = CHAPTERS[activeIdx];

  const scrollToChapter = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (CHAPTERS.length - 1)) * containerHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#1A1612] text-[#FDFBF6] transition-colors duration-700"
      style={{ height: `${CHAPTERS.length * 100 + 40}vh` }}
    >
      {/* Sticky Frame: Pins for the entire duration of the scroll */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex flex-col justify-between px-4 sm:px-8 md:px-14 py-6 md:py-8">
        
        {/* Background Subtle Tech Grid / Blueprint Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(253, 251, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient Glow Aura responding to Chapter Color */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 opacity-25"
          style={{
            backgroundColor: currentChapter.accent
          }}
        />

        {/* TOP HEADER: Scrollytelling Title & Mode Indicator */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#FDFBF6]/10 pb-3">
          <div className="flex items-center gap-3">
            <span 
              className="w-2.5 h-2.5 rounded-full animate-pulse transition-colors duration-500"
              style={{ backgroundColor: currentChapter.accent }}
            />
            <span className="font-mono text-xs md:text-sm tracking-widest text-[#FDFBF6]/70 uppercase">
              {isId ? 'PROSES KRIYA JATI' : 'ARTISANAL CRAFT JOURNEY'}
            </span>
            <span className="hidden sm:inline text-xs text-[#FDFBF6]/30 font-mono">/</span>
            <span className="hidden sm:inline font-mono text-xs text-[#FDFBF6]/50">
              SCROLL-CONTROLLED SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider" style={{ color: currentChapter.accent }}>
              CHAPTER {currentChapter.number} / 04
            </span>
          </div>
        </div>

        {/* MAIN INTERACTIVE STAGE: 3 Columns (Narrative | Central Circular Dial | Spec Card) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
          
          {/* LEFT: Chapter Narrative & Spec Callouts (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3 md:space-y-5">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-[#FDFBF6]/15 bg-[#FDFBF6]/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentChapter.accent }} />
              <span className="font-mono text-[11px] tracking-wider text-[#FDFBF6]/80 uppercase">
                {currentChapter.tag}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-bold tracking-tight text-white transition-all duration-500">
              {isId ? currentChapter.titleId : currentChapter.titleEn}
            </h2>

            {/* Narrative */}
            <p className="text-sm md:text-base text-[#FDFBF6]/80 leading-relaxed max-w-xl transition-all duration-500 font-sans">
              {isId ? currentChapter.descId : currentChapter.descEn}
            </p>

            {/* Technical Specification Badges */}
            <div className="pt-2 space-y-2">
              {currentChapter.specs.map((spec, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDFBF6]/5 border border-[#FDFBF6]/10 hover:border-[#FDFBF6]/25 transition-all text-xs"
                >
                  <span className="text-[#FDFBF6]/70 flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentChapter.accent }} />
                    {isId ? spec.labelId : spec.labelEn}
                  </span>
                  <span className="font-semibold text-white tracking-wide font-sans">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Artisanal Medallion Viewport (Col 6-8) */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-4">
            
            {/* Outer Subtle Rotating Ring */}
            <div 
              className="absolute w-[260px] sm:w-[320px] md:w-[350px] h-[260px] sm:h-[320px] md:h-[350px] rounded-full border border-dashed border-[#FDFBF6]/15 transition-transform duration-700 pointer-events-none"
              style={{ transform: `rotate(${scrollProgress * 180}deg)` }}
            />

            {/* Inner Glowing Warm Wood Aura */}
            <div 
              className="absolute w-[220px] sm:w-[270px] md:w-[300px] h-[220px] sm:h-[270px] md:h-[300px] rounded-full transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${currentChapter.accent}40 0%, transparent 70%)`,
                opacity: 0.6,
                filter: 'blur(16px)'
              }}
            />

            {/* Main Circular Viewport Container */}
            <div 
              className="relative w-[210px] sm:w-[260px] md:w-[290px] h-[210px] sm:h-[260px] md:h-[290px] rounded-full overflow-hidden border-2 shadow-2xl transition-all duration-700 bg-black/40"
              style={{ borderColor: currentChapter.accent }}
            >
              {/* Dynamic Image Layers with Cross-Fade */}
              {CHAPTERS.map((chap, idx) => (
                <div
                  key={chap.id}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${chap.image})`,
                    opacity: activeIdx === idx ? 1 : 0,
                    transform: activeIdx === idx ? 'scale(1.05)' : 'scale(1.15)',
                    transition: 'opacity 0.7s ease-in-out, transform 1s ease-out'
                  }}
                />
              ))}

              {/* Natural Woodcraft Badge floating inside viewport */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-medium tracking-wider text-[#FDFBF6]">
                {isId ? `Tahap 0${activeIdx + 1}` : `Phase 0${activeIdx + 1}`}
              </div>
            </div>
          </div>

          {/* RIGHT: Master Craftsman's Workshop Ledger Card (Col 9-12) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col space-y-4">
            <div className="p-5 rounded-2xl bg-[#201812]/95 border border-[#FDFBF6]/10 shadow-2xl backdrop-blur-md text-xs">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#FDFBF6]/10 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-terracotta text-sm">carpenter</span>
                  <span className="font-serif font-bold text-[#FDFBF6] tracking-wide text-xs">
                    {isId ? 'Catatan Empu Jepara' : 'Master Artisan Ledger'}
                  </span>
                </div>
                <span className="text-[10px] text-[#FDFBF6]/40 uppercase tracking-wider font-medium">
                  {currentChapter.number} / 04
                </span>
              </div>

              {/* Artisanal Craftsmanship Notes */}
              <div className="space-y-2.5 leading-relaxed text-[#FDFBF6]/80 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-brand-terracotta font-bold text-xs mt-0.5">•</span>
                  <div>
                    <span className="text-[#FDFBF6]/50 block text-[10px] uppercase font-medium">Fase Pengerjaan</span>
                    <span className="text-white font-medium">{isId ? currentChapter.titleId : currentChapter.titleEn}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-brand-terracotta font-bold text-xs mt-0.5">•</span>
                  <div>
                    <span className="text-[#FDFBF6]/50 block text-[10px] uppercase font-medium">Karakter Kayu</span>
                    <span className="text-white font-medium">Jati Pilihan Perhutani, Kadar Air Terjaga</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-brand-terracotta font-bold text-xs mt-0.5">•</span>
                  <div>
                    <span className="text-[#FDFBF6]/50 block text-[10px] uppercase font-medium">Standar Kualitas</span>
                    <span className="text-white font-medium">Sambungan Presisi & Ramah Lingkungan</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#FDFBF6]/10 flex items-center justify-between text-[11px] text-[#FDFBF6]/60">
                <span>Perjalanan Kriya</span>
                <span className="font-semibold text-white">{(scrollProgress * 100).toFixed(0)}%</span>
              </div>
            </div>

            {/* Quick Summary Tip */}
            <div className="p-3.5 rounded-xl border border-[#FDFBF6]/5 bg-[#FDFBF6]/5 text-xs text-[#FDFBF6]/70 leading-relaxed flex items-start gap-2.5">
              <span className="material-symbols-outlined text-amber-400 text-sm mt-0.5">spa</span>
              <p className="text-[11px]">
                {isId
                  ? 'Gulir ke bawah perlahan untuk melihat transformasi balok kayu jati menjadi furniture mahakarya.'
                  : 'Scroll smoothly to observe the transformation of raw teak into heirloom craftsmanship.'}
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM CONTROLLER & STEP SCRUBBER */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-[#FDFBF6]/10 gap-4">
          
          {/* Chapter Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                onClick={() => scrollToChapter(idx)}
                className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-300 text-xs ${
                  activeIdx === idx 
                    ? 'bg-[#FDFBF6] text-[#1A1612] font-semibold shadow-md scale-105' 
                    : 'bg-[#FDFBF6]/5 text-[#FDFBF6]/60 hover:bg-[#FDFBF6]/15 hover:text-white'
                }`}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: activeIdx === idx ? chap.accent : 'rgba(253, 251, 246, 0.4)' }}
                />
                <span className="font-serif font-bold">0{idx + 1}</span>
                <span className="hidden md:inline text-[11px] opacity-90">{chap.tag.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Interactive Progress Bar */}
          <div className="flex items-center gap-3 w-full sm:w-64">
            <span className="text-[11px] text-[#FDFBF6]/60 font-medium">PROGRES</span>
            <div className="relative flex-1 h-1.5 bg-[#FDFBF6]/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-200"
                style={{
                  width: `${scrollProgress * 100}%`,
                  backgroundColor: currentChapter.accent
                }}
              />
            </div>
            <span className="text-xs font-semibold text-white min-w-[32px] text-right">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
