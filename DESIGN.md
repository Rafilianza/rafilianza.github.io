---
name: Muhammad Dhiaz Rafilianza Portfolio
description: A dark, image-led research journal for practical experiments in machine learning.
colors:
  paper: "#151b18"
  surface: "#202a24"
  ink: "#f1f4ed"
  muted: "#b1bdb4"
  pine: "#afd7bc"
  pine-hover: "#c7e5d0"
  white: "#ffffff"
typography:
  display:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(3rem, 6.8vw, 6rem)"
    fontWeight: 450
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 3.5rem)"
    fontWeight: 450
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 450
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.65
  control:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 550
    lineHeight: 1.65
  step-title:
    fontFamily: "'Archivo Variable', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-0.015em"
rounded:
  control: "0.25rem"
spacing:
  "1": "0.5rem"
  "2": "1rem"
  "3": "1.5rem"
  "4": "2rem"
  "5": "3rem"
  "6": "4.5rem"
  "7": "7rem"
  page-gutter: "clamp(1.25rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.pine-hover}"
    textColor: "{colors.paper}"
  button-primary-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  text-link:
    textColor: "{colors.ink}"
  site-navigation:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.3rem"
  site-navigation-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.4rem"
  site-navigation-selected:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
  saved-view-group:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.25rem"
  saved-view:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.5rem 0.95rem"
  saved-view-selected:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
  saved-view-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine}"
  draft-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "0.3rem 0.75rem"
  workflow-step-title:
    textColor: "{colors.ink}"
    typography: "{typography.step-title}"
  image-stage:
    backgroundColor: "{colors.white}"
  source-panel:
    backgroundColor: "{colors.surface}"
    padding: "{spacing.5}"
---

# Design System: Muhammad Dhiaz Rafilianza

## Overview

**Creative North Star: "The Research Journal"**

The dark research journal pairs calm editorial typography with real
experimental imagery.
Visitors should understand the purpose and visible result quickly, then choose
how deeply to read. The interface frames the work with spacious composition,
short explanations, and direct navigation.

Each page is a normal scrolling document. It uses static reading, native controls,
and modest state feedback. The colorful saved outputs provide visual variety;
the surrounding interface stays quiet. Its identity comes from the relationship
between serif headlines, practical sans-serif text, and unaltered evidence.

**Key Characteristics:**

- Image-led explanation with a short workflow before detailed prose.
- Charcoal surfaces, soft white text, and a restrained mint accent.
- Serif headings and readable sans-serif body text.
- Full saved figures, honest captions, and visible limitations.
- Flat surfaces, normal scrolling, and familiar controls.

The frontmatter records the implemented design primitives. Keep it synchronized
with `src/styles/tokens.css` and observed component styles when changing the
system. `.impeccable/design.json` holds motion, breakpoint metadata, and component
previews that the frontmatter schema cannot express.

## Colors

The palette uses green-tinted charcoal, soft white, and pale mint, leaving
saturated model output as the strongest color on the page. Existing token names
remain stable: `paper` is the dark page canvas and `ink` is the light text.

### Primary

- **Pale Mint** marks the main project link, selected saved view, meaningful links,
  text selection, and keyboard focus.
- **Light Mint** is the lighter hover state for the primary action.

### Neutral

- **Charcoal Paper** is the page background and dark text on selected controls.
- **Forest Surface** groups the About interests, source panel, workflow, navigation, saved-view controls,
  and local draft status without a surrounding card border.
- **Soft White Ink** carries headings and primary text.
- **Muted Sage** carries captions, secondary explanations, and metadata.
- **White** is the image-stage background, preserving exported figure margins.

**The Evidence Color Rule.** Interface colors frame the results; they do not
recolor or cosmetically improve the saved images.

This is a dark theme with no theme switch. Add another theme only as a deliberate
design change with separately checked contrast and image framing.

## Typography

**Display Font:** Newsreader Variable, with Georgia and serif fallbacks.
**Body Font:** Archivo Variable, with Arial and sans-serif fallbacks.

Both fonts are served locally through their Fontsource packages. Their licenses
are retained in `public/fonts/newsreader-OFL.txt` and
`public/fonts/archivo-OFL.txt`. Newsreader
gives headings an editorial character; Archivo makes labels, model names, and
explanations easy to read. Monospace belongs to code examples rather than a
decorative technical identity.

The frontmatter specifies the common display, headline, title, body, lead,
caption, label, control, and workflow-title roles. Headings use balanced wrapping
and restrained negative tracking. Prose is limited to the reading measure
(`68ch`); the mobile body size becomes `1rem` at the compact-text breakpoint.

Some surfaces adapt the common scale: homepage identity, project titles, About
headings, and prose section headings have their own observed fluid sizes. Keep
these adaptations close to their component instead of inventing a second type
system. Long, factual project titles may wrap beyond two lines when needed;
readability takes priority over forcing a uniform headline height.

## Layout

The page container is centered with a maximum width (`1440px`) and fluid gutters
from the spacing tokens. The spacing scale separates related content with small
gaps and gives project sections substantially more breathing room.

Home (`/`), Projects (`/projects/`), and About (`/about/`) are separate pages with
visible navigation. Home keeps the
personal introduction and the first sorted project's compact image preview.
The Projects page contains every visible project with its evidence viewer and short workflow.
About contains the personal introduction and interests. Case studies remain
directly linkable `/projects/<project-slug>/` pages with deeper explanations.

Project previews use an asymmetric desktop composition: a narrower text column
beside a wider evidence image. They become one column at `850px`, ordered as
introduction, evidence image, then details and the project link. Short workflow
steps on Projects follow the project and wrap according to the available width;
their minimum column size is `230px`. Workflow entries are content, not cards or
decorative numbered labels.

The case study places its main evidence view before the detailed article. Its
viewer is limited to `1100px`. The article has a section-navigation column and
the reading column; these stack at `750px`. Gallery figures use two columns,
then one column at `720px`. At the same width the main navigation moves to its
own full-width row beneath the wordmark and GitHub link. Typography and controls
tighten at `640px` and `440px` where their actual components require it.

The header and case-study navigation remain in normal document flow. Preserve
ordinary vertical scrolling, zoom, and reading order. Mobile does not require a
drawer, a bottom navigation bar, or a separate application shell.

## Elevation & Depth

The system is flat. It uses no shadows, blur, glass, or gradients. Whitespace,
type hierarchy, and the Forest Surface background distinguish groups. Keyboard
focus outlines communicate interaction state; they are not elevation effects.

## Shapes

Evidence stages and section surfaces are rectangular. Controls have the small
control radius from the frontmatter. Avoid turning every paragraph or project
into a rounded card. Use underlines for text links and table borders only where
they clarify tabular structure; decorative dividing rules are unnecessary.

Full figures sit within their stages using `object-fit: contain`. The saved-view
stage uses a `3 / 2` aspect ratio and gallery stages use `4 / 3`; these frame the
entire image rather than crop it. Retain exported whitespace and model errors.

## Components

### Primary action and text links

The main action is a pale mint rectangle with dark text and a minimum height (`48px`).
Its background changes on hover and press; the feedback duration is `160ms`
with `cubic-bezier(0.23, 1, 0.32, 1)`. It does not translate or scale. Text links
use underlines or a small arrow and a comfortable target height (`44px`).

Keyboard focus is a mint outline (`3px`) offset from the control (`5px`). The
saved-view labels have their own closer offset (`3px`). Reduced motion removes
transitions and animation. Essential content never waits for a reveal.

### Navigation

The serif wordmark links home. Home, Projects, and About are real page links grouped
on Forest Surface, with the active destination shown in mint and dark text.
They resemble a compact tab strip visually but retain link semantics and direct
URLs. Projects stays active on case studies. GitHub is a separate link.

**The Page Navigation Rule.** Every page has a real URL that loads directly and
survives a refresh. Browser Back and Forward must restore the correct page and
active navigation, with Projects active on case studies.

All three destinations remain visible on phones; the navigation occupies a
second row instead of hiding behind a menu. At `720px` and below, links share
the row equally with horizontal padding (`0.75rem`). Case-study section links use the
article's real headings. The skip link appears on focus and moves directly to
the main content.

### Project preview

The preview uses the entry's title, summary, technologies, and shared image
content. Home uses the compact cover preview of the first sorted entry, falling
back to its first comparison image when there is no cover. Projects uses the
full preview and available saved-view selector for every entry. The
visual has more space than the text on desktop. Without an image,
the preview becomes a readable single-column composition. Optional metadata
does not leave an empty box or label.

A single real project can fill the portfolio without filler cards. The saved
still images are the visual material; no footage, live model session, or motion
quota is implied.

### Saved-view selector

This is a native radio fieldset labeled **Saved image view**, not an ARIA tab
widget. The first project's choices are **Input**, **Mask overlay**, and
**Annotated**, with Mask overlay selected initially on Projects and the case study.
Other projects supply their own factual labels through content.

Each label has a minimum target height (`44px`). Checked state uses mint fill
and dark text. Keyboard focus remains visible around the selected label;
unselected hover feedback is gated to fine pointers that can hover. Image
switching is immediate, with no wipe, crossfade, or implied live inference.

The image stage contains each complete saved figure. Figures have descriptions,
captions, and explicit dimensions. JavaScript enhances the viewer by exposing
the radio controls and showing one figure at a time. Without JavaScript, the
controls stay hidden and all figures remain in document order.

**The Saved Evidence Rule.** Compare intact corresponding outputs. Different
canvas margins do not justify a pixel-aligned wipe, a fabricated intermediate
frame, or a cosmetic correction.

### Workflow steps

A semantic ordered list presents brief stage titles and one-sentence
descriptions. List markers are visually hidden; spacing and source order carry
the sequence. The same `steps` entry data supplies Projects and the case study.
The full method remains available in the article.

### Gallery and source panel

The gallery preserves full images and uses captions to explain observations and
limitations. The source panel groups only available, verified links on Forest
Surface. A local draft label identifies unfinished entries; it is a status
label, not a clickable chip.

## Do's and Don'ts

### Do:

- Do lead with actual project imagery and a concise explanation.
- Do reuse the shared tokens, layouts, and content-driven components.
- Do preserve complete evidence images, captions, and visible limitations.
- Do keep normal scrolling, text selection, zoom, and keyboard focus.
- Do make essential content readable without JavaScript or interaction.
- Do let long titles, links, and controls reflow on narrow screens.

### Don't:

- Don't invent metrics, testimonials, projects, or decorative status signals.
- Don't crop away errors, recolor masks, or fabricate model outputs.
- Don't add motion to the evidence, simulated inference, or scroll reveals.
- Don't add glass, gradients, shadows, artificial numbering, or decorative rules.
- Don't use monospace as decoration outside code examples.
- Don't create empty cards, headings, or buttons for missing optional content.
