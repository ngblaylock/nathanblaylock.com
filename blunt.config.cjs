module.exports = [
  {
    input: "./src/raw-images",
    output: "./static/images",
    sizes: [
      {
        width: 100,
        height: 100,
        prefix: "thumb",
      },
    ],
    // See: https://sharp.pixelplumbing.com/api-resize
    fit: "outside",
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  },
];