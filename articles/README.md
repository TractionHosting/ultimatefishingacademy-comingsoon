# UFA Articles — v1

Static pages for the Vercel site that serves ultimatefishingacademy.com (no build step).

## Add to the site
Copy into the project root (next to index.html):
- `articles/` — whole folder
- `robots.txt`, `sitemap.xml`, `llms.txt` — merge with any existing copies

URLs: `/articles/` and `/articles/how-to-keep-snapper-fresh/`

## Before launch
1. **Brevo** — paste your Brevo form's action URL into `articles/assets/articles.js` (`UFA_BREVO_ACTION`).
   Brevo › Contacts › Forms › your form › Share › Embed › the `action="https://….sibforms.com/serve/…"` value.
2. **Links** in both HTML files (search for these): Free Lessons `/#free-lessons`, Get the Academy `/#buy`,
   About Matt `/#matt`, UFTV `ultimatefishingtv.uscreen.io` (swap to ultimatefishing.tv when live).
3. **Matt's headshot** — replace the `hero_collage.jpg` avatar URL with a square headshot.
4. **Article content** — replace every `[bracketed]` placeholder (title, summary, takeaways, sections, FAQ, module name).
   The FAQ text also lives in the JSON-LD block in `<head>` — keep them identical.
5. **Video** — set the Bunny Stream embed URL (`iframe.mediadelivery.net/embed/...`) in place of the poster.
6. **Delete the `noindex` line** in both pages' `<head>` so Google/AI can index them.
7. If you rename the article folder (slug), update: index.html links + JSON-LD, sitemap.xml, llms.txt, canonical/og:url.

## Adding the next article
Duplicate the article folder, rename it, swap content, then add a card to `/articles/index.html`,
a `<url>` to sitemap.xml and a line to llms.txt.
