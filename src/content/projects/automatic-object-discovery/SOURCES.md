# Image and content provenance

This is maintenance documentation for the project entry. It is not a second portfolio project and should not be included in the project content collection.

## Source material

Inspected on 17 October 2026:

- Repository: <https://github.com/Rafilianza/grounding-sam2-extraction>
- Notebook: <https://github.com/Rafilianza/grounding-sam2-extraction/blob/main/notebooks/Grounding_SAM2.ipynb>
- Raw notebook: <https://raw.githubusercontent.com/Rafilianza/grounding-sam2-extraction/main/notebooks/Grounding_SAM2.ipynb>
- Truck input: <https://github.com/Rafilianza/grounding-sam2-extraction/blob/main/data/inputs/truck.jpg>
- Landscape drawing input: <https://github.com/Rafilianza/grounding-sam2-extraction/blob/main/data/inputs/scenary_kidspainting.jpeg>
- Starry Night input: <https://github.com/Rafilianza/grounding-sam2-extraction/blob/main/data/inputs/starry_night.jpg>

The notebook was downloaded for inspection, not executed. Its SHA-256 at inspection was `43ff50d37d7f86841a63df0f0357521bf6e9fd4c40a2b579e9a8c7a1a72ff852`.

The saved output PNGs were extracted by base64-decoding each cell output's `data["image/png"]` field. Cell and output indices below are **zero-based indices in the notebook JSON**, not execution counts. Every code cell's stored execution count was `null`.

## Asset mapping

| Portfolio file | Original material | Original dimensions | Original bytes | Delivered bytes |
| --- | --- | --- | --- | --- |
| `images/truck-input.jpg` | Repository `data/inputs/truck.jpg`; byte-for-byte copy | 1800 × 1200 | 271475 | 271475 |
| `images/truck-overlay.webp` | Cell 36, output 5, PNG; clean truck mask overlay | 2085 × 1399 | 2606602 | 1675584 |
| `images/truck-annotated.webp` | Cell 36, output 7, PNG; truck masks, boxes, and labels | 2085 × 1430 | 2514462 | 1613306 |
| `images/painting-annotated.webp` | Cell 38, output 5, PNG; drawing masks, boxes, and labels | 2085 × 1211 | 277311 | 180186 |
| `images/starry-night-annotated.webp` | Cell 24, output 2, PNG; painting masks, boxes, and labels | 1828 × 1485 | 4527530 | 2798392 |

The input truck was visually matched to both outputs. Its SHA-256 is `941715e721c8864324a1425b445ea4dde0498b995c45ddce0141a58971c6ff99` in both the source and delivered copy.

The notebook's truck example references the upstream SAM 2 sample at <https://raw.githubusercontent.com/facebookresearch/sam2/main/notebooks/images/truck.jpg>. Its Starry Night example references a Wikimedia image of Vincent van Gogh's painting. The drawing's upstream creator is not identified in the inspected repository; do not imply that the portfolio author created the underlying artworks or input photography.

## Exact conversions

All four output assets were encoded with `cwebp` 1.6.0 using:

```sh
cwebp -quiet -lossless -exact -m 6 -metadata all SOURCE.png -o DESTINATION.webp
```

The source-to-destination names were:

```text
cell_36_output_05.png -> truck-overlay.webp
cell_36_output_07.png -> truck-annotated.webp
cell_38_output_05.png -> painting-annotated.webp
cell_24_output_02.png -> starry-night-annotated.webp
```

No cropping, resizing, recoloring, generated overlays, or label edits were applied. Output dimensions, plot margins, titles, and annotation errors were preserved. WebP encoding is lossless; the truck JPEG remains the original file. The source PNGs and downloaded notebook were kept in temporary research storage at `/private/tmp/portfolio-research` during implementation, not added to the website repository.

## What supports the project narrative

- Cells 10, 12, and 14 load `facebook/sam2.1-hiera-large`, `IDEA-Research/grounding-dino-tiny`, and `Qwen/Qwen2.5-VL-3B-Instruct` respectively.
- Cell 16 prompts Qwen for visible objects, cleans returned strings, and removes exact duplicate names.
- Cell 18 creates the Grounding DINO text prompt, obtains detection boxes, and passes those boxes to `SAM2ImagePredictor` for still-image segmentation.
- Cells 31–35 define overlay, binary mask, and JSON metadata exports. Cell 37 defines a loader with lookup by mask ID or label.
- Cell 36 contains the truck run: 21 candidate names, 22 detections, 22 masks. Cell 38 contains the drawing run: 18 candidate names, 19 detections, 19 masks. These are saved example counts, not performance or accuracy metrics.
- Cell 24 shows the Starry Night run with 10 candidate names and 27 detections/masks. Several visible stars are labeled `moon`, and the church spire is labeled `streetlight`.
- The problem statement and lesson about combining existing tools are based on the user's confirmed motivation: wanting segmentation before choosing classes, being unable to fine-tune a fixed-label model for the experiment, and discovering that existing tools could be connected to suit the need.

## Known limitations to preserve in future edits

- The README describes a parallel video pipeline, but the inspected notebook implements sequential still-image processing. Follow the code and saved outputs when describing this project. Do not claim implemented video tracking or a mask/box intersection algorithm.
- The original drawing is only 300 × 168 pixels. Its larger rendered plot is not evidence of higher-resolution input or segmentation.
- Detection scores shown in the annotations come from Grounding DINO. They are not mask-quality measurements, and counts are not accuracy percentages.
- Candidate names may be repeated or incorrect. Boxes may overlap, labels may combine words, and a good-looking mask boundary can still carry a wrong label.
- Current notebook source includes a missing comma in cell 22, a `truck_photo.jpg`/`truck.jpg` filename mismatch, Colab-specific paths, and a loader call in cell 36 before its definition in cell 37. Saved outputs also reference older Google Drive paths. Do not describe the committed notebook as freshly reproduced or production ready.
- The inspected repository does not contain the logged individual mask PNGs or JSON exports. Their formats are supported by source code and saved logs; those separately exported files were not inspected.
- There is no quantitative evaluation or measured real-time performance in the notebook.
- The input and output plots have different dimensions and include different margins/title areas. The current comparison should switch views. Do not add a pixel-aligned wipe without separately verifying image alignment.

