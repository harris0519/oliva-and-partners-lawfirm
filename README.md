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

## Publish on GitHub Pages

Push the project to the `main` branch of `harris0519/oliva-and-partners-lawfirm`. In **Settings → Pages**, select **GitHub Actions** as the source. The included workflow tests, builds, and deploys the frontend on each push to `main`; it can also be run manually from **Actions**.

Navigation uses clean URLs such as `/about` on `dof.law`. The build creates an `index.html` for every page, practice area, and attorney so direct visits and refreshes work on GitHub Pages. It also includes the app as a [custom 404 page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) for unknown URLs. Existing `#/...` links automatically switch to their clean equivalents.

The deployment workflow reads the site's base path from GitHub Pages. It uses `/` for a site at the domain root and the repository path for a project site hosted under `username.github.io`. Local builds default to `/oliva-and-partners-lawfirm/` and can override it with the `VITE_SITE_BASE` environment variable. Keep `.env.local` private. GitHub Pages publishes the frontend in `dist/`.

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

The site uses BrowserRouter and generates static route entry pages for GitHub Pages. After changing the custom domain, run the deployment workflow so the build uses the updated Pages base path.

1. In the repository's **Settings → Pages**, keep **Source: GitHub Actions**, enter `dof.law` under **Custom domain**, and save. The Actions workflow does not need a `CNAME` file.
2. At the DNS provider, point the apex (`@`) to GitHub Pages using the four `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153` (or an ALIAS/ANAME to `harris0519.github.io`). Optionally add `www` as a CNAME to `harris0519.github.io`. Preserve existing MX and email authentication records for `dof.law`.
3. In **Actions**, run **Deploy React website to GitHub Pages**. The workflow reads the base path from the Pages configuration and uses `https://hrlportal.onrender.com/api/contact` for the contact form.
4. Make sure the HRL Portal service has its Brevo key. Its contact route defaults to the verified sender `hlazaro@socexconsulting.com` and recipient `olivaandpartners@dof.law`; these can be overridden with `OLP_SENDER_EMAIL` and `OLP_CONTACT_EMAIL` in Render. The route allows `https://dof.law` and `https://www.dof.law`.
5. After DNS and HTTPS are ready, enable **Enforce HTTPS** in **Settings → Pages** and submit a test inquiry from `https://dof.law/contact`.
