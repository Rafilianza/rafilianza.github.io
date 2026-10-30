---
name: Muhammad Dhiaz Rafilianza Portfolio
description: An editorial portfolio for visual AI work, with a personal introduction and prominent evidence.
colors:
  paper: "#000000"
  surface: "#111110"
  ink: "#f4f1e9"
  muted: "#aaa8a3"
  accent: "#ff8a3d"
  accent-hover: "#ffb17d"
  rule: "#30302e"
  white: "#ffffff"
  topic-vision: "#8ec8ff"
  topic-generative: "#c4adff"
  topic-research: "#f1a6c9"
  topic-analytics: "#8cdbb5"
  topic-data: "#e7c66e"
typography:
  display:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(3rem, 6.8vw, 5.75rem)"
    fontWeight: 400
  headline:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 400
  body:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
layout:
  pageWidth: "1120px"
  readingWidth: "65ch"
---

# Design System: Muhammad Dhiaz Rafilianza

## Direction

The user selected the Editorial concept and requested a site-wide overhaul on
31 October 2026. This supersedes the earlier Home-only black/orange preview and
the graphite/blue styling retained on inner pages. One identity now governs
Home, Projects, About, the full CV, and case studies.

The primary audience is AI and computer vision hiring teams. The experience
should make Dhiaz's focus and industry background easy to understand, show
actual work prominently, and invite a deeper reading of technical decisions.
Regina Castro's portfolio informed the approachable overview-to-detail
structure; the imagery, content, and visual composition remain Dhiaz's own.

Use a pure-black canvas, warm off-white text, and a warm orange accent.
Newsreader supplies expressive display headings and selective italic emphasis;
Archivo keeps body copy, navigation, captions, and controls practical. Both
families are served locally through the existing Fontsource dependencies.

Open layouts, strong changes in type scale, thin rules, and generous imagery
create the hierarchy. Use surfaces only where they clarify a group or control.
Avoid defaulting every section to a filled card, decorative gradients, glass,
arbitrary colour assignments, or motion that delays reading. Topic labels use
the fixed semantic mapping below, consistently across every page.

The user will update project content later. This design work preserves the
existing project Markdown, original figures, source links, and factual limits.
Do not add speculative projects, a fabricated portrait, invented personal
interests, availability claims, or unsupported results to fill the layout.

## Shared tokens and composition

`src/styles/tokens.css` supplies the palette, fonts, spacing, type scales, and
motion values. `src/styles/global.css` supplies shared document and prose
styles. Component styles may refine a composition without introducing a
competing palette or font system. Keep this document aligned with those files.
Existing tool configuration is separate from the site's source of truth.

- `paper` is the page canvas; `surface` is a quiet supporting background.
- `ink` is primary text; `muted` carries secondary context and captions.
- `accent` identifies actions, active controls, focus, and selective emphasis.
- `accent-hover` supplies brief control feedback; `rule` separates sections.
- `white` preserves the original exported backgrounds of saved figures.

### Topic labels

Use the shared `TopicLabel.astro` for compact noninteractive labels. The same
label must receive the same colour wherever it appears; never cycle colours
by position, page, or list order. Preserve the black/off-white foundation and
orange actions while using the following topic mapping:

| Topic family | Text colour |
| --- | --- |
| Vision and machine learning | Soft blue `#8ec8ff` |
| Diffusion and generative models | Lavender `#c4adff` |
| Research | Rose `#f1a6c9` |
| Experiments and analytics | Mint `#8cdbb5` |
| Data and tools | Gold `#e7c66e` |
| Unknown labels | Neutral grey |

Apply this treatment to Home's focus and experience/education topics, About's
interests, project and case-study technology labels, and CV skills. Use tinted
backgrounds and borders, readable text, and natural wrapping. These labels are
descriptive text, not buttons, filters, or navigation. Colour supplements the
words and does not imply a proficiency rating or an employment status.

### Responsive composition

All routes share a maximum content width of 1120px with fluid side gutters.
Reading text stays within a comfortable measure, usually at most 65ch. Large
headlines wrap naturally and reduce on smaller screens; never force a factual
title onto one line or clip it to preserve a composition. Layouts reflow into
one column when adjacent content would become cramped.

The site remains a dark theme without a theme switch. Colour must not carry
meaning alone. Preserve readable contrast, visible keyboard focus, normal
scrolling, browser zoom, and touch targets of at least 44px for navigation and
image-view controls. Hover feedback is brief; reduced motion removes
transitions. Essential content must not depend on a reveal or animation.

## Page hierarchy

### Home

The editorial opening, “How models see. How they imagine.”, introduces the
subject alongside the existing biography from `homeIntroduction`. The next
section presents the first sorted project as a static visual preview. Keep
its purpose, intact image, supported finding, and case-study link together.

Work Experience follows the featured project and shows every entry in the
profile's `experience` section. Education follows it and shows every entry in
`education`. Preserve the source order within each section; the current profile
contains four work entries and two education entries. `JourneySummary.astro`
supplies both sections through the shared `CvEntries.astro` component.

Titles, organisations, dates, existing short summaries, and optional verified
`journeyTopics` provide compact context. Detailed duties and bullet points
remain on the full CV. `journeyOrder` is accepted for compatibility and no
longer controls homepage inclusion or sorting. An About introduction offers a
route to more personal context, followed by the shared contact footer.

### Projects

Use static previews from the same project content entries as Home and the case
studies. Purpose, a supported finding, optional confirmed contribution, and
technologies help readers choose work. Do not place saved-view controls or a
workflow in a listing. A single real project is a complete collection; missing
images receive a deliberate text-only composition.

The first optional project tag acts as a category above the title. Both Home
and listing previews display a supplied image caption. The cover is preferred;
the first saved comparison view is the fallback when a cover is absent.

### About

Give About a distinct role: explain Dhiaz's background and interests through
the shared profile, with confirmed mentoring and team context. Link to the
full CV for the complete chronology. Do not repeat the whole homepage or turn
an unsupplied hobby or photo into biographical content.

### Full CV

Keep the full CV readable as HTML with ordinary section navigation and the
unchanged original PDF download. Use `CvEntries.astro` for the detailed
entries, showing available dates, organisations, locations, summaries, and
responsibilities. A desktop section index may remain sticky; it must become a
normal wrapping list on narrow screens. The page scrolls naturally.

### Case studies

Lead with the project title and purpose, then make the primary visual result
available early. Keep the finding and evidence limitation close to the figure
rather than building a large block of preliminary text. Optional date and
confirmed contribution remain visible when supplied. Section links are
generated from the real Markdown headings.

The short workflow orients readers before the deeper narrative. Preserve the
existing results, approach, limitations, lessons, and source links. Give
supporting figures space beside the explanation they support. Original
project copy remains editable through its Markdown entry.

## Navigation and contact

Home (`/`), Projects (`/projects/`), and About (`/about/`) remain real page links.
Use consistent navigation across all routes, with a visible active state and
`aria-current`. Projects stays active on `/projects/<slug>/`; About stays
active on `/about/cv/`. Provide clear access to the CV and a Back to Projects
route within each case study.

Direct loading, refreshing, and browser Back/Forward must display the correct
page without requiring a visit to Home. Keep all primary destinations usable
on phones. Do not replace the site with JavaScript-only tabs or a fixed-height
application shell.

The shared footer gives a direct contact invitation and available email,
LinkedIn, GitHub, and CV links. Read profile contact values from the shared
entry. Omit unavailable links instead of rendering placeholder actions.

## Evidence and image handling

The saved-image viewer belongs only on case studies. Its native radio fieldset
is labelled **Saved image view**. Input, Mask overlay, and Annotated remain
factual views of the first project's saved output, with Mask overlay initially
selected. View switching is immediate. Without JavaScript, hide the controls
and show every figure in document order.

Keep full-image links for small-label inspection. These open the original
figure in the same tab, and browser Back returns to the case. The viewer must
synchronise its visible image with a browser-restored radio selection.

Astro generates responsive WebP display derivatives for previews, saved views,
covers, and galleries. Previews use widths up to 1400px, and saved views and
case covers use widths up to 1600px, without enlarging a smaller source. Retain
the original files and their full-image links. Preserve whole figures,
aspect ratios, margins, annotations, colours, and mistakes; use containment
rather than a crop. Do not imply pixel alignment through a wipe when saved
canvas sizes or margins differ. Do not retouch outputs or hide failure cases.

Narrative images belong beside their findings in Markdown. Do not duplicate
those figures in the optional end gallery. A concise `finding` states what the
evidence shows; a `limitation` states what it does not establish. Missing
optional fields produce no empty labels. Use `role` only for confirmed personal
contributions. The first project's code authorship remains unconfirmed.

## Maintenance and verification

- Keep one Markdown source per project and a shared profile for biography,
  contact, Work Experience, Education, and the full CV.
- Replace the separate PDF deliberately when CV content changes; editing the
  profile does not regenerate it.
- Preserve expected December 2026 graduation, overlapping employment dates,
  undated entries, source attribution, and all recorded evidence boundaries.
- Distinguish individual contribution from pretrained models and libraries.
- Do not invent benchmarks, testimonials, projects, or links.
- Check desktop and narrow layouts, keyboard focus, reduced motion, readable
  no-JavaScript content, original-image access, and control behaviour.
- Check direct page and CV URLs, refresh and Back/Forward, active navigation,
  image paths, the PDF download, and production draft exclusion.
- Run `npm run check` and `npm run build` after relevant changes. Record actual
  results separately; this checklist does not assert that a future edit passed.
- Keep work local until publishing is explicitly requested. Do not commit,
  push, run the manual deployment workflow, or change account settings merely
  because a local design is complete.
