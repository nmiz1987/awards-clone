/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  trailingComma: 'all',
  printWidth: 150,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};
