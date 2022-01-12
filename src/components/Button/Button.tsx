import styled from 'styled-components';

import { PassthroughProps } from '../../types';
import { cssVar } from '../../utils';

import ButtonTypes, { ButtonSize, ButtonVariant } from './Button.types';

export default function Button(props: ButtonTypes & PassthroughProps) {
  const onClick = props.disabled ? null : props.onClick;

  return props.variant === 'ghost' ? (
    <GhostButton {...props} onClick={onClick}>
      <Text size={props.size}>{props.text}</Text>
    </GhostButton>
  ) : (
    <StyledButton {...props} onClick={onClick}>
      <Text size={props.size}>{props.text}</Text>
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonTypes & PassthroughProps>`
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-on-background-elevation-low);
  border-radius: ${({ size }) =>
    size ? getCornerRadius(size) : getCornerRadius('medium')};
  padding: ${({ size }) => (size ? getPadding(size) : getPadding('medium'))};
  background-color: ${({ variant }) =>
    variant ? getBackgroundColor(variant) : getBackgroundColor('primary')};
  color: ${({ variant }) =>
    variant ? getTextColor(variant) : getTextColor('primary')};

  will-change: transform;
  transition: ease-in 400ms;

  &:hover:enabled,
  &:focus:enabled {
    box-shadow: var(--shadow-on-background-elevation-medium);
    transform: scale(1.01);
    transition: ease-out 200ms;
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(--color-gray-10);
    color: var(--color-black);
  }
`;

const GhostButton = styled(StyledButton)`
  box-shadow: none;
  transition: ease-in-out 400ms;
  border: transparent 1px dashed;

  &:hover:enabled,
  &:focus:enabled {
    box-shadow: none;
    transform: none;
    transition: ease-in-out 150ms;
    border: var(--color-primary) 1px dashed;
    color: var(--color-on-background);
  }

  &:disabled {
    background-color: transparent;
    color: var(--color-gray-40);
    border: var(--color-gray-40) 1px dashed;
  }
`;

const Text = styled.span<{ size?: ButtonSize }>`
  display: block;
  font-size: ${({ size }) =>
    size ? getFontSize(size) : getFontSize('medium')};
`;

function getBackgroundColor(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return cssVar('color-primary');
    case 'secondary':
      return cssVar('color-secondary');
    case 'ghost':
      return cssVar('transparent');
  }
}

function getTextColor(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return cssVar('color-on-primary');
    case 'secondary':
      return cssVar('color-on-secondary');
    case 'ghost':
      return cssVar('color-on-background');
  }
}

function getCornerRadius(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return cssVar('corner-radius-medium');
    case 'medium':
      return cssVar('corner-radius-medium');
    case 'large':
      return cssVar('corner-radius-medium');
  }
}

function getPadding(size: ButtonSize): string {
  switch (size) {
    case 'small':
      return cssVar('spacing-2');
    case 'medium':
      return cssVar('spacing-4');
    case 'large':
      return cssVar('spacing-5');
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
