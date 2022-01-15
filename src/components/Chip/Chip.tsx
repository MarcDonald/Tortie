import styled from 'styled-components';

import { PaletteColor, PassthroughProps, Theme } from '../../types';
import { adjustLightness } from '../../utils';

import ChipTypes, { ChipVariant } from './Chip.types';

export default function Chip(props: ChipTypes & PassthroughProps) {
  return <StyledButton {...props}>{props.children ?? props.text}</StyledButton>;
}

const StyledButton = styled.button<ChipTypes>`
  display: block;
  width: fit-content;

  padding: var(--spacing-3);
  border-radius: var(--corner-radius-large);
  border-width: 2px;
  border-style: dashed;
  border-color: ${({ variant, theme, colors }) =>
    getBorderColor(variant, theme, colors?.borderColor)};
  font-size: var(--font-size-2);
  margin: var(--spacing-1);
  color: ${({ variant, colors, theme }) =>
    getTextColor(variant, theme, colors?.textColor)};
  background-color: ${({ variant, colors, theme }) =>
    getBackgroundColor(variant, theme, false, colors?.backgroundColor)};

  transition: background-color 400ms;

  :hover {
    transition: background-color 200ms;
    cursor: pointer;
    background-color: ${({ variant, colors, theme }) =>
      getBackgroundColor(variant, theme, true, colors?.hoverColor)};
    border-style: solid;
  }
`;

function getBackgroundColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  hover: boolean,
  backgroundColor?: string
): string {
  if (backgroundColor) {
    return backgroundColor;
  }

  const variantColor = mapVariantColor(variant, theme);

  if (hover) {
    return variantColor.hsl;
  } else {
    return adjustLightness(
      variantColor,
      variantColor.lightness < 10 ? 10 : -10
    );
  }
}

function getBorderColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  borderColor?: string
): string {
  if (borderColor) return borderColor;

  const variantColor = mapVariantColor(variant, theme);
  return adjustLightness(variantColor, variantColor.lightness < 30 ? 30 : -20);
}

function getTextColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  textColor?: string
): string {
  if (textColor) {
    return textColor;
  } else if (variant) {
    switch (variant) {
      case 'primary':
        return theme.palette.typography.onPrimary.hsl;
      case 'secondary':
        return theme.palette.typography.onSecondary.hsl;
      case 'tertiary':
        return theme.palette.typography.onTertiary.hsl;
      case 'negative':
        return theme.palette.typography.onError.hsl;
      case 'positive':
        return theme.palette.typography.onSuccess.hsl;
    }
  } else {
    return theme.palette.typography.onPrimary.hsl;
  }
}

function mapVariantColor(
  variant: ChipVariant | undefined,
  theme: Theme
): PaletteColor {
  if (variant) {
    switch (variant) {
      case 'primary':
        return theme.palette.core.primary;
      case 'secondary':
        return theme.palette.core.secondary;
      case 'tertiary':
        return theme.palette.core.tertiary;
      case 'negative':
        return theme.palette.core.error;
      case 'positive':
        return theme.palette.core.success;
    }
  } else {
    return theme.palette.core.primary;
  }
}
