import { BreakpointTypes } from '../../styles';

export default interface ScreenSizeDevHelperTypes {
  backgroundColor?: string;
  textColor?: string;
  opacity?: string;
  breakpoints?: BreakpointTypes<number | string>;
}
