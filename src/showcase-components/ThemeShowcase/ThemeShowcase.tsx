import styled, { useTheme } from 'styled-components';

import { BaseColor, BaseColorPalette, Theme } from '../../types';
import { color } from '../../utils';

export default function ThemeShowcase() {
  const theme: Theme = useTheme() as unknown as Theme;
  return (
    <Container>
      <h3>Core</h3>
      <Swatch>
        <ColorBox
          displayColor={theme.palette.core.primary.hsl}
          textColor={color('onPrimary')}
          name={'Primary'}
        />
        <ColorBox
          displayColor={theme.palette.core.secondary.hsl}
          textColor={color('onSecondary')}
          name={'Secondary'}
        />
        <ColorBox
          displayColor={theme.palette.core.tertiary.hsl}
          textColor={color('onTertiary')}
          name={'Tertiary'}
        />
        <ColorBox
          displayColor={theme.palette.core.error.hsl}
          textColor={color('onError')}
          name={'Error'}
        />
        <ColorBox
          displayColor={theme.palette.core.success.hsl}
          textColor={color('onSuccess')}
          name={'Success'}
        />
        <ColorBox
          displayColor={theme.palette.core.background.hsl}
          textColor={color('onBackground')}
          name={'Background'}
          border
        />
        <ColorBox
          displayColor={theme.palette.core.surface.hsl}
          textColor={color('onSurface')}
          name={'Surface'}
          border
        />
      </Swatch>
      <h3>Base</h3>
      <ColorSwatchesForPalette colorPalette={theme.palette.base} />
      <h3>Core Swatch</h3>
      <ColorSwatchesForPalette colorPalette={theme.palette.core} />
    </Container>
  );
}

const Split = styled.hr`
  margin: 8px;
`;

const Container = styled.main`
  height: 100%;
  width: 100%;
`;

const Swatch = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
`;

function ColorSwatchesForPalette({ colorPalette }: { colorPalette: any }) {
  const swatches = [];

  for (const key in colorPalette) {
    swatches.push(
      <ColorSwatchRow
        colorName={key as unknown as BaseColor}
        // Can disable linting because we're accessing the object based on the keys we get from looping
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        colors={colorPalette}
        key={key}
      />
    );
  }

  return <>{swatches.map((swatch) => swatch)}</>;
}

function ColorSwatchRow(props: {
  colorName: BaseColor;
  colors: BaseColorPalette;
}) {
  const loopArray: number[] = new Array(10);
  for (let i = 1; i <= 10; i++) {
    loopArray[i] = i / 10;
  }
  return (
    <>
      <Split />
      <h5>
        {props.colorName.charAt(0).toUpperCase() + props.colorName.slice(1)}
      </h5>
      <Swatch>
        {loopArray.map((i) => {
          return (
            <ColorBox
              key={`${props.colorName}-${i}`}
              displayColor={props.colors[props.colorName].hsla(i)}
              name={i.toString()}
            />
          );
        })}
      </Swatch>
    </>
  );
}

function ColorBox(props: {
  displayColor: string;
  textColor?: string;
  name: string;
  border?: boolean;
}) {
  return (
    <ColorDisplay displayColor={props.displayColor} border={props.border}>
      <span
        style={{
          margin: 4,
          fontSize: '1rem',
          textShadow: '1px 1px var(--color-black)',
          color: props.textColor ?? color('white'),
        }}
      >
        {props.name}
      </span>
    </ColorDisplay>
  );
}

const ColorDisplay = styled.div<{ displayColor: string; border?: boolean }>`
  --size: 100px;
  height: var(--size);
  width: var(--size);
  background-color: ${(props) => props.displayColor};
  border-radius: var(--corner-radius-medium);
  border: ${(props) =>
    `1px solid ${props.border ? color('black') : 'transparent'}`};

  will-change: transform;
  transition: ease-in-out 200ms;
`;
