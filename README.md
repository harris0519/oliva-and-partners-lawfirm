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

Navigation uses clean URLs such as `/oliva-and-partners-lawfirm/about`. The build creates an `index.html` for every page, practice area, and attorney so direct visits and refreshes work on GitHub Pages. It also includes the app as a [custom 404 page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) for unknown URLs. Existing `#/...` links automatically switch to their clean equivalents.

The default base is `/oliva-and-partners-lawfirm/`. For a different repository name, set the Actions repository variable `VITE_SITE_BASE` to `/your-repository/`. For a custom domain or a `username.github.io` repository, set it to `/`, then redeploy. Keep `.env.local` private; only the frontend in `dist/` is published.

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

The site uses BrowserRouter and generates static route entry pages for GitHub Pages. The Vite base path defaults to `/oliva-and-partners-lawfirm/` for the existing GitHub Pages URL. Set the GitHub Actions repository variable `VITE_SITE_BASE` to `/` when switching to the custom domain, then run the deployment workflow again.

1. In the repository's **Settings → Pages**, keep **Source: GitHub Actions**, enter `dof.law` under **Custom domain**, and save. The Actions workflow does not need a `CNAME` file.
2. At the DNS provider, point the apex (`@`) to GitHub Pages using the four `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153` (or an ALIAS/ANAME to `harris0519.github.io`). Optionally add `www` as a CNAME to `harris0519.github.io`. Preserve existing MX and email authentication records for `dof.law`.
3. In **Settings → Secrets and variables → Actions → Variables**, set `VITE_SITE_BASE` to `/`. The workflow already uses `https://hrlportal.onrender.com/api/contact` for the contact form. Run the **Deploy React website to GitHub Pages** workflow after setting the variable.
4. Make sure the HRL Portal service has its Brevo key. Its contact route defaults to the verified sender `hlazaro@socexconsulting.com` and recipient `olivaandpartners@dof.law`; these can be overridden with `OLP_SENDER_EMAIL` and `OLP_CONTACT_EMAIL` in Render. The route allows `https://dof.law` and `https://www.dof.law`.
5. After DNS and HTTPS are ready, enable **Enforce HTTPS** in **Settings → Pages** and submit a test inquiry from `https://dof.law/contact`.
