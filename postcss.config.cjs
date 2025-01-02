module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-mantine': {},
    autoprefixer: {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
