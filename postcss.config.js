// postcss.config.mjs (ESM version)
const config = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
        },
      ],
    },
  },
};
export default config;
