export const defaultTheme = {
  colors: {
    neutral: {
      white: "#FFFFFF",
      grey000: "#F4F6F9",
      grey100: "#EDF1F4",
      grey200: "#DDE1E5",
      grey300: "#A1A7AA",
      grey400: "#393B3D",
      black: "#00000",
    },
    support: {
      blue300: "#2362AF",
      purple100: "#A77FF7",
      purple200: "#652D91",
      purple300: "#3C1053",
      orange100: "#FFA07A",
      orange200: "#F36C21",
      orange300: "#E95808",
    },
    transparent: "rgba(0,0,0,0)",
  },
  screens: {
    mobile: "375px",
    phablet: "480px",
    tablet: "640px",
    netbook: "800px",
    laptop: "1024px",
    desktop: "1280px",
    HD: "1366px",
    "HD+": "1536px",
    fullHD: "1920px",
    "2K": "2048px",
    "4K": "3840px",
  },
  keyframes: {
    shimmer: {
      "100%": {
        transform: "translateX(100%)",
      },
    },
  },
} as const;
