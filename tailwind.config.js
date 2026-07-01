/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Light theme */
        paper: "#EFE9DB",
        "paper-dark": "#E2DAC6",
        ink: "#1B2433",
        black: "#11151D",
        rust: "#B5562C",
        "rust-light": "#C4683E",
        line: "#9B9582",
        "line-soft": "rgba(27,36,51,0.13)",

        /* Dark theme surfaces */
        "dark-bg": "#0E1117",
        "dark-surface": "#161C27",
        "dark-border": "#2A3140",
        "dark-muted": "#8B95A8",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};
