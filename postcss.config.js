// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
let production = false;

module.exports = {
  plugins: [
    require("tailwindcss"),

    // only needed if you want to purge
    ...(production ? [purgecss] : [])
  ]
};
