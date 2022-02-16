const SPACING_UNIT = 8;

const spacing = (...args: number[]) => {
  const unit = (v: number) => v * SPACING_UNIT;
  switch (args.length) {
    case 1:
      return `${unit(args[0])}px`;
    case 2:
      return [0, 1].map((n) => `${args[n] * SPACING_UNIT}px`).join(" ");
    case 3:
      return [0, 1, 2].map((n) => `${args[n] * SPACING_UNIT}px`).join(" ");
    case 4:
      return [0, 1, 2, 3].map((n) => `${args[n] * SPACING_UNIT}px`).join(" ");
    default:
      return "auto auto";
  }
};

const theme = {
  colors: {
    primary: {
      main: "#4987ED",
      dark: "#205ABA",
      light: "#91BBFF",
    },
    neutral: {
      900: "#1b1b1b",
      800: "#222",
      700: "#313131",
      600: "#545454",
      500: "#7f7f7f",
      400: "#9a9a9a",
      300: "#bebebe",
      200: "#dcdcdc",
      100: "#f3f3f3",
      50: "#fafbfc",
    },
    black: "#1b1b1b",
    white: "#fff",
  },
  typography: {
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      rg: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.375rem",
      xxl: "1.625rem",
    },
    typeface: {
      serif:
        "-apple-system, 'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
    },
  },
  spacing,
  shape: {
    radius: {
      rg: "6px",
    },
  },
};

export default theme;
