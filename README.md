# Muhammad Dhiaz Rafilianza — portfolio

A personal portfolio about deep learning, computer vision, and diffusion models.
The first case study is **Automatic Object Discovery and Segmentation**.

The website uses Astro to turn project Markdown files into an editorial homepage,
a Projects listing, and individual case-study pages. A shared CV entry supplies
Home's My Journey summary, the About biography, and a full CV page. Static
means the published site serves ordinary
HTML, CSS, images, and a small amount of JavaScript; it does not need a running
application server or a model backend.

- Website: [rafilianza.github.io](https://rafilianza.github.io)
- Repository: [Rafilianza/rafilianza.github.io](https://github.com/Rafilianza/rafilianza.github.io)
- First project's source: [grounding-sam2-extraction](https://github.com/Rafilianza/grounding-sam2-extraction)

## Start locally

Use **Node.js 24**. Astro requires Node.js **22.22.0 or later**; use a supported
even-numbered release. Check your version with `node --version`.

Open a terminal in this website repository, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. Keep the terminal running while editing;
the browser updates when you save. Press `Ctrl+C` to stop the server.

After cloning a version of the repository that includes `package-lock.json`,
use `npm ci` instead of `npm install` to install the exact recorded dependency
versions. Run installation again only when dependencies change.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development, including clearly marked draft projects. |
| `npm run check` | Check Astro components, TypeScript, and content fields. |
| `npm run build` | Generate the production website in `dist/`, excluding drafts. |
| `npm run preview` | Serve the most recent production build for a final local check. |

Run `npm run build` before `npm run preview`. Preview does not rebuild saved
changes automatically. Do not edit `dist/`; the next build replaces it.

## Where things live

```text
src/
  content.config.ts              Allowed project and profile fields
  content/projects/
    <project-slug>/
      index.md                   One project's content and settings
      images/                    That project's images
  content/profile/cv.md           Shared biography, CV entries, and skills
  components/                    Shared navigation, previews, and image views
  layouts/                       Shared page and case-study layouts
  lib/projects.ts                Shared project visibility and ordering
  pages/
    index.astro                  Home: introduction, project preview, journey, About
    about.astro                  About: background, interests, and mentoring
    about/cv.astro                Full CV with section links and PDF download
    projects/
      index.astro                Projects: static summaries of all visible projects
      [...id].astro              Generates individual project pages
  styles/
    tokens.css                   Colors, fonts, spacing, and motion values
    global.css                   Shared page and component styling
public/                          Files copied directly into the built site
  cv/muhammad-dhiaz-rafilianza.pdf Original downloadable CV
docs/project-template.md         Reusable, unpublished project example
.github/workflows/               Manual GitHub Pages deployment workflow
PRODUCT.md                       Portfolio purpose and factual content context
DESIGN.md                        Agreed visual and interaction decisions
AGENTS.md                        Guidance for future coding sessions
```

Keep the installed `.agents/`, `.claude/`, other skill directories, and
`skills-lock.json` intact. They are tools for working on the site, not published
project content.

## Add a project

The Markdown entry is the single source for its Projects preview and case-study
page. Home shows a visual preview of the first sorted project from that same
source. You do not need to add a separate card or copy the summary into another
file.

Home introduces you and one featured result. Projects helps visitors choose a
case study. Only case studies include saved-image controls and workflow steps;
their opening overview makes the main finding and limitation easy to find.

The main navigation opens separate pages: **Home** (`/`), **Projects** (`/projects/`), and
**About** (`/about/`). Each case study has its own `/projects/<slug>/` URL. Projects
stays highlighted while reading a case study. The full CV is at `/about/cv/`,
with About highlighted.

These are ordinary page links. The address bar should reflect each destination,
each URL should open directly and survive a browser refresh, and the browser's
Back and Forward buttons should move between the visited pages. Navigation must
show the matching active destination after each change.

1. Create `src/content/projects/your-project-slug/`.
2. Copy `docs/project-template.md` into that folder as `index.md`.
3. Replace the example content with facts about your project. Leave `draft: true`
   while writing.
4. Put your images in an `images/` folder beside `index.md`. Use descriptive
   filenames such as `input-street.jpg` and `segmentation-result.png`.
5. Run `npm run dev` and open Projects and the draft case study. Check its preview and
   full page; if it sorts first, check its compact Home preview too.
6. When the content is ready, set `draft: false`, then run `npm run check` and
   `npm run build`. Use `npm run preview` to inspect the production result.

For example, this complete minimal second entry can be saved as
`src/content/projects/second-project/index.md`. It stays unpublished because
`draft` is true. Replace the marked text with your own content:

```markdown
---
title: "Replace with your real project title"
slug: second-project
summary: "Replace with one factual sentence describing the project."
draft: true
featured: false
order: 2
technologies: []
tags: []
---

## Results

Describe what the available evidence demonstrates. Include measured results
only when you can explain how they were evaluated.

## Why this approach

Describe the question you investigated or the problem you tried to solve.

## My contribution

Explain what you personally built or tested, and identify the existing
models, datasets, tools, or code you used. Omit this section until confirmed.

## Approach

Describe the main steps and why you chose them.

## Limitations

Describe where the evidence falls short and what remains untested.

## Lessons learned

Explain what you learned and what you would investigate next.
```

Markdown is ordinary text with simple formatting: `##` introduces a section,
`**text**` makes text bold, and `[label](https://example.com)` creates a link.
The block between the two `---` lines is called **frontmatter**. It holds the
project settings that Astro uses to build previews and pages.

Keep the slug stable after publishing because it forms the project's URL:
`/projects/second-project/`. Use lowercase words separated by hyphens. Avoid
spaces, leading slashes, and duplicate slugs.

## Project settings

`src/content.config.ts` defines the accepted fields. This content schema catches
mistakes such as an invalid date or an image path that does not exist before
publishing.

| Field | How to use it |
| --- | --- |
| `title` | Real project title, used in both the preview and page. |
| `slug` | Stable URL name such as `automatic-object-discovery`. |
| `summary` | Short, factual description for the preview and metadata. |
| `finding` | Optional concise observation supported by your evidence; shown in previews and the case overview. |
| `limitation` | Optional main evidence boundary, shown near the case opening. |
| `draft` | `true` while writing; `false` when ready to include in production. |
| `featured` | `true` to sort this project before ordinary projects. Home shows the first sorted entry. |
| `order` | Lower numbers appear first within featured or ordinary projects. |
| `technologies` | Tools or models actually used. An empty list is fine. |
| `tags` | Optional topic metadata. The first tag appears as the category above the preview title. An empty list is fine. |
| `steps` | Optional case-study workflow, with a `title` and `description` for each step. |
| `date` | Optional project date; use `YYYY-MM-DD` when known. |
| `role` | Optional description of your personal contribution. |
| `cover` | Optional preview image, with a source path and meaningful alternative text. |
| `gallery` | Optional end-of-article gallery; prefer inline images for findings explained in the narrative. |
| `comparison` | Optional verified image views for the case-study comparison component. |
| `links` | Optional repository, notebook, demo, or publication URLs. |

Projects are sorted by **featured first, then order, then title**. Projects lists all
visible entries in this order; Home shows only the first one. Editing these
fields updates both views. A project can still appear on Home when none are
marked featured: the first entry by order and title is used.

Home and Projects use static preview images. If the cover is omitted but a
comparison exists, they use its first image. With neither a cover nor a
comparison, the preview uses a text-only composition without an empty image area.
The featured and listing variants of `ProjectPreview.astro` reuse the same entry;
they change how much context is shown, without maintaining separate project copy.
Both variants show the image caption when one is supplied. Astro generates
responsive WebP previews so the browser can choose an appropriate display size.

Drafts appear with a Draft label during local development. Production builds
exclude drafts from Home, Projects, and generated project routes. Hiding a
card alone would not hide its page, so both use the same visibility rule.

Omit unknown optional fields completely. Do not use empty strings, placeholder
URLs, invented dates, or empty headings to make an entry look finished. Start
with the working examples in `docs/project-template.md` when adding structured
gallery or comparison fields.

### Explain the workflow at a glance

Use `steps` when a short sequence helps visitors understand the approach without
reading the full article. Each item has a title and one plain-language sentence:

```yaml
steps:
  - title: Prepare the input
    description: Describe how this project prepares its input.
  - title: Inspect the result
    description: Describe what you examine in the output.
```

Replace these example steps with the project's actual workflow, or omit the
field. `WorkflowSteps.astro` displays the short sequence after the main case-study
image viewer. Home and Projects contain no workflow. Keep the detailed explanation
in an `## Approach` section in the Markdown body. The section links near the case
opening are generated from your `##` headings.

### Add images

Image paths in an entry are relative to that entry. For a file at
`images/cover.jpg`, use:

```yaml
cover:
  src: ./images/cover.jpg
  alt: "Describe the important content visible in the image."
  caption: "Explain what this image demonstrates."
```

Create the image file before adding its frontmatter path. Draft entries also
undergo content validation. Check filename capitalization: a path that works on
your Mac may fail on GitHub's case-sensitive build environment.

Alternative text describes the meaningful visual content for people who cannot
see the image. Captions explain why the figure matters. Include important
findings and limitations in the surrounding text too; tiny labels inside an
image are not an accessible explanation.

Place an image beside the result it explains using ordinary Markdown:

```md
### What the example reveals

![Describe the relevant objects and visible errors.](./images/result.webp)

Explain the observation and its limits here.
```

Avoid adding that same image to `gallery`, which would display it again at the
end. Use `gallery` for supporting images that do not need a place in the story.
The case-study viewer also provides a full-image link for inspecting small labels.
It opens in the same tab; use browser Back to return. The displayed figure stays
in sync with the saved-image selection restored by browser Back/Forward.

Preview, viewer, cover, and gallery components generate responsive display
images through Astro. The case-study image links still open the original
files, preserving full-resolution evidence. You do not need to make a separate
thumbnail by hand or change the project's image paths.

Use appropriately sized photographs and preserve evidence when preparing model
outputs. Keep original masks and annotations intact, including imperfect
results. Do not recolor, retouch, or crop away an error to improve a result's
appearance. A saved notebook output is a recorded observation, not proof that
the current notebook runs unchanged.

### Add richer content

Most projects should use Markdown and the existing layouts, gallery, and image
comparison. Add sections that help explain the work; omit irrelevant sections.

If a future project needs a special visual explanation, add a small, focused
Astro component and reuse the existing layout and design tokens. Describe the
need before introducing new dependencies.

MDX is an optional future extension for importing components directly into an
article. It is **not currently required**. To adopt it later, add the official
`@astrojs/mdx` integration, configure Astro, enable `.mdx` entries in the content
loader, and convert only entries that need it. Ordinary projects can remain
Markdown.

## Update the CV and My Journey

Edit `src/content/profile/cv.md` to update the website's biography, CV, and
My Journey summary together. Its YAML frontmatter contains `name`, `summary`,
optional `homeIntroduction`, `location`, `email`, `linkedin`, `pdf`, `sections`,
and `skills`. About uses the shared summary and links to the full CV and LinkedIn.
The shared footer also reads available contact links from this entry.
Use `homeIntroduction` for the brief homepage biography. If omitted, Home falls
back to its existing interests sentence; it does not show an empty paragraph.

Each section has an `id`, `title`, and at least one entry. Entries require an
`id` and `title`; `organisation`, `dateLabel`, `location`, `summary`, and `details`
are optional. Use `details` for the full CV's bullet points; omitting it gives an
empty list. Skills are groups with a `title` and a nonempty `items` list; the
whole `skills` field can be omitted. Keep IDs unique and stable because section
and entry links use them. IDs use lowercase letters, numbers, and hyphens.

The profile schema requires a nonempty `name` and `summary` and at least one
section. Contact fields and `pdf` are optional. When present, email and LinkedIn
must be valid addresses, and `pdf` must start with `/` and end with `.pdf`.
Dates remain plain text so expected dates and the source CV's precision survive.

Add `journeyOrder` to entries that should appear in Home's My Journey section.
`journeyOrder` must be a nonnegative whole number. `JourneySummary.astro` selects
at most three entries in ascending order and uses `CvEntries.astro` to show
their titles, available organisations, dates, short summaries, and optional `journeyTopics` after
the featured project. `journeyTopics` is a list of short, verified capability
labels; keep it to two or three useful phrases. For example:

```yaml
journeyOrder: 1
journeyTopics:
  - "A/B testing"
  - "Data pipelines"
  - "Growth analytics"
```

Omitting `journeyTopics` defaults to an empty list, with no label group rendered.
The labels appear only in Home's summary, not in the full CV's detailed entries.
Omit `journeyOrder` to keep an entry only in the full CV. The **View full CV** link
opens `/about/cv/`, where education, research, experience, leadership, and skills
remain readable without JavaScript. The full CV reuses `CvEntries.astro` in its
detailed mode to include locations, summaries, and bullet points.

Keep the Master's completion date marked **expected December 2026** until it is
confirmed. Preserve the source CV's overlapping employment dates and omit dates
for undated research or leadership entries. Do not infer project authorship from
the CV: the Automatic Object Discovery contribution is still unconfirmed.

The download is the original PDF at `public/cv/muhammad-dhiaz-rafilianza.pdf`;
editing `cv.md` does not regenerate it. When the CV changes, update the web entry
and replace the PDF separately so both versions stay consistent. The `pdf` field
uses its public URL, `/cv/muhammad-dhiaz-rafilianza.pdf`, never a private local path.

Check My Journey, About, the full CV's section links, and the PDF download after
editing. Open and refresh `/about/cv/` directly, then use Back and Forward to
confirm that About remains the active navigation item.

## Change the shared design

Edit `src/styles/tokens.css` to change shared colors, font families, spacing, or
motion values. Tokens are named values reused throughout the site; changing one
updates the places that reference it.

Edit `src/styles/global.css` for shared styling and the relevant component for
component-specific behavior. Reuse existing tokens instead of creating a
different color or spacing scale for each project. Record intentional visual
changes in `DESIGN.md` and keep portfolio context in `PRODUCT.md` consistent.

The shared Editorial design uses Newsreader for display headings and Archivo
for body text, navigation, and controls. All pages use a pure-black canvas,
warm off-white text, and orange accents, with a 1120px maximum content width.
Open project compositions, prominent intact imagery, and thin section rules
provide hierarchy. There is no separate Home-only palette.

Shared accent tokens are `--color-accent` and `--color-accent-hover`;
`--color-rule` supplies quiet dividers. Keep the purpose and visual result
together, allow headings to wrap, and let complete figures and longer
explanations scroll naturally. My Journey may display each selected entry's
existing short summary; full responsibilities remain on the CV.

Keep text contrast, visible keyboard focus, and reduced-motion behavior when
changing colors or interactions. Evidence views must remain usable by touch and
keyboard, and the essential explanation must remain available without switching
views.

Archivo and Newsreader are served locally through the existing Fontsource
dependencies. Keep their licenses at `public/fonts/archivo-OFL.txt` and
`public/fonts/newsreader-OFL.txt` with the distributed site.

## Build and GitHub Pages

The website targets the GitHub user-site repository `rafilianza.github.io`.
Astro's `site` setting is `https://rafilianza.github.io`; this repository does not
need a `/repository-name/` base path. Generated case-study pages have their own
HTML files, allowing direct navigation and refreshes at project URLs.

Before a deployment:

```sh
npm run check
npm run build
npm run preview
```

Check Home, Projects, About, the full CV, and a direct project URL in the
production preview. Open each URL directly and refresh it. Navigate from Home to Projects to a case
study, then use Back and Forward and confirm that the page and active navigation
stay correct. Projects should remain active on a case study, and About on the
full CV. Confirm that images and the CV PDF load and drafts do not appear.
These commands are instructions for verification, not a statement that every
future content change has passed them.

The GitHub Pages workflow is **manual only** (`workflow_dispatch`). A push does
not trigger deployment. No publication or account-setting change is part of
local development.

When you decide to publish:

1. Commit and push the reviewed website changes yourself, or explicitly ask for
   help with that step.
2. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions**
   as the source if it is not already configured.
3. Open the deployment workflow in **Actions**, select **Run workflow**, and
   choose the branch containing the reviewed changes.
4. After the workflow succeeds, check the public Home, Projects, and About pages, then
   open a case-study URL directly. Inspect image paths, navigation, and mobile
   layout again.

If you later move this site to a project repository or custom domain, update the
Astro URL configuration and verify asset paths before deploying.

## Common mistakes

| Symptom | What to check |
| --- | --- |
| Node or dependency error | Use Node 24, then reinstall with `npm ci` when the lockfile exists. |
| A new project is missing in production | Check `draft: false`, a unique slug, and that the file is named `index.md` inside the project collection. |
| A project appears on Projects but not Home | Home deliberately shows only the first sorted entry. Adjust `featured` and `order` if it should be the main preview. |
| A draft is visible locally | This is intentional; confirm the Draft label and use the production build to test exclusion. |
| Content validation fails | Read the reported field and entry path. Match the template's indentation and field names. |
| Image is missing or build fails | Check the relative path, extension, capitalization, and whether the file exists. |
| A link leads to the wrong project | Check the slug and link URL. Do not duplicate a previous project's slug. |
| Preview shows old content | Stop preview, run `npm run build` again, then restart `npm run preview`. |
| A public project URL returns 404 | Check the generated route, draft status, Pages source, and which workflow/branch was deployed. |
| A project feels visually inconsistent | Reuse shared components and tokens before adding custom styles. |

## Checklist for each showcase

- [ ] Use one content entry for the Projects preview, possible Home preview, and case-study page.
- [ ] Confirm the title, summary, contribution, and links are factual.
- [ ] Add a supported finding and main limitation when useful; omit unknown contributions.
- [ ] Distinguish your work from pretrained models and existing libraries.
- [ ] Add captions and alternative text; retain the original evidence.
- [ ] Put each narrative image beside its finding and avoid duplicating it in the gallery.
- [ ] Describe limitations and avoid unsupported performance claims.
- [ ] Remove unused optional fields and empty sections.
- [ ] Check desktop, small-phone, and landscape layouts.
- [ ] Test keyboard navigation, visible focus, image controls, and reduced motion.
- [ ] Check long titles, image proportions, and direct project URLs.
- [ ] Open and refresh Home, Projects, About, and a case-study URL directly.
- [ ] Check browser Back/Forward and the active page link, including Projects on case studies.
- [ ] Run content/type checks and a production build.
- [ ] Review the production preview and confirm draft visibility is correct.
- [ ] Set `draft: false` only when ready; publish only when intentionally requested.

## Reusable prompt for Codex

```text
Add a new project showcase to this portfolio.

Read AGENTS.md, PRODUCT.md, DESIGN.md, README.md, the project schema, and the
existing content/template first. Reuse the established Astro layouts,
components, design tokens, and single-entry content workflow.

Project title: [real title]
Source repository: [real URL or omit]
Available files and images: [paths]
My personal contribution: [what I built or investigated]
What I want visitors to understand: [brief explanation]

Verify claims against the available code and evidence. Ask about important
missing context instead of inventing it. Keep model outputs unaltered and
describe limitations. Do not run models or download weights just for the site.

Create the entry as a draft. Explain any new component before adding it.
Check the preview, direct route, accessibility, content validation, and
production build. Confirm that drafts stay out of production. Update the
documentation if the content workflow changes.

Keep work local. Do not modify installed skills, change account settings,
commit, push, publish, or modify the featured project's source repository
unless I explicitly request it.
```
