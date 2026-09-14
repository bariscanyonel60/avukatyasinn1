# Av. Yasin Can Köse — Hukuk Bürosu Web Sitesi

## Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
- Motion (`motion`) + Lucide React + Zod

## Çalıştırma
```bash
cd yck-web
npm install
npm run dev
```

## Build / Lint
```bash
npm run build
npm run lint
```

## İçerik güncelleme
- Site bilgileri: `src/data/site.ts` (telefon, e-posta, adres, baro sicil, WhatsApp, practice areas)
- Logo: `src/components/ui/BrandLogo.tsx` + `public/brand/logo-sign.jpg`
- SEO helpers: `src/lib/seo.ts`
- Domain: `NEXT_PUBLIC_SITE_URL` env değişkeni

## Dokunma / dikkat
- TC kimlik numarası sitede yayınlanmaz (PII)
- Doğrulanmamış başarı iddiaları / garanti dili ekleme
- Form server action validate eder; e-posta entegrasyonu bağlanmalı

## Deploy
- Netlify: `netlify.toml` + `@netlify/plugin-nextjs`
