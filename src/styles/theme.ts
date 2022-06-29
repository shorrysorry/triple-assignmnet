const fonts = {
  size: {
    countNumber: "36px",
    byDate: "15px",
    awards: "14px",
  } as const,
  color: {
    gray: "rgba(58,58,58,1)",
    gray700: "rgba(58,58,58,0.7)",
    gray800: "rgba(58,58,58,0.8)",
  } as const,
};

const theme = { fonts };

export type Theme = typeof theme;

export default theme;
