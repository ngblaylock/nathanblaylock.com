module.exports = [
  {
    input: "./src/raw-images/bg",
    output: "./static/images/optimized/bg",
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
    output: "./static/images/optimized/projects",
    preserveFileStructure: true,
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
    sharpOptions: {
      withoutEnlargement: true,
    }
    // See: https://sharp.pixelplumbing.com/api-resize
  },
  {
    input: "./src/raw-images/profile",
    output: "./static/images/optimized/profile",
    includeOriginal: true,
    sizes: [
      {
        width: 400,
        prefix: 'sm'
      }
    ],
    sharpOptions: {
      withoutEnlargement: true,
    }
  }
];