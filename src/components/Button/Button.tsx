import styled from 'styled-components';

import { PassthroughProps } from '../../types';

import ButtonTypes from './Button.types';

export default function Button(props: ButtonTypes & PassthroughProps) {
  return (
    <StyledButton {...props}>
      <span>{props.text}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonTypes & PassthroughProps>`
  border-radius: var(--corner-radius-small);
  padding: var(--spacing-5);
  border: none;
  background-color: var(--color-gray-50);
  color: var(--color-font-primary-inverse);
  font-size: var(--font-size-3);
`;
