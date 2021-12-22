export const PixelBreakpoints = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
  largeDesktopMin: 2500,
};

export const Breakpoints = {
  tabletMin: `${PixelBreakpoints.tabletMin / 16}rem`,
  laptopMin: `${PixelBreakpoints.laptopMin / 16}rem`,
  desktopMin: `${PixelBreakpoints.desktopMin / 16}rem`,
  largeDesktopMin: `${PixelBreakpoints.largeDesktopMin / 16}rem`,
};
