import { BreakpointTypes } from '../../styles';

export default interface ScreenSizeDevHelperTypes {
  backgroundColor?: string;
  textColor?: string;
  opacity?: string;

  /**
   * Custom breakpoints
   */
  breakpoints?: BreakpointTypes<number | string>;

  /**
   * Show no matter what, even in production
   */
  forceShow?: boolean;
}
