# LayerDiffLore

A Vue.js-based layer difference visualization tool for displaying layered image compositing effects and differences across multiple images.

## Features

- 📁 **Left Panel**: Displays all layer list with clickable layer toggling
- 🎨 **Center View**: Shows layer composition results and image-text descriptions
- 📚 **Right Panel**: Displays reference images and helpful tips
- 🔄 **Multi-scene Support**: Switch between different layer combinations to showcase various effects

## Quick Start

### 1. Download Project

```
https://github.com/h4cander/LayerDiffLore/archive/refs/heads/master.zip
```

Or clone with Git:
```bash
git clone https://github.com/h4cander/LayerDiffLore.git
```

### 2. Extract

Extract the downloaded file to your local folder.

### 3. Prepare Images

- Place your images anywhere you prefer (e.g., `sample/`, `assets/`, etc.)
- Place reference images in any location (e.g., `refs/`, `assets/ref/`, etc.)
- Just update the file paths in the JavaScript configuration accordingly

### 4. Configure JavaScript

Edit `sample/sample1.js` (or create your own config file) following this format:

```javascript
PageData.import({
    name: "your_scene_name",
    
    note: `scene description
`,
    
    // Reference images and tips (use # for titles, ! for images)
    refs: `
# Reference 1
!refs/ref1.png
Description of reference image

# Reference 2
!refs/ref2.png
Description of another reference image
`,
    
    // Layer configuration - list layers from top to bottom (like drawing software)
    layers: [
      { url: "sample/top.png", name: "Top Layer", desc: "The top layer image" },
      { url: "sample/middle.png", name: "Middle Layer", desc: "Middle layer" },
        { url: "sample/bottom.png", name: "Bottom Layer", desc: "The bottom layer image" },
    ].reverse(),
    
    // Scenes and image-text content (use % to specify layers to display)
    contents: `
# Scene 1
%sample/bottom.png
%sample/middle.png
%sample/top.png
This is the description for scene 1

# Scene 2
%sample/bottom.png
%sample/top.png
This is the description for scene 2 (middle layer is hidden)

# Scene 3
%sample/bottom.png
This is the description for scene 3 (only bottom layer shown)
`
});
```

### 5. Link Script Files in HTML

In `index.html`, add `<script>` tags to load your configuration files. For example:

```html
<script src="./sample/sample1.js"></script>
<script src="./sample/sample2.js"></script>
```

Add these tags **after** the PageData class definition (before the main Vue app script). If you create new config files, add corresponding `<script>` tags.

### 6. Open in Browser

Simply open `index.html` directly in your web browser to use the tool.

## Configuration Guide

### Layers (layers)

- **url**: Image file path
- **name**: Layer name (displayed in left panel)
- **desc**: Layer description (displayed on hover)
- ⚠️ **Important**: Layer order determines stacking effect; bottom layers should come first in the array

### Scenes (contents)

- Use `# Title` to define each scene
- Use `%image_path` to specify which layers are shown in that scene
- Order indicates stacking order (write bottom layers first, top layers last)
- Remaining text serves as the scene description

### Reference Images (refs)

- Use `# Title` for section headers
- Use `!image_path` to embed images
- Remaining text serves as descriptions
- Provides design references and tips

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

### Dependencies

This project uses the following open-source library:

- **[Vue.js](https://vuejs.org/)** (v3.5.24) - Copyright (c) 2018-present Evan You
  - Licensed under the MIT License
  - Source: https://github.com/vuejs/core


