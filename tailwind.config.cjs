/** @type {import('tailwindcss').Config} */

// Typography scale as single source of truth
const typography = {
  "heading-l": {
    fontSize: "4rem",
    lineHeight: "4.8125rem",
  },
  "heading-m": {
    fontSize: "1.5rem",
    lineHeight: "1.8125rem",
  },
  "heading-s": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
  },
  "body-m": {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
  },
  "body-s": {
    fontSize: "0.875rem",
    lineHeight: "1.0625rem",
  },
  "mobile-heading-l": {
    fontSize: "2rem",
  },
};

// Build fontSize and lineHeight objects
const fontSize = {
  default: "1rem",
  20: "1.25rem",
};
const lineHeight = {};

for (const [key, value] of Object.entries(typography)) {
  fontSize[key] = value.fontSize;
  if (value.lineHeight) {
    lineHeight[key] = value.lineHeight;
  }
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["Inconsolata", "monospace"],
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      colors: {
        gray: "#757575",
        "gray-2": "#E9E9E9",
        "gray-3": "#F4F4F4",
        purple: "#A445ED",
        red: "#FF5252",
        black: "#050505",
        "black-2": "#1F1F1F",
        "black-3": "#2D2D2D",
        "black-4": "#3A3A3A",
      },
      boxShadow: {
        dropdown: "0px 5px 30px rgba(0, 0, 0, 0.1)",
        "dropdown-dark": "0px 5px 30px #A445ED",
        nprogress: "0 0 10px #A445ED, 0 0 5px #A445ED",
      },
      backgroundImage: {
        search: 'url("./assets/images/icon-search.svg")',
      },
      backgroundPosition: {
        "right-4": "right 24px center",
      },
      transitionProperty: {
        "bg-border": "background, border",
        color: "color",
      },
      transitionDuration: {
        200: "200ms",
        150: "150ms",
      },
      fontSize,
      lineHeight,
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
