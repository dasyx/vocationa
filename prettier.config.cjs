module.exports = {
    printWidth: 1000,
    tabWidth: 4,

    plugins: [require("prettier-plugin-tailwindcss"), require("prettier-plugin-svelte"),
require("prettier-plugin-astro")],
    tailwindConfig: "./tailwind.config.cjs",
    overrides: [
        {
          files: '*.astro',
          options: {
            parser: 'astro',
          },
        },
      ],
};
