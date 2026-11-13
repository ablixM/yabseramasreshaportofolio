// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages
    ? "https://ablixM.github.io"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://yabseramasreshaportofolio.vercel.app",
  base: isGitHubPages ? "/yabseramasreshaportofolio" : "/",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Gabarito",
      cssVariable: "--font-gabarito",
      fallbacks: ["ui-serif", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Be Vietnam Pro",
      cssVariable: "--font-be-vietnam-pro",
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
