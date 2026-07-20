# Oliva & Partners React Website

A React + Vite law firm website starter with reusable pages, responsive navigation, mega menu, practice area pages, attorney profiles, insights, and a contact form demo.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite, usually http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Important content files

- `src/data/siteData.js` - attorneys, practice areas, and insights
- `src/styles.css` - colors, spacing, responsive design
- `src/components/Header.jsx` - navigation and mega menu
- `src/pages/` - website pages

## GitHub Pages note

This project uses BrowserRouter. For GitHub Pages, the simplest deployment is through Vercel or Netlify connected to the GitHub repository. If you specifically need GitHub Pages, switch to HashRouter in `src/main.jsx` or configure a SPA fallback.
