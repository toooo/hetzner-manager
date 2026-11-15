# Hetzner Cloud Manager

## Run locally

1. Install Node.js 22 LTS (npm is included).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite (usually `http://localhost:5173`).

Use **Demo Mode** to explore the app without a Hetzner API token. Live API mode requires a Hetzner Cloud API token.

## Other commands

- `npm run build` creates a production build in `dist`.
- `npm run preview` serves that build locally.

## Deploy to Cloudflare Pages

The GitHub Actions workflow in `.github/workflows/pages.yml` builds every push and pull request. Pushes to `main` also deploy to Cloudflare Pages.

Before the first deployment:

1. Create a Cloudflare API token with **Account / Cloudflare Pages / Edit** permission.
2. In the GitHub repository settings, add Actions repository secrets named `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`. Do not commit or share the token.
3. Push to `main` or run the **CI and Cloudflare Pages** workflow manually on `main`.

If the `hetzner-manager` Pages project does not exist in that account, the workflow creates it as a Direct Upload project with `main` as its production branch.

The production site will be available at `https://hetzner-manager.pages.dev` if that Pages project name is available in your Cloudflare account.
