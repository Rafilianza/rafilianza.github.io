# Portfolio guidance

Work in this repository. Preserve unrelated user changes, installed skill
directories (including `.agents/` and `.claude/`), `skills-lock.json`, and tool
configuration. Do not install, update, remove, or edit skills unless requested.

Read `PRODUCT.md`, `DESIGN.md`, `README.md`, `src/content.config.ts`, and the
relevant existing components before changing the site. User instructions and
the agreed design take priority over generic skill recommendations.

## Content and structure

- Use Astro static pages, TypeScript where it improves clarity, Markdown
  content, and plain CSS. Add dependencies only for a concrete need.
- Put each project in `src/content/projects/<slug>/index.md`, with images beside
  it in `images/`. Use `docs/project-template.md` as the starting point.
- The same entry supplies its Projects preview and case-study page. Home shows the
  first sorted project's compact static preview; Projects lists all visible
  projects as static summaries. Reserve image-view controls and workflow steps
  for case studies. Reuse shared components, layouts, sorting, and visibility.
- Use optional `finding` and `limitation` fields for the short case overview.
  Reuse `role` only for confirmed personal contributions. Place narrative images
  beside their findings in Markdown; do not duplicate them in an end gallery.
- Keep Home (`/`), Projects (`/projects/`), and About (`/about/`) as separate real pages.
  Case studies retain their own `/projects/<slug>/` routes. Preserve active
  navigation, with Projects highlighted on case studies and About on `/about/cv/`.
- Keep `src/content/profile/cv.md` as the shared source for About's biography,
  the full CV, and Home's Work Experience and Education sections. After the
  featured project, show every entry from the `experience` section, then every
  entry from `education`, preserving their source order. These currently contain
  four work entries and two education entries. Show titles, available
  organisations, dates, existing short summaries, and optional verified
  `journeyTopics`, with a View full CV link. `journeyOrder` remains accepted for
  compatibility but no longer controls Home inclusion or order. Keep the optional
  `homeIntroduction` in this same profile entry. Reuse `CvEntries.astro` for
  Home and the detailed CV; keep detailed responsibilities and bullet points on
  the full CV.
- Keep the full CV readable as HTML with section navigation and a download of
  `public/cv/muhammad-dhiaz-rafilianza.pdf`. The PDF is the unchanged original;
  replacing it is separate from editing the web entry. Keep both versions aligned.
- Use real page links. Direct URL loading, refreshing, and browser Back/Forward
  must display the correct page and active navigation without requiring a visit
  to Home first.
- Drafts may appear locally with a clear Draft label. Exclude them from both
  production listings and generated routes. Never publish a sample as real work.
- Keep optional fields optional. Omit unknown dates, roles, links, and images;
  do not render empty sections or placeholder buttons.
- Reuse `src/styles/tokens.css` and `src/styles/global.css`. Record deliberate
  design changes in `DESIGN.md` and durable factual context in `PRODUCT.md`.
- The user selected the Editorial direction and requested a site-wide overhaul.
  Use one shared identity across Home, Projects, About, the CV, and case studies:
  pure black, warm off-white, orange accents, Newsreader display type, Archivo
  body type, open compositions, and prominent intact project imagery. Keep real
  page navigation and clear active states. The former Home-only palette split
  is superseded by this direction.
- Use the shared `TopicLabel.astro` for noninteractive topic and technology
  labels across Home, About interests, Projects, case studies, and CV skills.
  Keep semantic colours stable: vision/ML soft blue, diffusion/generative
  lavender, research rose, experiments/analytics mint, and data/tools gold.
  Unknown labels use the neutral treatment. Use wrapping labels with tinted
  backgrounds and borders; do not assign colours by row position.
- The user will update project content later. Preserve existing project copy,
  evidence, and source links during the design overhaul; do not add speculative
  case studies, project claims, placeholder projects, or a fabricated portrait.

## Accuracy and evidence

- Verify project claims against actual code and saved outputs. Ask about
  personal contributions or context the source cannot establish.
- The supplied CV confirms personal background, but does not confirm ownership
  of the Automatic Object Discovery code. Keep the Monash Master's completion
  marked expected December 2026, retain overlapping employment dates, and omit
  dates for undated research or leadership. Do not publish private source paths.
- Distinguish the author's integration and experiments from pretrained models.
  Do not invent accuracy, speed, IoU, Dice, mAP, or other evaluation results.
- The first featured pipeline demonstrates still images. Do not present README
  claims about video tracking or parallel processing as implemented notebook
  behavior without new evidence.
- Detector confidence and object counts are not accuracy benchmarks. Saved
  output does not prove that the current notebook runs unchanged.
- Preserve original model output, captions, provenance, and visible limitations.
  Do not fabricate masks, retouch errors, or crop away evidence.
- Do not run models or download weights merely to build the portfolio. Do not
  change the featured project's source repository without an explicit request.

## Implementation and checks

- Prefer descriptive names, focused components, and readable sequential code.
  Avoid unnecessary abstractions. Explain non-obvious decisions briefly.
- Use semantic HTML and visible focus. Evidence views need labeled controls,
  keyboard and touch support, and useful captions/alternative text. Preserve
  readable default content without interaction. Respect reduced motion.
- Use registered image views only when provenance supports alignment. Preserve
  full saved figures when their dimensions or margins differ.
- Run relevant `npm run check` and `npm run build` checks. Inspect desktop and
  mobile rendering, direct project and CV URLs, images, links, the CV download,
  draft exclusion, focus, and reduced motion when affected. Report what was
  actually verified.
- Keep README, template, schema, and implemented content behavior consistent.
  Test new content patterns with an unpublished draft.
- Keep work local. Do not commit, push, publish, run the manual deployment
  workflow, or change account settings unless the user explicitly requests it.
