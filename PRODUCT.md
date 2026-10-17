# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site, Markdown content collections, TypeScript for content and component inputs, and plain CSS. Recommended during research and carried into implementation following the user's selection of Direction A. GitHub Pages user site at https://rafilianza.github.io.

## Users

A balanced technical audience: people who want to understand Muhammad Dhiaz Rafilianza's work quickly, with deeper implementation details available in dedicated case studies.

## Product Purpose

Introduce Muhammad Dhiaz Rafilianza and his interests in deep learning, computer vision, and diffusion models. Show real work and make its purpose and visual results understandable with minimal reading. Provide a directly linkable case study and verified source links.

## Brand Commitments

The user selected Direction A for its clear, image-led hierarchy, then explicitly requested a dark theme during implementation. Preserve the readable editorial composition with a dark palette; no light-theme default or decorative effects that compete with the work.

The sitemap is Home (`/`), Projects (`/projects/`), and About (`/about/`). Home is a compact introduction and lead project preview. Projects lists the projects and their visual demonstrations. Each case study has its own `/projects/<project-slug>/` route. Main navigation visibly identifies the current page, with Projects active on case studies. Use real page navigation: direct loading, refreshing, and browser Back/Forward must work for every route.

## Capabilities and Constraints

Start with one real project: Automatic Object Discovery and Segmentation. A single Markdown entry supplies its Projects listing and case-study page. Home shows the first sorted project's compact preview from the same source. Optional information stays optional; no empty sections or invented links. Drafts never generate production pages. Keep work local until the user requests publishing; do not commit or push automatically. Preserve installed skills and tool configuration.

## Evidence on Hand

The grounding-sam2-extraction notebook combines Qwen/Qwen2.5-VL-3B-Instruct object-name proposals, IDEA-Research/grounding-dino-tiny detections, and facebook/sam2.1-hiera-large image masks. Code implements image previews, masks, and JSON exports. Saved output images are historical examples, not proof that the current notebook runs unchanged. No quantitative accuracy benchmarks or demonstrated video pipeline. Preserve visible errors and source attribution.

## Confirmed Project Context

The user wanted to segment images before the relevant object classes were known, avoiding fine-tuning for fixed labels. Their lesson: existing tools can be combined into a pipeline suited to the problem. Exact code authorship, collaborators, and project dates remain unconfirmed. Describe integration and experimentation without inventing individual contributions or claiming pretrained model authorship.

## Product Principles

- Make the project's purpose and visible result understandable in seconds.
- Use real evidence and plain language.
- Keep detailed explanation available without forcing every visitor to read it.
- Add projects through content, reusing the shared design and layouts.

## Accessibility & Inclusion

Semantic HTML, visible keyboard focus, clear image descriptions and captions, accessible native controls, comfortable mobile touch targets, normal scrolling and zoom, and reduced-motion support. Essential content is available without JavaScript or interaction.
