# MyOwnByKu 💫

Sebuah *personal showcase website* yang interaktif dan estetis, dibangun menggunakan teknologi web modern. Project ini dirancang untuk menampilkan galeri foto kenangan dengan pesan personal, dibalut dengan animasi yang halus dan musik latar.

## 🌟 Fitur Utama

* **Interactive Draggable Cards**: Kartu galeri yang bisa digeser (drag-and-drop) untuk pengalaman pengguna yang menyenangkan.
* **Rich Animations**: Menggunakan berbagai efek visual seperti:
    * *Spotlight Effect* pada background.
    * *Meteors Effect* (animasi meteor jatuh).
    * *Text Generate Effect* untuk memunculkan teks kata per kata.
    * *Background Lines* yang dinamis.
* **Background Music**: Pemutar musik otomatis yang menemani pengguna saat menjelajahi halaman.
* **Modern UI/UX**: Tampilan *Dark Mode* yang elegan dengan elemen desain dari Aceternity UI / Framer Motion.

## 🛠️ Teknologi yang Digunakan

Project ini dibangun dengan *stack* teknologi terbaru:

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
* **Library**: [React 19](https://react.dev/)
* **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animation**: [Framer Motion](https://www.framer.com/motion/) & `tw-animate-css`
* **Icons**: [Lucide React](https://lucide.dev/)
* **Utilities**: `clsx`, `tailwind-merge`

## 📂 Struktur Project

Beberapa komponen kunci dalam project ini:

* `src/app/page.tsx`: Halaman utama yang memuat `FirstPage`.
* `src/Pages/FirstPage.tsx`: Komponen utama berisi logika kartu, teks animasi, dan data foto.
* `src/components/ui/`: Kumpulan komponen UI reusable (Card, Spotlight, Meteors, dll).
* `src/components/ui/BackgroundMusic.tsx`: Komponen untuk menangani audio latar.

## 🚀 Cara Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/username-anda/myownbykuuuu.git](https://github.com/username-anda/myownbykuuuu.git)
    cd myownbykuuuu
    ```

2.  **Install dependencies:**
    Pastikan Anda menggunakan Node.js versi terbaru (disarankan v20+ karena menggunakan Next.js 16).
    ```bash
    npm install
    # atau
    pnpm install
    # atau
    yarn install
    ```

3.  **Jalankan server development:**
    ```bash
    npm run dev
    # atau
    pnpm dev
    ```

4.  **Buka di browser:**
    Akses [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📝 Catatan Konfigurasi

* **Gambar**: Saat ini link gambar di `FirstPage.tsx` menggunakan URL eksternal (Instagram CDN). Disarankan untuk menggantinya dengan gambar lokal di folder `public/` atau hosting gambar permanen agar tidak *expired*.
* **Musik**: File audio terletak di `public/backsound.mp3`. Anda bisa menggantinya dengan file audio lain yang memiliki nama yang sama atau mengubah *path* di komponen `BackgroundMusic`.

## 🤝 Credits

* UI Components inspired by [Aceternity UI](https://ui.aceternity.com/)
* Built with ❤️ by **Najmi Faza**

---
*Dibuat untuk tujuan personal dan pembelajaran pengembangan web kreatif.*
