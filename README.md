# 🪵 Pandawa Furniture — Artisan Earth & Timber

> **Website Resmi & Katalog Digital Kriya Mebel Kayu Jati Jepara**  
> *Blending Generational Indonesian Woodcraft with Contemporary Architectural Aesthetics.*

---

## 🌟 Tentang Pandawa Furniture

Berakar dari pusat kriya ukir dan pertukangan kayu legendaris di **Kudus & Jepara, Jawa Tengah**, **Pandawa Furniture** mewarisi dedikasi turun-temurun para empu pengrajin kayu. 

Setiap perabot—mulai dari meja makan jati solid, credenza berbilah arsitektural, kursi santai ergonomis, hingga wastafel pahatan batu kali—dikerjakan secara kriya tangan (*handcrafted*) dengan prinsip:
* **Kayu Jati Berkelanjutan**: Menggunakan kayu jati Perhutani legal dan *reclaimed teak* berusia puluhan tahun dengan kadar air yang terjaga presisi.
* **Konstruksi Purus & Pasak Tradisional**: Sambungan kayu murni tanpa ketergantungan paku besi (*zero-nail joinery*) yang kokoh lintas generasi.
* **Finishing Alami & Aman**: Dilapisi minyak nabati botani dan lilin lebah organik (*natural beeswax*) yang menonjolkan kehangatan urat kayu jati tanpa racun kimia (VOC-free).
* **Pesanan Khusus (*Bespoke Craft*)**: Setiap karya dapat dikustomisasi sesuai denah arsitektural dan kebutuhan ruang interior Anda.

---

## ✨ Fitur Utama Antarmuka Web

* 📜 **Artisanal Craft Scrollytelling**:  
  Pengalaman gulir interaktif yang membawa pengunjung menyusuri 4 fase transformasi balok jati mentah menjadi karya mahakarya (*Timber Harvest*, *Mortise & Tenon*, *Hand-Carving*, dan *Heirloom Polish*).
* 🎨 **Komponen Hidup & Interaktif (React Bits & Micro-interactions)**:
  * **SplitText & BlurText**: Animasi teks sinematik di setiap tajuk utama.
  * **SpotlightCard**: Kartu interaktif dengan efek sorot cahaya lembut mengikuti kursor.
  * **Magnetic Buttons**: Tombol interaktif dengan efek tarik magnetik halus ke kursor.
  * **Ambient Particles**: Partikel debu kayu emas/amber halus yang melayang di latar belakang.
  * **CountUp**: Penghitung angka dinamis untuk pencapaian dan statistik workshop.
  * **DriftWall Showcase**: Dinding galeri foto karya mebel yang bergerak mengalir (*smooth vertical drift*).
* 🪑 **Katalog Koleksi Lengkap**:
  * **Kursi & Bangku Jati** (*Ergonomic Lounge Chairs, Dining Chairs, Heritage Armchairs, Ottomans*).
  * **Bufet & Credenza** (*Sliding Fluted Credenzas, Minimalist Sideboards, Louvre Consoles*).
  * **Lemari Pajang & Pakaian** (*Glass Display Cabinets, Tall Wardrobes, Custom Pantries*).
  * **Wastafel Batu Alam & Jati** (*River Stone Basins, Chiseled Granite, Floating Teak Vanities*).
* 🌐 **Bilingual (i18n)**:
  * Dukungan dwi-bahasa penuh (**Bahasa Indonesia** & **English**) dengan tombol toggle instan di navigasi.
* 🏛️ **Palet Warna Alami (*Warm Earth Tones*)**:
  * Terracotta Warmth (`#BE733D`)
  * Deep Forest Olive (`#4A5E3D`)
  * Cocoa Earth (`#483124`)
  * Dark Earth (`#2D241B`)
  * Soft Warm Cream (`#FAF7F2`)

---

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animasi & Interaksi**: [Motion (Framer Motion)](https://motion.dev/)
* **Internasionalisasi**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
* **Icons & Fonts**: Google Material Symbols, Google Fonts (*Syne*, *Source Sans 3*)

---

## 📂 Struktur Folder Proyek

```bash
Mebel/
├── src/
│   ├── assets/                 # Aset foto asli produk (chair, cabinet, dressoir, water sink)
│   ├── app/
│   │   ├── components/
│   │   │   ├── animejs/        # Komponen kartu ekspresif & navigasi pohon
│   │   │   ├── reactbits/      # Komponen interaktif (SplitText, SpotlightCard, Magnet, dll)
│   │   │   ├── CraftScrollytelling.tsx # Modul interaktif scrollytelling kriya jati
│   │   │   ├── DriftWall.tsx   # Galeri dinding melayang
│   │   │   ├── Navigation.tsx  # Navbar editorial mewah
│   │   │   └── Footer.tsx      # Footer bengkel & kontak
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Beranda
│   │   │   ├── About.tsx       # Cerita & Warisan Kami
│   │   │   ├── Products.tsx    # Katalog Koleksi Produk
│   │   │   ├── Production.tsx  # Standar & Proses Pengerjaan
│   │   │   └── Contact.tsx     # Konsultasi Desain & Pesanan
│   │   ├── App.tsx             # Root layout & routing
│   │   └── routes.ts           # Konfigurasi rute
│   └── i18n/
│       └── locales/            # Terjemahan ID & EN
├── ui-drafts/                  # Konsep & rancangan antarmuka awal
└── package.json
```

---

## 🚀 Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan):

1. **Clone repositori**:
   ```bash
   git clone https://github.com/Cimwory/pandawa_furniture.git
   cd pandawa_furniture
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (dev server)**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173/`.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

---

## 📜 Lisensi & Hak Cipta

© 1994 – 2026 **Pandawa Furniture**. Seluruh hak cipta dilindungi.  
Didedikasikan untuk melestarikan keindahan abadi seni kriya kayu jati Nusantara.