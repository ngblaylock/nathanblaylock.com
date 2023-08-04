module.exports = [
  {
    input: "./src/raw-images",
    output: "./static/images",
    sizes: [
      {
        width: 1400,
        prefix: "thumb",
      },
    ],
    // See: https://sharp.pixelplumbing.com/api-resize
  },
];