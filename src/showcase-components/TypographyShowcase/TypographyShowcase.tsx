import styled from 'styled-components';

import TypographyShowcaseTypes from './TypographyShowcase.types';

export default function TypographyShowcase(props: TypographyShowcaseTypes) {
  const { exampleSentence } = props;

  return (
    <Container {...props}>
      {props.semanticTags && (
        <section>
          <h1>h1 - {exampleSentence}</h1>
          <h2>h2 - {exampleSentence}</h2>
          <h3>h3 - {exampleSentence}</h3>
          <h4>h4 - {exampleSentence}</h4>
          <h5>h5 - {exampleSentence}</h5>
          <h6>h6 - {exampleSentence}</h6>
          <p>p - {exampleSentence}</p>
          <em style={{ display: 'block' }}>em - {exampleSentence}</em>
          <strong>strong - {exampleSentence}</strong>
          <span style={{ display: 'block' }}>span - {exampleSentence}</span>
          <code style={{ display: 'block' }}>code - {exampleSentence}</code>
          <figcaption>figcaption - {exampleSentence}</figcaption>
          <Split />
        </section>
      )}

      {props.fontSizes && (
        <section>
          <p style={{ fontSize: 'var(--font-size-1)' }}>
            Font Size 1 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-2)' }}>
            Font Size 2 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-3)' }}>
            Font Size 3 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-4)' }}>
            Font Size 4 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-5)' }}>
            Font Size 5 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-6)' }}>
            Font Size 6 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-7)' }}>
            Font Size 7 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-8)' }}>
            Font Size 8 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-9)' }}>
            Font Size 9 - {exampleSentence}
          </p>
          <p style={{ fontSize: 'var(--font-size-10)' }}>
            Font Size 10 - {exampleSentence}
          </p>
          <Split />
        </section>
      )}

      {props.fontWeights && (
        <section>
          <p style={{ fontWeight: 'var(--font-thin)' }}>
            Font Weight Thin - {exampleSentence}
          </p>
          <p style={{ fontWeight: 'var(--font-normal)' }}>
            Font Weight Normal - {exampleSentence}
          </p>
          <p style={{ fontWeight: 'var(--font-medium)' }}>
            Font Weight Medium - {exampleSentence}
          </p>
          <p style={{ fontWeight: 'var(--font-semibold)' }}>
            Font Weight Semibold - {exampleSentence}
          </p>
          <p style={{ fontWeight: 'var(--font-bold)' }}>
            Font Weight Bold - {exampleSentence}
          </p>
          <Split />
        </section>
      )}
    </Container>
  );
}

const Container = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  strong,
  em,
  figcaption {
    font-family: ${(props: any) => {
      if (props.family === 'serif') {
        return 'var(--font-serif)';
      } else if (props.family === 'sans-serif') {
        return 'var(--font-sans-serif)';
      } else if (props.family === 'monospace') {
        return 'var(--font-monospace)';
      }
    }};
  }
`;

const Split = styled.hr`
  margin: 8px;
`;
