// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://stardateapp.com",
  integrations: [
    starlight({
      title: "Stardate",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      plugins: [starlightBlog()],
      // social: {
      //   github: "https://github.com/withastro/starlight",
      // },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              slug: "guides",
            },
            {
              label: "Apple Watch Installation",
              slug: "guides/apple-watch-installation",
            },
            {
              label: "Apple Watch Complications",
              slug: "guides/apple-watch-complications",
            },
            {
              label: "iOS Widgets and Control Center",
              slug: "guides/iphone-widgets",
            },
          ],
        },
        {
          label: "Bring Your Own AI",
          items: [
            {
              label: "Why Bring Your Own AI?",
              slug: "bring-your-own-ai",
            },
          ],
        },
        {
          label: "Help!",
          items: [
            {
              label: 'The app is "stuck"!',
              slug: "help/app-is-stuck",
            },
          ],
        },
        {
          label: "About",
          items: [
            {
              label: "About Stardate",
              slug: "about",
            },
            {
              label: "Privacy Policy",
              slug: "privacy",
            },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      customCss: [
        "./src/custom.css",
        "./src/styles/watch_bezel.css",
        "./src/styles/watch_demo.css",
        "./src/styles/phone_search_demo.css",
        "./src/styles/phone_image.css",
        "./src/styles/lock_screen_control_center.css",
      ],
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],
});
