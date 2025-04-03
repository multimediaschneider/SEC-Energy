/**
 * Design tokens for the SEC Consulting website
 * This file defines the core design elements used throughout the site
 * to ensure consistency in the UI.
 */

export const tokens = {
  /* Color System */
  colors: {
    primary: {
      50: "hsl(151, 73%, 95%)", // emerald-50
      100: "hsl(149, 67%, 90%)", // emerald-100
      200: "hsl(152, 63%, 84%)", // emerald-200
      300: "hsl(156, 60%, 74%)", // emerald-300
      400: "hsl(158, 54%, 61%)", // emerald-400
      500: "hsl(160, 51%, 49%)", // emerald-500
      600: "hsl(161, 54%, 38%)", // emerald-600
      700: "hsl(163, 65%, 26%)", // emerald-700 (primary)
      800: "hsl(163, 81%, 21%)", // emerald-800
      900: "hsl(164, 86%, 16%)", // emerald-900
    },
    gray: {
      50: "hsl(210, 20%, 98%)",
      100: "hsl(220, 14%, 96%)",
      200: "hsl(220, 13%, 91%)",
      300: "hsl(216, 12%, 84%)",
      400: "hsl(218, 11%, 65%)",
      500: "hsl(220, 9%, 46%)",
      600: "hsl(215, 14%, 34%)",
      700: "hsl(217, 19%, 27%)",
      800: "hsl(215, 28%, 17%)",
      900: "hsl(221, 39%, 11%)",
    },
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    red: {
      600: "hsl(0, 84%, 60%)",
    },
    rose: {
      600: "hsl(350, 87%, 55%)",
    },
  },

  /* Typography */
  typography: {
    fontFamily: {
      sans: "var(--font-inter), sans-serif",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
  },

  /* Spacing */
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
    40: "10rem", // 160px
    48: "12rem", // 192px
    56: "14rem", // 224px
    64: "16rem", // 256px
    72: "18rem", // 288px
    80: "20rem", // 320px
    96: "24rem", // 384px
  },

  /* Shadows */
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },

  /* Border Radius */
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    DEFAULT: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  /* Transitions */
  transitions: {
    duration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    timing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  /* Z-Index */
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },

  /* Breakpoints for responsive design */
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

// CSS variable mapping for use in global styles
export const cssVariables = {
  // Colors
  "--color-primary-50": tokens.colors.primary[50],
  "--color-primary-100": tokens.colors.primary[100],
  "--color-primary-200": tokens.colors.primary[200],
  "--color-primary-300": tokens.colors.primary[300],
  "--color-primary-400": tokens.colors.primary[400],
  "--color-primary-500": tokens.colors.primary[500],
  "--color-primary-600": tokens.colors.primary[600],
  "--color-primary-700": tokens.colors.primary[700],
  "--color-primary-800": tokens.colors.primary[800],
  "--color-primary-900": tokens.colors.primary[900],

  "--color-gray-50": tokens.colors.gray[50],
  "--color-gray-100": tokens.colors.gray[100],
  "--color-gray-200": tokens.colors.gray[200],
  "--color-gray-300": tokens.colors.gray[300],
  "--color-gray-400": tokens.colors.gray[400],
  "--color-gray-500": tokens.colors.gray[500],
  "--color-gray-600": tokens.colors.gray[600],
  "--color-gray-700": tokens.colors.gray[700],
  "--color-gray-800": tokens.colors.gray[800],
  "--color-gray-900": tokens.colors.gray[900],

  "--color-white": tokens.colors.white,
  "--color-black": tokens.colors.black,

  // Typography
  "--font-family-sans": tokens.typography.fontFamily.sans,

  // Spacing
  "--spacing-1": tokens.spacing[1],
  "--spacing-2": tokens.spacing[2],
  "--spacing-3": tokens.spacing[3],
  "--spacing-4": tokens.spacing[4],
  "--spacing-6": tokens.spacing[6],
  "--spacing-8": tokens.spacing[8],
  "--spacing-12": tokens.spacing[12],
  "--spacing-16": tokens.spacing[16],
  "--spacing-24": tokens.spacing[24],

  // Shadows
  "--shadow-sm": tokens.shadows.sm,
  "--shadow": tokens.shadows.DEFAULT,
  "--shadow-md": tokens.shadows.md,
  "--shadow-lg": tokens.shadows.lg,
  "--shadow-xl": tokens.shadows.xl,
  "--shadow-2xl": tokens.shadows["2xl"],

  // Border radius
  "--radius-sm": tokens.borderRadius.sm,
  "--radius": tokens.borderRadius.DEFAULT,
  "--radius-md": tokens.borderRadius.md,
  "--radius-lg": tokens.borderRadius.lg,
  "--radius-xl": tokens.borderRadius.xl,

  // Transitions
  "--transition-fast": `${tokens.transitions.duration[150]} ${tokens.transitions.timing.inOut}`,
  "--transition-normal": `${tokens.transitions.duration[300]} ${tokens.transitions.timing.inOut}`,
  "--transition-slow": `${tokens.transitions.duration[500]} ${tokens.transitions.timing.inOut}`,
};

export type DesignTokens = typeof tokens;
