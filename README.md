# RIPK1 Kinase Activity · Necrosome Architecture

Interactive research website describing how RIPK1 kinase activity controls necrosome architecture and RIPK3–MLKL signaling output.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Static build

```bash
npm run build
```

The static export is written to `out/`. When `NEXT_PUBLIC_BASE_PATH=/ripk1_website` is set, all application and public-asset URLs are prepared for this repository's GitHub Pages subpath.

## GitHub Pages deployment

Every push to `main` triggers [`.github/workflows/pages.yml`](.github/workflows/pages.yml), builds the static export, and deploys it to:

<https://weslin8817.github.io/ripk1_website/>

Before the first deployment, open **Settings → Pages → Build and deployment** in GitHub and select **GitHub Actions** as the source.

## Pending figure assets

The source currently references Figures 3–7, but those files are not present in `public/`. The site uses `public/figure-placeholder.svg` for those sections until the final figure assets are added.
