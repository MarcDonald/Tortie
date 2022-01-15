import styled from 'styled-components';

import { PassthroughProps } from '../../types';

import CardTypes from './Card.types';

export default function Card(props: CardTypes & PassthroughProps) {
  const Container = props.hoverable ? HoverableCardContainer : CardContainer;

  return (
    <Container as={props.cardAs} {...props}>
      {props.title && (
        <TitleWrapper>
          <Title as={props.titleAs}>{props.title}</Title>
        </TitleWrapper>
      )}
      {props.content ? (
        <ContentWrapper>
          <Content as={props.contentAs}>{props.content}</Content>
        </ContentWrapper>
      ) : (
        props.children
      )}
    </Container>
  );
}

const CardContainer = styled.article`
  width: fit-content;
  background-color: var(--color-surface);
  border-radius: var(--corner-radius-medium);
  margin: var(--spacing-2);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-elevation-low);
`;

const HoverableCardContainer = styled(CardContainer)`
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: ease-in-out 300ms;

    :hover {
      transform: translateY(-4px);
      transition: ease-in-out 200ms;
      box-shadow: var(--shadow-elevation-medium);
    }
  }
`;

const TitleWrapper = styled.div`
  margin: var(--spacing-3) 0;
`;

const Title = styled.h5``;

const ContentWrapper = styled.div`
  width: fit-content;
`;

const Content = styled.p``;
