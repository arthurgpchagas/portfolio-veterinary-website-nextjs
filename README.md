# The Pet Office - Veterinary Website

A modern veterinary clinic website built with **Next.js**, **Tailwind CSS (v4)**, **ShadCN UI** and full **dark mode** support. Designed for **responsiveness**, mobile-first access, and easy WhatsApp or phone scheduling.

## Preview

![Preview of The Pet Office website](https://portfolio-veterinary-website-nextjs.vercel.app/)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.dev)
- **Icons**: [Lucide](https://lucide.dev)
- **Theme toggle**: [`next-themes`](https://github.com/pacocoursey/next-themes)
- **Image optimization**: `next/image`
- **Dark Mode**: Class-based switching via `ThemeProvider`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with ThemeProvider and global styles
│   ├── page.tsx          # Main veterinary landing page
    └── globals.css       # Tailwind + theme definitions
└── components/
    ├── ThemeToggle.tsx   # Light/Dark mode toggle button
    └── ui/               # ShadCN UI components

```
---

## Features

- Fully responsive layout
- Dark mode toggle
- One-click WhatsApp and phone buttons
- Clean semantic HTML with Tailwind utility classes
- Highlighting of neurologist specialization
- Contact section with location, hours, and scheduling CTA
---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/arthurgpchagas/portfolio-veterinary-website-nextjs.git
cd portfolio-veterinary-website-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Deploy to Vercel

> This project is fully optimized for [Vercel](https://vercel.com)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **“New Project”**
4. Select your repository
5. Deploy ✅

---

## Contact Integration

- **WhatsApp**: Opens in app/browser
- **Phone**: `tel:` protocol for direct mobile call

```tsx
<a href="https://wa.me/number">...</a>
<a href="tel:+number">...</a>
```
---

## License

This project is licensed under the MIT License. Feel free to use it as a template!