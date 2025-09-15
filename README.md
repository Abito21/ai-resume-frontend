# AI Resume Frontend

Frontend aplikasi untuk **AI Resume**, dibangun menggunakan **React**, **TypeScript**, dan **Vite**.

---

## 🚀 Fitur Utama

- **Pembuatan Resume Otomatis**  
  Membantu membuat resume dengan bantuan AI sehingga lebih cepat, rapi, dan sesuai standar modern.  

- **Formulir Interaktif & Validasi Input**  
  Menyediakan form dinamis yang user-friendly dengan validasi input agar data yang dimasukkan sesuai format.  

- **Struktur Modular & Reusable Components**  
  Komponen UI dibuat modular dan reusable sehingga mudah untuk dikembangkan dan dipelihara.  

- **Performa Tinggi dengan Vite**  
  Proses build dan hot-reload sangat cepat menggunakan Vite.  

- **Linting & Kualitas Kode**  
  ESLint digunakan untuk menjaga kualitas dan konsistensi kode.  

- **Type Safety dengan TypeScript**  
  Menjamin kode lebih aman dan mudah dipelihara melalui pengetikan statis TypeScript.    

---

## 🛠️ Teknologi

| Komponen          | Keterangan                     |
|-------------------|--------------------------------|
| Framework / UI    | React + TypeScript            |
| Build Tool        | Vite                          |
| Linting           | ESLint                        |
| Konfigurasi TS    | tsconfig (app, node)          |
| Bundler & Tooling | vite.config.ts                |

---

## 📂 Struktur Direktori

```
.
ai-resume-frontend/
├── public/ # File statis (ikon, gambar, dll)
├── src/ # Source code utama
│ ├── components/ # Komponen UI reusable
│ ├── pages/ # Halaman / route aplikasi
│ ├── services/ # Panggilan API / logika bisnis
│ ├── utils/ # Helper / utilitas
│ └── ... # Modul lainnya
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```


---

## ⚙️ Instalasi & Menjalankan

1. Clone repositori  
   ```bash
   git clone https://github.com/Abito21/ai-resume-frontend.git
   cd ai-resume-frontend
   ```

2. Install dependencies
   ```bash
   # dengan npm
   npm install
   
   # atau dengan yarn
   yarn
   
   # atau dengan pnpm
   pnpm install
   ```
3. Jalankan mode development
   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di http://localhost:3000

4. Build untuk production
   ```bash
   npm run dev
   ```

5. Preview hasil build
   ```bash
   npm run dev
   ```

---

## 🔧 Konfigurasi

- vite.config.ts → konfigurasi build & dev server

- tsconfig.json → pengaturan TypeScript

- eslint.config.js → aturan linting

- .gitignore → file/folder yang diabaikan Git

---
