# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site, Markdown content collections, TypeScript for content and component inputs, and plain CSS. GitHub Pages user site at https://rafilianza.github.io. The editorial overhaul retains this stack and the existing content workflow.

## Users

AI and computer vision hiring teams are the primary audience, as selected by the user. Visitors should quickly understand Muhammad Dhiaz Rafilianza's focus, relevant industry background, and visible work, with deeper implementation details available in dedicated case studies.

## Product Purpose

Introduce Muhammad Dhiaz Rafilianza, his progression from industry data work to visual AI research, and his interests in deep learning, computer vision, and diffusion models. Show real work and make its purpose and visual results understandable with minimal reading. Provide directly linkable case studies, verified source links, and a clear contact route.

## Brand Commitments

The user prefers a dark portfolio with a quick overview and optional detail, informed by Regina Castro's portfolio without copying its styling. Following the audit, the user selected the Editorial concept and requested a site-wide overhaul. The identity uses a pure-black canvas, warm off-white text, orange accents, Newsreader display typography with selective italic emphasis, and Archivo body typography. Open compositions and prominent real project imagery establish hierarchy. Use the same palette, navigation, and typography across all routes. Keep motion limited to control feedback.

The sitemap is Home (`/`), Projects (`/projects/`), and About (`/about/`), with a full CV at `/about/cv/`. Home contains an editorial introduction, one static featured preview, a My Journey summary of at most three selected CV entries, and an About introduction. Projects is a collection of static summaries that help visitors choose work. Case studies contain the interactive saved-image viewer, workflow, visual findings, detailed approach, and limitations at `/projects/<project-slug>/`, with evidence visible early. About adds confirmed personal context, including mentoring and team leadership, and links to the CV. The shared footer provides contact links from the profile. Main navigation visibly identifies the current page, with Projects active on case studies and About active on the CV. Use real page navigation: direct loading, refreshing, and browser Back/Forward must work for every route.

## Capabilities and Constraints

The current portfolio contains one real project: Automatic Object Discovery and Segmentation. The user will update project content later; this overhaul changes its presentation while preserving project copy, original evidence, and source links. A single Markdown entry supplies its Projects listing and case-study page. Home shows the first sorted project's preview from the same source. Optional information stays optional; no empty sections or invented links. Drafts never generate production pages. Keep work local until the user requests publishing; do not commit or push automatically. Preserve installed skills and tool configuration.

Keep biography and CV content in `src/content/profile/cv.md`. The same entry supplies About, the full HTML CV, selected My Journey entries, contact information, and the optional short `homeIntroduction`; do not maintain separate factual copies in page components. Selected journey entries may show their existing short summaries and verified `journeyTopics`, while detailed responsibilities stay on the full CV. The full CV provides section navigation and an original PDF download, with no new dependencies or client-side JavaScript required. Replace the downloadable PDF separately when updating the web entry.

## Evidence on Hand

The grounding-sam2-extraction notebook combines Qwen/Qwen2.5-VL-3B-Instruct object-name proposals, IDEA-Research/grounding-dino-tiny detections, and facebook/sam2.1-hiera-large image masks. Code implements image previews, masks, and JSON exports. Saved output images are historical examples, not proof that the current notebook runs unchanged. No quantitative accuracy benchmarks or demonstrated video pipeline. Preserve visible errors and source attribution.

## Confirmed Project Context

The user wanted to segment images before the relevant object classes were known, avoiding fine-tuning for fixed labels. Their lesson: existing tools can be combined into a pipeline suited to the problem. Exact code authorship, collaborators, and project dates remain unconfirmed. Describe the pipeline's integration and experiments without assigning individual authorship or claiming pretrained model authorship.

## Confirmed Background

The supplied CV supports education, research, employment, leadership, skills, and public contact links. Dhiaz is pursuing a Master of Artificial Intelligence at Monash University, with completion expected in December 2026. His background includes ByteDance and Tokopedia, video diffusion research, and Monash AIM leadership. Preserve the original overlapping employment dates; do not infer dates for undated research or leadership. The CV does not establish ownership of the Automatic Object Discovery code. Keep private source paths out of published content and retain the original PDF unchanged as the download.

## Product Principles

- Make the project's purpose and visible result understandable in seconds.
- Use real evidence and plain language.
- Keep detailed explanation available without forcing every visitor to read it.
- Put observed findings and limitations near the case opening, then place each
  example beside the explanation it supports.
- Add projects through content, reusing the shared design and layouts.

## Accessibility & Inclusion

Semantic HTML, visible keyboard focus, clear image descriptions and captions, accessible native controls, comfortable mobile touch targets, normal scrolling and zoom, and reduced-motion support. Essential content is available without JavaScript or interaction.
