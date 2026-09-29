# Oliva & Partners React Website

A React + Vite law firm website with reusable pages, responsive navigation, mega menu, practice area pages, attorney profiles, insights, and a contact form backed by Brevo transactional email.

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

## Contact form email

The form posts to `POST /api/contact` on a separate Node server. It uses the same Brevo transactional API as HRL Portal, but has its own endpoint and firm branding. The Brevo key stays on the server. The server sends a navy and gold HTML email plus a plain text version, with the visitor's address as Reply-To.

1. Copy `.env.example` to `.env.local` and set `BREVO_API_KEY` and `OLP_SENDER_EMAIL` (a sender verified in Brevo). `OLP_CONTACT_EMAIL` is `olivaandpartners@dof.law`. Set `ALLOWED_ORIGINS` to the exact website origins that may submit inquiries. Do not commit `.env.local`.
2. Start the API with `npm run dev:api` and the website with `npm run dev` in a separate terminal. Vite proxies `/api/contact` to port 3001 during development.
3. Production uses the contact route on the HRL Portal service at `https://hrlportal.onrender.com/api/contact`. The GitHub Pages workflow sets this URL during the build; no repository variable is needed. The included Node server can also be deployed independently if needed.

The server validates form fields, limits request size and submission rate, and ignores the hidden bot field. The HRL Portal backend must be updated with the contact route; GitHub Pages only hosts the frontend.

## Important content files

- `src/data/siteData.js` - attorneys, practice areas, and insights
- `src/styles.css` - colors, spacing, responsive design
- `src/components/Header.jsx` - navigation and mega menu
- `src/pages/` - website pages

## Use dof.law with GitHub Pages

The site uses HashRouter so routes work on GitHub Pages. The Vite base path defaults to `/oliva-and-partners-lawfirm/` for the existing GitHub Pages URL. Set the GitHub Actions repository variable `VITE_SITE_BASE` to `/` when switching to the custom domain, then run the deployment workflow again.

1. In the repository's **Settings → Pages**, keep **Source: GitHub Actions**, enter `dof.law` under **Custom domain**, and save. The Actions workflow does not need a `CNAME` file.
2. At the DNS provider, point the apex (`@`) to GitHub Pages using the four `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153` (or an ALIAS/ANAME to `harris0519.github.io`). Optionally add `www` as a CNAME to `harris0519.github.io`. Preserve existing MX and email authentication records for `dof.law`.
3. In **Settings → Secrets and variables → Actions → Variables**, set `VITE_SITE_BASE` to `/`. The workflow already uses `https://hrlportal.onrender.com/api/contact` for the contact form. Run the **Deploy React website to GitHub Pages** workflow after setting the variable.
4. Make sure the HRL Portal service has its Brevo key. Its contact route defaults to the verified sender `hlazaro@socexconsulting.com` and recipient `olivaandpartners@dof.law`; these can be overridden with `OLP_SENDER_EMAIL` and `OLP_CONTACT_EMAIL` in Render. The route allows `https://dof.law` and `https://www.dof.law`.
5. After DNS and HTTPS are ready, enable **Enforce HTTPS** in **Settings → Pages** and submit a test inquiry from `https://dof.law/#/contact`.
