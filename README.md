# MoriDoll Website

> **"Play Today, Grow Every Day"**

Website landing page / company profile produk **MoriDoll** — sensory play kit edukatif untuk balita usia 18 bulan–5 tahun. Dibangun dengan Next.js 15, Tailwind CSS, dan Framer Motion.

---

## Tentang MoriDoll

MoriDoll adalah sensory play kit yang menggabungkan boneka interaktif, kaus kaki sensorik, dan sensory cube dengan variasi tekstur untuk menstimulasi perkembangan **sensorik**, **motorik halus**, **bahasa**, dan **kemandirian** balita melalui aktivitas bermain yang menyenangkan.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v3.4
- **Animasi:** Framer Motion
- **Ikon:** lucide-react
- **Font:** Baloo 2 (heading), Nunito (body) via `next/font/google`
- **Deploy:** Vercel

---

## Menjalankan Secara Lokal

```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Build Production

```bash
pnpm build
pnpm start
```

---

## Struktur Halaman

| Route | Keterangan |
|---|---|
| `/` | Beranda — semua section utama |
| `/produk` | Detail produk & isi paket |
| `/panduan-usia` | Aktivitas berdasarkan rentang usia |
| `/tentang` | Konsep, filosofi logo, visi |
| `/kontak` | Form kontak & CTA pemesanan |

---

## TODO — Langkah Manual Sebelum Deploy

Berikut item yang masih perlu diselesaikan secara manual sebelum website siap publik:

### 1. Ganti aset placeholder dengan aset asli

File placeholder yang perlu diganti (ada di `public/`):

| File | Keterangan |
|---|---|
| `public/logo/moridoll-logo.svg` | Logo SVG MoriDoll (idealnya per-huruf untuk fitur hover) |
| `public/logo/moridoll-logo-white.svg` | Versi putih logo untuk navbar gelap / footer |
| `public/images/hero-doll.webp` | Gambar/sketsa boneka utama di section Hero |
| `public/images/sketch-doll.webp` | Sketsa boneka untuk galeri |
| `public/images/sketch-socks.webp` | Sketsa kaus kaki sensorik untuk galeri |
| `public/images/sketch-cube.webp` | Sketsa sensory cube untuk galeri |
| `public/images/og-image.png` | OG image (1200×630 px) untuk social sharing |
| `public/favicon.ico` | Favicon website |

> Semua gambar disarankan format **WebP/AVIF** dengan ukuran < 200 KB per gambar.

### 2. Update nomor WhatsApp

Buka `src/lib/site.ts` dan ganti nilai `whatsapp`:

```ts
// Ganti:
whatsapp: "628XXXXXXXXXX",

// Dengan nomor asli, contoh:
whatsapp: "6281234567890",
```

### 3. Update URL & email (opsional)

Di file yang sama (`src/lib/site.ts`):

```ts
url: "https://moridoll.vercel.app",  // ganti jika domain berbeda
email: "halo@moridoll.id",           // ganti dengan email aktif
```

### 4. Deploy ke Vercel

```bash
# Pastikan sudah push ke GitHub terlebih dahulu
git push origin main

# Kemudian di Vercel:
# 1. Import repository dari GitHub
# 2. Vercel auto-detect Next.js — klik Deploy
# 3. Atur custom domain jika ada
```

Atau gunakan Vercel CLI:

```bash
pnpm install -g vercel
vercel --prod
```

---

## Lisensi

© 2026 MoriDoll. All rights reserved.
