module.exports = {
  plugins: [
    'postcss-import',
    'postcss-css-variables',
    'postcss-nested',
    'postcss-selector-not',
    'postcss-flexbugs-fixes',
    'postcss-easing-gradients',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        stage: 1,
        features: {
          'nesting-rules': true,
          // @see https://github.com/tailwindlabs/tailwindcss/issues/1190
          'focus-within-pseudo-class': false,
        },
        // autoprefixer: {
        //   grid: true
        // }
      },
    ],
    'autoprefixer',
  ],
}
