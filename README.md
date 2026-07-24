# Everleigh Brouse — Acting Portfolio

A fast, mobile-first, accessible acting portfolio built with plain HTML, CSS, and
JavaScript (no framework, no build step). Hosted free on GitHub Pages.

**Live site:** https://everleighbrouse.com · **Temporary URL:** https://ghostnexus.github.io

> All files live at the top level (a "flat" layout) — this keeps GitHub's web
> uploader happy and makes updates simple: to add a photo, just upload the image
> and point to it by its file name.

---

## How to update the site

Everything is plain HTML — edit any page directly on GitHub (pencil icon) or in a
text editor, then commit. No build tools required.

| I want to… | Do this |
|---|---|
| Change the bio | Edit `index.html` (short) and `about.html` (full) |
| Add a headshot | Upload the photo to the repo, then in `headshots.html` swap a `.ph` placeholder for `<img src="/your-photo.jpg" alt="…">` |
| Add resume credits | Edit `resume.html` (web) **and** replace `everleigh-brouse-resume.pdf` (download) |
| Embed the demo reel | In `reel.html`, replace the placeholder block with the YouTube `<iframe>` (instructions are in the comment there) |
| Add gallery photos | Upload images, then swap the `.ph` cells in `gallery.html` for `<img>` tags |
| Turn on the contact form | Create a free form at [formspree.io](https://formspree.io) and paste your form ID into `contact.html` |
| Change colors/fonts | The design tokens (`--gold`, fonts, etc.) live at the top of `styles.css` |

### Replacing a placeholder with a real photo

1. Upload the photo to the repo (keep files reasonably sized — ~1600px wide max).
2. Find the matching `<div class="ph …">…</div>` block on the page.
3. Replace it with, e.g.:
   ```html
   <img src="/headshot-theatrical.jpg" alt="Everleigh Brouse theatrical headshot" loading="lazy" width="800" height="1000">
   ```
4. Commit. GitHub Pages redeploys automatically in about a minute.

## Files

```
index.html      Home            styles.css              All styling + design tokens
about.html      About           main.js                 Mobile nav, sticky header, reveals
headshots.html  Headshots       favicon.svg             Site icon
resume.html     Resume          apple-touch-icon.png    iOS icon
reel.html       Demo Reel       icon-192.png / 512.png  App icons
gallery.html    Gallery         og-image.jpg            Social share preview (1200×630)
contact.html    Contact         everleigh-brouse-resume.pdf   Downloadable resume
404.html        Not-found page  sitemap.xml, robots.txt, site.webmanifest
```

## Notes

- Update `og-image.jpg` (1200×630) with a real photo when available — it's the preview shown when the site is shared.
- The `Person` structured data in `index.html` helps search engines; add real profile links (Instagram, IMDb, etc.) to its `sameAs` list as they exist.
