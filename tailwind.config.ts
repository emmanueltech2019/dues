import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-color": 'var(--gradient)',
      },
      screens: {
        "smm": '575px',
        "vsm": '520px'
      },
    },
  },
  plugins: [],
}
export default config;
