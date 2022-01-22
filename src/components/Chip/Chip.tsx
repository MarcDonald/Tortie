import styled from 'styled-components';

import { PassthroughProps, Theme } from '../../types';
import { color, colorA } from '../../utils';
import { ButtonSize } from '../Button/Button.types';

import ChipTypes, { ChipVariant } from './Chip.types';

export default function Chip(props: ChipTypes & PassthroughProps) {
  return (
    <Container {...props} variant={props.variant}>
      <Shadow size={props.size ?? 'medium'} />
      <Background
        variant={props.variant}
        backgroundColor={props.colors?.backgroundColor}
      />
      <Front
        {...props}
        variant={props.variant}
        foregroundColor={props.colors?.foregroundColor}
        textColor={props.colors?.textColor}
      >
        {props.children ? props.children : props.text}
      </Front>
    </Container>
  );
}

const Container = styled.span<{
  variant?: ChipVariant;
  disabled?: boolean;
}>`
  // !important because it needs to be static behind the front
  padding: 0 !important;

  width: fit-content;
  display: block;
  position: relative;
  background: transparent;
  border-radius: var(--corner-radius-large);
  border: none;
  opacity: 80%;

  ${({ disabled }) => {
    if (disabled) {
      return 'filter: grayscale(75%); cursor: not-allowed; opacity: 60%;';
    }
  }}
`;

const Front = styled.span<
  {
    variant?: ChipVariant;
    foregroundColor?: string;
    textColor?: string;
  } & PassthroughProps
>`
  // !important because otherwise it will not match the back
  width: 100% !important;
  margin: 0 !important;

  display: block;
  padding: var(--spacing-2);
  border-radius: var(--corner-radius-large);
  color: ${({ variant, theme, textColor }) =>
    getTextColor(variant, theme, textColor)};
  background-color: ${({ variant, theme, foregroundColor }) =>
    getForegroundColor(variant, theme, foregroundColor)};
  font-size: var(--font-size-1);
  transform: translateY(-1px);
`;

function getForegroundColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  foregroundColor: string | undefined
): string {
  if (foregroundColor) return foregroundColor;
  switch (variant) {
    case 'primary':
      return color('primary');
    case 'secondary':
      return color('secondary');
    case 'tertiary':
      return color('tertiary');
    case 'negative':
      return color('error');
    case 'positive':
      return color('success');
    default:
      return color('primary');
  }
}

function getTextColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  textColor: string | undefined
): string {
  if (textColor) return textColor;
  switch (variant) {
    case 'primary':
      return color('onPrimary');
    case 'secondary':
      return color('onSecondary');
    case 'tertiary':
      return color('onTertiary');
    case 'negative':
      return color('onError');
    case 'positive':
      return color('onSuccess');
    default:
      return color('onPrimary');
  }
}

const Shadow = styled.span<{ size: ButtonSize }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--corner-radius-large);
  filter: blur(4px);
  background: hsl(0deg 0% 0% / 0.25);
  transform: translateY(2px);
`;

const Background = styled.span<{
  variant?: ChipVariant;
  backgroundColor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--corner-radius-large);
  background-color: ${({ variant, theme, backgroundColor }) =>
    getBackgroundColor(variant, theme, backgroundColor)};
`;

function getBackgroundColor(
  variant: ChipVariant | undefined,
  theme: Theme,
  backgroundColor: string | undefined
): string {
  if (backgroundColor) return backgroundColor;
  switch (variant) {
    case 'primary':
      return color('secondary');
    case 'secondary':
      return color('tertiary');
    case 'tertiary':
      return colorA('tertiary', 'core', 0.6, theme.palette);
    case 'negative':
      return colorA('error', 'core', 0.6, theme.palette);
    case 'positive':
      return colorA('success', 'core', 0.6, theme.palette);
    default:
      return color('secondary');
  }
}
