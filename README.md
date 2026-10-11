# Supabase data viewer

A static HTML page served by Vercel with a small serverless function that reads
the Supabase project URL and anon key from environment variables.

## Put the project on GitHub and deploy it with Vercel

You will use Git to save the project, GitHub to store it online, and Vercel to
publish it as a website. You do not need to install any packages or run a
build for this project.

### 1. Create a Git repository on your computer

Open a terminal in this project folder (`flights-client`) and run:

```sh
git init
git add index.html api/config.js README.md .gitignore .vercelignore
git status
```

Check the `git status` output. It should list the five project files above;
it should **not** list `secrets.txt` or any `.env` file. If it looks right,
save the files in Git:

```sh
git commit -m "Set up Supabase data viewer for Vercel"
```

If Git asks you to set your name and email, follow its instructions, then run
the commit command again.

### 2. Create a GitHub repository and push the project

1. Sign in to [GitHub](https://github.com).
2. Use **New repository** to create a repository, for example named
   `flights-client`.
3. For the simplest setup, create it as an empty repository. Do not initialize
   it with a README, license, or `.gitignore` (this project already has a
   README and `.gitignore`).
4. GitHub will show a repository URL. Copy the HTTPS URL, which looks like
   `https://github.com/YOUR-USERNAME/flights-client.git`.
5. Back in the project terminal, replace the example URL below with the URL you
   copied, then run:

```sh
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/flights-client.git
git push -u origin main
```

If GitHub asks you to sign in, complete the sign-in prompt. The push uploads
the committed project files; it does not upload ignored `secrets.txt` or
`.env` files.

### 3. Import the GitHub repository into Vercel

1. Sign in to [Vercel](https://vercel.com).
2. Choose **Add New...** → **Project**.
3. Connect GitHub if prompted, find `flights-client`, and choose **Import**.
4. Leave the framework/build settings at their defaults (or choose **Other**).
   Leave the build command and output directory empty; this project is plain
   HTML with a Vercel serverless function and has no build step.
5. Before deploying, expand **Environment Variables** and add:
   - Name: `SUPABASE_URL`; Value: your Supabase project URL.
   - Name: `SUPABASE_ANON_KEY`; Value: your Supabase anon key (or publishable
     key).
   Select the environments you want (at least **Production**), then choose
   **Deploy**.
6. When Vercel finishes, open the deployment URL it shows you.

When you change files later, commit and push them to GitHub; Vercel will
automatically create a new deployment. If you change environment variables in
Vercel, redeploy for the changes to take effect.

For local development with the Vercel CLI, create a local `.env` file with
those same variable names and run `vercel dev`. Do not commit or upload that
file.

`SUPABASE_ANON_KEY` (or a Supabase publishable key) is intended for browser use
and will be visible to visitors. Protect table data with Supabase Row Level
Security and appropriate policies. Never put a Supabase service-role or secret
key in these variables or return one to the browser. The local `secrets.txt`
file is excluded from Git and Vercel; do not add it to the repository.
