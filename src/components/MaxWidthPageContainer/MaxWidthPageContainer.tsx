import styled from 'styled-components';

import { PassthroughProps } from '../../types';

import MaxWidthPageContainerTypes from './MaxWidthPageContainer.types';

export default function MaxWidthPageContainer(
  props: MaxWidthPageContainerTypes & PassthroughProps
) {
  return <Container {...props}>{props.children}</Container>;
}

const Container = styled.div<MaxWidthPageContainerTypes & PassthroughProps>`
  height: 100%;
  width: 100%;
  max-width: var(--max-page-width);
  margin: 0 auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  background-color: var(--color-background);
`;
