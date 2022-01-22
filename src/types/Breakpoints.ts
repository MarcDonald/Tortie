export type Device = 'phone' | 'tablet' | 'laptop' | 'desktop' | 'largeDesktop';

export interface BreakpointTypes<T extends number | string> {
  tabletMin: T;
  laptopMin: T;
  desktopMin: T;
  largeDesktopMin: T;
}

export const DefaultPixelBreakpoints: BreakpointTypes<number> = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
  largeDesktopMin: 2500,
};

export const DefaultBreakpoints: BreakpointTypes<string> = {
  tabletMin: `${DefaultPixelBreakpoints.tabletMin / 16}rem`,
  laptopMin: `${DefaultPixelBreakpoints.laptopMin / 16}rem`,
  desktopMin: `${DefaultPixelBreakpoints.desktopMin / 16}rem`,
  largeDesktopMin: `${DefaultPixelBreakpoints.largeDesktopMin / 16}rem`,
};
