# Blog

This repository now hosts an Angular 21 application at the repository root. The app keeps Angular SSR enabled for build-time prerendering, but it is configured to emit fully static output for deployment to GitHub Pages.

## Runtime baseline

- Node.js `22.12.0` via `.nvmrc`
- Angular CLI `21.x`
- npm `10.x`

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

## Production build and prerender

Run the static production build:

```bash
npm run prerender
```

The generated site is written to `dist/blog-angular/browser`.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that:

1. installs dependencies
2. builds the prerendered static site
3. uploads `dist/blog-angular/browser` as the GitHub Pages artifact
4. deploys that artifact to GitHub Pages

The site is assumed to be served from the custom-domain root, so the production `baseHref` stays set to `/`.

`CNAME` is copied into the build output through the Angular assets configuration, so the deployed artifact preserves the custom domain.

## Current scope

This first pass intentionally keeps the app plain:

- two starter prerendered routes: `/` and `/about`
- no browser-only globals in the initial components
- no live request-time SSR server in production

GitHub Pages serves prerendered Angular output, not a runtime Node SSR process.
