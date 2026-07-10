# Your Portfolio — Setup Notes

Everything below is what I changed to turn the developerFolio template into
*your* site, plus the handful of things only you can finish.

## What's already done

- `src/portfolio.js` — fully rewritten with your real details: name, tagline,
  education (ITS Engineering College, AKTU), work experience (J.P. Morgan
  simulation, Deloitte Australia internship), your 3 GitHub projects (AI
  Resume Analyzer, SROS, Sales Insights Analytics) with live GitHub links,
  your 5 certifications, skills, tech stack, and contact info.
- `public/resume.pdf` — your uploaded resume, wired up to the "Download
  Resume" button.
- `public/index.html` — page title / SEO meta tags updated to your name.
- `public/manifest.json` — app name updated.
- `package.json` — `homepage` set to
  `https://adityabansal-tech.github.io/portfolio` (see step 2 below).
- `.env` — pre-filled with `GITHUB_USERNAME=adityabansal-tech` so the
  "GitHub Pinned Projects" section can auto-pull from your GitHub profile.
- Sections with no data provided (Blogs, Talks, Podcast, Twitter) are turned
  off (`display: false`) rather than left with placeholder/fake content.
  Flip them to `true` in `src/portfolio.js` any time you have real content.
- Company/certification logos are pulled live from Clearbit's public logo
  API, and project thumbnails use GitHub's auto-generated social-preview
  images for your three repos — so nothing is broken/missing, but feel free
  to swap in your own images later (drop a file in `src/assets/images/` and
  `require()` it, same as the original template).

## 3 things you need to do before it's fully live

1. **Add a GitHub token** (for the pinned-projects/GitHub-stats section):
   - Go to https://github.com/settings/tokens → "Generate new token
     (classic)" → no scopes needed for public data → copy it.
   - Paste it into `.env`, replacing `YOUR GITHUB TOKEN HERE`.
   - Don't commit `.env` to a public repo (it's already in `.gitignore`).

2. **Create the GitHub repo you'll deploy to**, e.g. name it `portfolio`.
   If you use a different repo name, update the `homepage` field in
   `package.json` to match:
   `https://adityabansal-tech.github.io/<your-repo-name>`

3. **Add a profile photo** (optional but recommended) — the template's
   illustration is an animated SVG avatar by default (`illustration.animated
   = true` in `portfolio.js`), so this is optional, not required.

## How to run it locally

```bash
npm install
npm start        # opens http://localhost:3000
```

## How to deploy (GitHub Pages — built into this template)

```bash
npm run deploy
```

This uses the `gh-pages` package (already in `package.json`) to build and
push to a `gh-pages` branch, publishing at the `homepage` URL above.

## Things worth double-checking / personalizing further

- `techStack` proficiency percentages (85% / 80% / 65%) are my estimate
  from your resume — adjust to your own judgment.
- `isHireable` is set to `true` (shown as "Open for opportunities" on your
  GitHub-stats card) — set to `false` in `portfolio.js` if that's not
  accurate right now.
- I linked your 3 GitHub repos directly as project cards; if any of them
  have a live demo URL (not just the repo), add a second `footerLink` entry
  with `{ name: "Live Demo", url: "..." }`.
