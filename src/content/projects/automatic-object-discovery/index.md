---
title: "Automatic Object Discovery and Segmentation"
slug: automatic-object-discovery
summary: "Discovering objects and generating masks without choosing a fixed set of classes first."
draft: false
featured: true
order: 1
technologies:
  - Python
  - PyTorch
  - Hugging Face Transformers
  - Qwen2.5-VL
  - Grounding DINO
  - SAM 2.1
tags:
  - Computer vision
  - Vision-language models
  - Image segmentation
steps:
  - title: Discover objects
    description: Qwen2.5-VL suggests what is in the image.
  - title: Locate them
    description: Grounding DINO finds the suggested objects.
  - title: Create masks
    description: SAM 2.1 turns detected boxes into pixel masks.
cover:
  src: "./images/truck-overlay.webp"
  alt: "A pickup truck with colored segmentation masks over the body, wheels, windows, door, and surrounding street."
  caption: "A saved mask overlay from the notebook’s truck example."
comparison:
  title: "From an image to labeled regions"
  description: "Explore three views of the same truck example, taken from the project’s input image and saved notebook outputs."
  views:
    - label: Input
      src: "./images/truck-input.jpg"
      alt: "The original photograph of a white pickup truck parked beside a red wall."
      caption: "The input photograph, before object discovery and segmentation."
    - label: Mask overlay
      src: "./images/truck-overlay.webp"
      alt: "Colored masks separate the truck, wheels, windows, door, wall, and street."
      caption: "SAM 2.1 masks prompted by Grounding DINO boxes. This saved example contains 22 masks."
    - label: Annotated
      src: "./images/truck-annotated.webp"
      alt: "The truck mask overlay with detection boxes, labels, and scores, including car, door, window, and wheel tire."
      caption: "The same masks with detector labels and scores. These scores are not measurements of mask accuracy."
gallery:
  - src: "./images/painting-annotated.webp"
    alt: "A colorful landscape drawing annotated with masks and boxes for houses, a boat, trees, mountains, water, and the sun."
    caption: "Exploring a different visual domain: a 300 × 168 drawing produced 19 masks in this saved run. Some regions overlap or receive ambiguous labels."
  - src: "./images/starry-night-annotated.webp"
    alt: "A segmentation overlay on The Starry Night, with several stars labeled moon and the church spire labeled streetlight."
    caption: "A useful failure case: visible regions can be segmented while their names remain wrong. Several stars are labeled “moon.”"
links:
  repository: "https://github.com/Rafilianza/grounding-sam2-extraction"
  notebook: "https://github.com/Rafilianza/grounding-sam2-extraction/blob/main/notebooks/Grounding_SAM2.ipynb"
---

## Problem

I wanted to segment an image before deciding which object classes to look for. Fine-tuning a model around a fixed label set was not a practical option for this experiment. That led to a different question: could existing models work together to discover objects, locate them, and produce useful masks?

## Project focus

This prototype connects three pretrained models in a single image-processing pipeline. The focus is their handoff: turning a vision-language model’s suggestions into detection prompts, then turning detection boxes into pixel masks.

The notebook explores photographs, paintings, and game imagery. Its saved examples show what the approach can produce and where it breaks down.

## How it works

1. **Suggest object names.** Qwen2.5-VL receives the image and a request for visible objects and natural features. The response is cleaned into a list of candidate names, with repeated entries removed.
2. **Locate the candidates.** Grounding DINO receives the image and those names as a text prompt. It returns bounding boxes, labels, and detection scores.
3. **Segment the regions.** SAM 2.1 uses the boxes as prompts to generate masks for the image.
4. **Make the results usable.** Export functions create visual overlays, individual binary mask PNGs, and JSON metadata with labels, boxes, scores, and mask areas. A loader provides access by mask ID or label.

## What the examples show

In the saved truck example, the language model proposes 21 candidate names and the detector returns 22 regions. The masks capture the vehicle and smaller parts such as wheels and windows. Those counts describe this run; they do not measure accuracy or prove that every object was found.

The landscape drawing shows that the same sequence can be applied to a stylized image. The Starry Night example exposes a different issue: a region may have a convincing boundary but an incorrect name. Segmentation quality and label quality need to be assessed separately.

## Limitations

Object discovery can repeat words or suggest things that are not present. Detection can produce overlapping boxes, combined labels, or incorrect names that are then carried into the mask results. Lower detection thresholds admit more candidates, along with more noise.

These are exploratory outputs from individual still images. The project does not establish benchmark accuracy, real-time performance, or video tracking. The committed notebook also needs path and cell-order cleanup before a fresh run; the examples here are its saved outputs.

## Lessons learned

An existing tool does not have to solve the whole problem on its own. Connecting tools with complementary strengths can make them useful for a new task without fine-tuning a separate model.

That connection also carries errors forward. A useful next step is to review candidate names and duplicate detections before segmentation, then evaluate labels and mask boundaries independently.
