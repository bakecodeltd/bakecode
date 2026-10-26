# Bake Code website

The production website for **BAKE CODE LTD**, built as a fully static Astro site for deployment to GitHub Pages at [bakecode.co.uk](https://bakecode.co.uk).

## Local development

Requires Node.js 24 or later.

```bash
npm install
npm run dev
```

Astro will print the local development URL, normally `http://localhost:4321`.

## Quality checks and production build

```bash
npm run check
npm run build
npm run preview
```

The production build is written to `dist/`.

## Content and configuration

Company-wide values live in `src/data/site.ts`. Products live in `src/data/products.ts`; add another object to the array to extend the product pages without changing their layouts.

A product with a `null` URL is shown without an external link until one is configured.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`; it can also be run manually from the Actions tab. It follows the official Astro GitHub Pages action pattern and grants only `contents: read`, `pages: write` and `id-token: write`.

Repository setup:

1. Push the repository to GitHub with `main` as the deployment branch.
2. Open **Settings → Pages** and select **GitHub Actions** as the source.
3. Run the **Deploy to GitHub Pages** workflow, or push to `main`.
4. In **Settings → Pages → Custom domain**, enter `bakecode.co.uk` and save it. A `CNAME` file alone does not configure the custom domain.
5. At the DNS provider, add the GitHub Pages records shown in GitHub's current custom-domain documentation. For an apex domain this normally means the documented `A`/`AAAA` records; add a `www` CNAME if the `www` hostname should also resolve.
6. Allow DNS to propagate, verify the domain in GitHub if appropriate, then enable **Enforce HTTPS** when GitHub makes the option available.

The Astro `site` value is `https://bakecode.co.uk` and no repository `base` path is set, because production uses a root custom domain.

## Pre-launch checklist

- Have the draft privacy policy reviewed against the final hosting, email and analytics setup.
- Confirm the custom domain and HTTPS status in GitHub Pages settings.
- Check the deployed canonical URLs and social sharing preview.
