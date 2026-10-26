# Petals in Code — Virtual Flower Surprise 🌸

A romantic mini-experience built with HTML, CSS, inline SVG and JavaScript.

## Visitor flow
1. Welcome screen.
2. Romantic quote.
3. A second message before the reveal.
4. An original virtual bouquet drawn in SVG and animated with CSS—no reference photo or external JavaScript library.
5. A final romantic line and restart button.

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Click through each screen and watch the virtual bouquet bloom.

The flower artwork is drawn directly inside `index.html`. No image assets, PixiJS, npm, or JavaScript CDN are needed. Google Fonts are optional; fallback fonts work offline.

## Publish with GitHub Pages
1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
5. Once published, copy the Pages URL and share it.

## Customize
- Edit the romantic messages in `index.html`.
- Change flower colors in the `.flower--... .petals` rules in `style.css`.
- Edit the SVG flower shapes in the `#virtualBouquet` SVG in `index.html`.
