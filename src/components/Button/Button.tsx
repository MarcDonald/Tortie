import styled from 'styled-components';

import { PassthroughProps, Theme } from '../../types';
import { adjustLightness, color, cssVar } from '../../utils';

import ButtonTypes, { ButtonSize, ButtonVariant } from './Button.types';

export default function Button(props: ButtonTypes & PassthroughProps) {
  const defaultSize: ButtonSize = 'medium';
  const defaultVariant: ButtonVariant = 'primary';

  return (
    <StyledButton
      {...props}
      variant={props.variant ?? defaultVariant}
      size={props.size ?? defaultSize}
    >
      <Shadow size={props.size ?? 'medium'} />
      <Edge
        variant={props.variant ?? defaultVariant}
        size={props.size ?? defaultSize}
        backgroundColor={props.backgroundColor}
      />
      <Front
        {...props}
        variant={props.variant ?? defaultVariant}
        size={props.size ?? defaultSize}
        foregroundColor={props.foregroundColor}
        onClick={null}
      >
        {props.children ? props.children : props.text}
      </Front>
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  // !important because it needs to be static behind the front
  padding: 0 !important;

  position: relative;
  background: transparent;
  color: ${({ variant }) => getTextColor(variant)};
  border-radius: var(--corner-radius-medium);
  border: none;
  cursor: pointer;
  outline-offset: 4px;

  /* Hides the tap box on mobile */
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  transition: filter 600ms;

  :focus:not(:focus-visible) {
    outline: none;
  }

  :hover:not(:disabled) {
    transition: filter 250ms;
    filter: brightness(110%);
  }

  :disabled {
    cursor: not-allowed;
  }
`;

const Front = styled.span<
  {
    size: ButtonSize;
    variant: ButtonVariant;
    foregroundColor?: string;
  } & PassthroughProps
>`
  // !important because otherwise it will not match the back
  width: 100% !important;
  margin: 0 !important;

  display: block;
  padding: ${({ size }) => getPadding(size)};
  border-radius: var(--corner-radius-medium);
  color: var(--color-on-primary);
  background-color: ${({ variant, foregroundColor }) =>
    getForegroundColor(variant, foregroundColor)};
  font-size: ${({ size }) => getFontSize(size)};

  will-change: transform;
  transform: translateY(-2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1),
    background-color 250ms;

  ${StyledButton}:hover:not(${StyledButton}:disabled) & {
    transform: translateY(-6px);
    transition: transform 300ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${StyledButton}:active:not(${StyledButton}:disabled) & {
    transform: translateY(-2px);
    transition: transform 30ms;
  }

  ${StyledButton}:disabled & {
    transition: background-color 250ms;
    background-color: ${({ theme }) => theme.palette.base.gray.hsla(0.8)};
  }
`;

const Shadow = styled.span<{ size: ButtonSize }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--corner-radius-medium);
  filter: blur(4px);
  background: hsl(0deg 0% 0% / 0.25);
  transform: translateY(2px);

  ${StyledButton}:hover:not(${StyledButton}:disabled) & {
    transform: translateY(4px);
  }

  ${StyledButton}:active:not(${StyledButton}:disabled) & {
    transform: translateY(1px);
  }
`;

const Edge = styled.span<{
  size: ButtonSize;
  variant: ButtonVariant;
  backgroundColor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--corner-radius-medium);
  background-color: ${({ variant, backgroundColor, theme }) =>
    getBackgroundColor(variant, theme, backgroundColor)};
`;

function getForegroundColor(
  variant: ButtonVariant,
  foregroundColor?: string
): string {
  if (foregroundColor) return foregroundColor;

  switch (variant) {
    case 'primary':
      return color('primary');
    case 'secondary':
      return color('secondary');
    case 'negative':
      return color('error');
    case 'positive':
      return color('success');
  }
}

function getBackgroundColor(
  variant: ButtonVariant,
  theme: Theme,
  backgroundColor?: string
): string {
  if (backgroundColor) return backgroundColor;

  switch (variant) {
    case 'primary':
      return color('secondary');
    case 'secondary':
      return adjustLightness(theme.palette.core.tertiary, 15);
    case 'negative':
      return adjustLightness(theme.palette.core.error, -15);
    case 'positive':
      return adjustLightness(theme.palette.core.success, -15);
  }
}

function getTextColor(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return color('onPrimary');
    case 'secondary':
      return color('onSecondary');
    case 'negative':
      return color('onError');
    case 'positive':
      return color('onSuccess');
  }
}

function getPadding(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return cssVar('spacing-2');
    case 'medium':
      return cssVar('spacing-4');
    case 'large':
      return `${cssVar('spacing-5')} ${cssVar('spacing-7')}`;
  }
}

function getFontSize(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return cssVar('font-size-3');
    case 'medium':
      return cssVar('font-size-4');
    case 'large':
      return cssVar('font-size-5');
  }
}
