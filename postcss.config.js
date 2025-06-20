// postcss.config.js (ESM version)
import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
        },
      ],
    }),
  ],
};
