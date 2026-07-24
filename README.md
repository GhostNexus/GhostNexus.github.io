# Everleigh Brouse — Acting Portfolio

A fast, mobile-first, accessible acting portfolio built with plain HTML, CSS, and
JavaScript (no framework, no build step). Hosted free on GitHub Pages.

**Live site:** https://everleighbrouse.com · **Temporary URL:** https://ghostnexus.github.io

---

## How to update the site

Everything is plain HTML — you can edit any page directly on GitHub (pencil icon)
or in any text editor, then commit. No build tools required.

### Common edits

| I want to… | Edit this |
|---|---|
| Change the bio | `index.html` (short) and `about.html` (full) |
| Add a headshot | Put the image in `images/`, then swap a `.ph` placeholder in `headshots.html` for `<img src="/images/your-photo.jpg" alt="…">` |
| Add resume credits | `resume.html` (web) **and** replace `assets/everleigh-brouse-resume.pdf` (download) |
| Embed the demo reel | In `reel.html`, replace the placeholder block with the YouTube `<iframe>` (instructions are in the comment there) |
| Add gallery photos | Drop images in `images/`, swap the `.ph` cells in `gallery.html` for `<img>` tags |
| Turn on the contact form | Create a free form at [formspree.io](https://formspree.io) and paste your form ID into `contact.html` |
| Change colors/fonts | The design tokens (`--gold`, fonts, etc.) live at the top of `css/styles.css` |

### Replacing a placeholder image with a real photo

1. Add the photo to the `images/` folder (keep files reasonably sized — ~1600px wide max).
2. Find the matching `<div class="ph …">…</div>` block on the page.
3. Replace it with, e.g.:
   ```html
   <img src="/images/headshot-theatrical.jpg" alt="Everleigh Brouse theatrical headshot" loading="lazy" width="800" height="1000">
   ```
4. Commit. GitHub Pages redeploys automatically in ~1 minute.

## Structure

```
index.html          Home
about.html          About
headshots.html      Headshots
resume.html         Resume (links to the PDF)
reel.html           Demo Reel (YouTube)
gallery.html        Gallery
contact.html        Contact
404.html            Not-found page
css/styles.css      All styling + design tokens
js/main.js          Mobile nav, sticky header, scroll reveals
images/             Photos + icons + social share image
assets/             Downloadable resume PDF
sitemap.xml, robots.txt, site.webmanifest, favicon.svg
```

## Notes

- Update the social share image at `images/og-image.jpg` (1200×630) with a real photo when available.
- The `Person` structured data in `index.html` helps search engines; add real profile links to its `sameAs` list.
