module.exports = [
  {
    input: "./src/raw-images/bg",
    output: "./static/images/optimized",
    sizes: [
      {
        width: 1400,
        prefix: "bg",
      },
    ],
    // See: https://sharp.pixelplumbing.com/api-resize
  },
  {
    input: "./src/raw-images/projects",
    output: "./static/images/optimized",
    sizes: [
      {
        width: 600,
        prefix: "lg",
      },
      {
        width: 300,
        prefix: "sm",
      },
      {
        width: 150,
        prefix: "xs",
      },
    ],
    // See: https://sharp.pixelplumbing.com/api-resize
  },
];