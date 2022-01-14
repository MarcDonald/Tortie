import {
  BaseColor,
  ColorType,
  CoreColor,
  Palette,
  TypographyColor,
} from '../types';

import { camelToKebab } from './FormatUtils';

export function cssVar(value: string): string {
  return `var(--${value})`;
}

export function color(color: BaseColor | CoreColor | TypographyColor) {
  return cssVar(`color-${camelToKebab(color)}`);
}

export function colorA(
  color: BaseColor | CoreColor | TypographyColor,
  colorType: ColorType,
  alpha: number,
  palette: Palette
): string {
  switch (colorType) {
    case 'base':
      return palette.base[color as unknown as BaseColor].hsla(alpha);
    case 'core':
      return palette.core[color as unknown as CoreColor].hsla(alpha);
    case 'typography':
      return palette.typography[color as unknown as TypographyColor].hsla(
        alpha
      );
    default: {
      throw new Error(`${color} is not a ${colorType} color`);
    }
  }
}
