# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4d42d3f7-387b-4c93-8599-dcf90ca68dd9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4d42d3f7-387b-4c93-8599-dcf90ca68dd9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4d42d3f7-387b-4c93-8599-dcf90ca68dd9) and click on Share -> Publish.

## Deploy to GitHub Pages (jeevak-hospital-website)

This repo is configured to deploy to GitHub Pages at `https://nirnimes.github.io/jeevak-hospital-website`.

Steps:

1. Ensure your repository is named `jeevak-hospital-website` under the `nirnimes` account.
2. Push to the `main` branch. A workflow `.github/workflows/deploy.yml` builds the app and publishes `dist/` to Pages.
3. In GitHub, go to Settings → Pages and set Source to "GitHub Actions" if not already.

Local preview:

```sh
npm ci
npm run build
npm run preview
```

Notes:
- Vite `base` is set to `/jeevak-hospital-website/` for correct asset paths on Pages.
- `public/404.html` redirects unknown routes back to the SPA entry.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
