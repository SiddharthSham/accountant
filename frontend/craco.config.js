const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FD4D4D",
              "@link-color": "inherit",
              "@link-hover-color": "#FD4D4D",
              "@border-radius-base": "8px",
              "@body-background": "#0B0E11",
              "@font-family": "Inter, sans-serif",
              "@text-color": "#ffffff",
              "@text-color-secondary": "#5D7290",
              "@heading-color": "#ffffff",
              "@height-base": "40px", // 40 px --> 1440 px
              "@table-row-hover-bg": "#151A21",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
