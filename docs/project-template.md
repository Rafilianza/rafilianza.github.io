---
title: "Second project — draft template"
slug: second-project
summary: "Replace this with a factual, one-sentence description of your project."
draft: true
featured: false
order: 2
technologies: []
# The first optional tag appears as the category above the project preview title.
tags: []

# Copy this file to src/content/projects/second-project/index.md.
# Keep draft: true while writing. Drafts appear in local development only.
# Replace the title, slug, summary, and body with your actual project information.
# Use a unique lowercase slug with hyphens; it determines /projects/second-project/.
# Optional fields can be omitted entirely. Do not leave empty URL or image fields.

# Add a real project date and describe your own contribution when known:
# date: 2026-10-17
# role: "Describe what you personally implemented or investigated."
# finding: "State one observation supported by the available results."
# limitation: "State the main boundary of what those results establish."
# Finding and limitation are optional. Do not invent evaluation metrics or authorship.

# Optional short workflow, shown after the main case-study image viewer.
# Home and Projects use static previews without workflow steps or image controls.
# Each step needs a title and a brief description. Use the actual project steps.
# Omit this field when a sequence would not help explain the work.
# steps:
#   - title: "Prepare the input"
#     description: "Describe how this project prepares its input."
#   - title: "Inspect the result"
#     description: "Describe what you examine in the output."

# Save images next to this file inside an images/ folder before enabling these fields.
# Even drafts must reference real files. Alt text describes what the image shows.
# cover:
#   src: ./images/cover.jpg
#   alt: "Describe the important visual content of the cover."
#   caption: "Explain what the image demonstrates."
# Home and Projects use this cover, or the first comparison image if omitted.
# With neither a cover nor a comparison, the preview uses a text-only layout.

# Optional end gallery. Prefer Markdown images beside relevant findings below.
# Do not place the same figure in the body and this gallery.
# Each image needs src and alt; captions are optional.
# gallery:
#   - src: ./images/result.png
#     alt: "Describe the visible result."
#     caption: "State the observation and any relevant limitation."

# A case-study comparison needs a title and at least two views.
# Use actual corresponding outputs; do not improve or reconstruct model results.
# comparison:
#   title: "Inspect the example"
#   description: "Explain what visitors should compare between these views."
#   views:
#     - label: "Input"
#       src: ./images/input.jpg
#       alt: "Describe the original input."
#       caption: "Describe the source or context of this input."
#     - label: "Result"
#       src: ./images/result.png
#       alt: "Describe the observed output."
#       caption: "Explain what worked and what did not."

# Uncomment only links that exist, replacing these example URLs first.
# links:
#   repository: https://github.com/Rafilianza/REPLACE-WITH-REPOSITORY
#   notebook: https://github.com/Rafilianza/REPLACE-WITH-REPOSITORY/blob/main/notebooks/REPLACE.ipynb
#   demo: https://example.com/replace-with-real-demo
#   publication: https://example.com/replace-with-real-publication
---

<!-- This is a writing template, not a real portfolio project. -->
<!-- Keep only the sections that are useful for this project. -->

## Results

Describe what the available evidence shows. Pair each important finding with its
image so readers can understand the result without reading the entire article.
Include measured results only when their evaluation method is documented.

<!-- After saving a real file, you can include an image inside the body:
![Describe the important visual content.](./images/detail.png)

Explain the observation or limitation shown above.
-->

## Why this approach

Replace this paragraph with the problem, intended users, or research question.
Explain why the work was worth exploring.

## My contribution

Explain what you built, changed, or investigated. Identify any pretrained models,
datasets, tools, tutorials, or existing code you used, and distinguish that work
from your own contribution.

<!-- Omit this entire section until the contribution is confirmed. -->

## Approach

Describe the main steps and why you chose them. Explain unfamiliar terms in plain
language and include enough detail for a reader to understand the method.

## Limitations

Explain where the approach struggled, what the examples cannot establish,
and what would need evaluation before drawing stronger conclusions.

## Lessons learned

Describe what you learned and what you would investigate next.

<!-- Standard projects use Markdown and the shared project layout. If a future
project needs custom visuals inside its prose, ask for a focused Astro component
and MDX support. MDX is not installed or enabled in the initial portfolio. -->
