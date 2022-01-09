import styled, { useTheme } from 'styled-components';

import { Theme } from '../../types';
import { Colors } from '../../types/Theme';
import cssVar from '../../utils/cssVar';

export default function ThemeShowcase() {
  const theme: Theme = useTheme() as unknown as Theme;
  return (
    <Container>
      <h4>Core</h4>
      <Swatch>
        <ColorBox
          displayColor={theme.palette.primary}
          textColor={cssVar('color-font-on-primary')}
          name={'Primary'}
        />
        <ColorBox
          displayColor={theme.palette.secondary}
          textColor={cssVar('color-font-on-secondary')}
          name={'Secondary'}
        />
        <ColorBox
          displayColor={theme.palette.tertiary}
          textColor={cssVar('color-font-on-tertiary')}
          name={'Tertiary'}
        />
        <ColorBox
          displayColor={theme.palette.error}
          textColor={cssVar('color-font-on-error')}
          name={'Error'}
        />
        <ColorBox
          displayColor={theme.palette.success}
          textColor={cssVar('color-font-on-success')}
          name={'Success'}
        />
        <ColorBox
          displayColor={theme.palette.background}
          textColor={cssVar('color-font-on-background')}
          name={'Background'}
        />
        <ColorBox
          displayColor={theme.palette.surface}
          textColor={cssVar('color-font-on-surface')}
          name={'Surface'}
        />
      </Swatch>
      <ColorSwatchRow colorName={'gray'} colors={theme.palette.colors} />
      <ColorSwatchRow colorName={'blue'} colors={theme.palette.colors} />
      <ColorSwatchRow colorName={'red'} colors={theme.palette.colors} />
      <ColorSwatchRow colorName={'green'} colors={theme.palette.colors} />
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
  gap: 4px;
`;

function ColorSwatchRow(props: {
  colorName: 'gray' | 'blue' | 'red' | 'green';
  colors: Colors;
}) {
  return (
    <>
      <Split />
      <h4>
        {props.colorName.charAt(0).toUpperCase() + props.colorName.slice(1)}
      </h4>
      <Swatch>
        <ColorBox
          displayColor={props.colors[props.colorName]['10']}
          name={'10'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['20']}
          name={'20'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['30']}
          name={'30'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['40']}
          name={'40'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['50']}
          name={'50'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['60']}
          name={'60'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['70']}
          name={'70'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['80']}
          name={'80'}
        />
        <ColorBox
          displayColor={props.colors[props.colorName]['90']}
          name={'90'}
        />
      </Swatch>
    </>
  );
}

function ColorBox(props: {
  displayColor: string;
  textColor?: string;
  name: string;
}) {
  return (
    <ColorDisplay displayColor={props.displayColor}>
      <span
        style={{
          margin: 4,
          fontSize: '1rem',
          textShadow: '1px 1px var(--color-black)',
          color: props.textColor ?? cssVar('color-white'),
        }}
      >
        {props.name}
      </span>
    </ColorDisplay>
  );
}

const ColorDisplay = styled.div<{ displayColor: string }>`
  --size: 100px;
  height: var(--size);
  width: var(--size);
  background-color: ${(props) => props.displayColor};

  will-change: transform;
  transition: ease-in-out 200ms;
`;
