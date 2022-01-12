import styled from 'styled-components';

import { PassthroughProps } from '../../types';

import CardTypes from './Card.types';

export default function Card(props: CardTypes & PassthroughProps) {
  const Container = props.hoverable ? HoverableCardContainer : CardContainer;

  return (
    <Wrapper {...props}>
      <Container>
        {props.title && <CardTitle {...props} />}
        {props.children}
      </Container>
    </Wrapper>
  );
}

function CardTitle(props: CardTypes) {
  return (
    <CardTitleWrapper>
      <Title as={props.titleAs}>{props.title}</Title>
    </CardTitleWrapper>
  );
}

const Wrapper = styled.div``;

const CardContainer = styled.div`
  background-color: var(--color-surface);
  border-radius: var(--corner-radius-medium);
  margin: var(--spacing-2);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-on-background-elevation-low);
`;

const HoverableCardContainer = styled(CardContainer)`
  will-change: transform;
  transition: ease-in-out 400ms;

  ${Wrapper}:hover & {
    transform: translateY(-4px);
    transition: ease-in-out 250ms;
    box-shadow: var(--shadow-on-background-elevation-medium);
  }
`;

const CardTitleWrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-30);
  margin: var(--spacing-3) 0;
  padding-bottom: var(--spacing-3);
`;

const Title = styled.h5``;
