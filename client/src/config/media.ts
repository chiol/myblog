export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxl: mediaQuery(1920),
  xl: mediaQuery(1440),
  lg: mediaQuery(1200),
  md: mediaQuery(1024),
  sm: mediaQuery(768),
  xs: mediaQuery(375),
  custom: mediaQuery,
};

export default media;
