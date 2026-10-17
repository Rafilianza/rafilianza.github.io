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
  first sorted project's compact preview; Projects lists all visible projects.
  Workflow steps appear on Projects and case studies. Reuse shared components,
  layouts, project sorting, and visibility logic.
- Keep Home (`/`), Projects (`/projects/`), and About (`/about/`) as separate real pages.
  Case studies retain their own `/projects/<slug>/` routes. Preserve active
  navigation, with Projects highlighted on case studies.
- Use real page links. Direct URL loading, refreshing, and browser Back/Forward
  must display the correct page and active navigation without requiring a visit
  to Home first.
- Drafts may appear locally with a clear Draft label. Exclude them from both
  production listings and generated routes. Never publish a sample as real work.
- Keep optional fields optional. Omit unknown dates, roles, links, and images;
  do not render empty sections or placeholder buttons.
- Reuse `src/styles/tokens.css` and `src/styles/global.css`. Record deliberate
  design changes in `DESIGN.md` and durable factual context in `PRODUCT.md`.

## Accuracy and evidence

- Verify project claims against actual code and saved outputs. Ask about
  personal contributions or context the source cannot establish.
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
  mobile rendering, direct project URLs, images, links, draft exclusion, focus,
  and reduced motion when affected. Report what was actually verified.
- Keep README, template, schema, and implemented content behavior consistent.
  Test new content patterns with an unpublished draft.
- Keep work local. Do not commit, push, publish, run the manual deployment
  workflow, or change account settings unless the user explicitly requests it.
