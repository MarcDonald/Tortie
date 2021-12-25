import { CSSProperties } from 'react';
import styled from 'styled-components';

import '../../styles/global.scss';

import { DefaultBreakpoints } from '../../styles';
import { PassthroughProps } from '../../types';

import ScreenSizeDevHelperTypes from './ScreenSizeDevHelper.types';

export default function ScreenSizeDevHelper(
  props: ScreenSizeDevHelperTypes & PassthroughProps
) {
  const getDisplay = (): string => {
    if (props.forceShow) return 'visible';

    return process.env.NODE_ENV === 'production' ? 'none' : 'visible';
  };

  return (
    <Span
      style={
        {
          '--display': getDisplay(),
        } as CSSProperties
      }
      {...props}
    />
  );
}

const Span = styled.span<ScreenSizeDevHelperTypes & PassthroughProps>`
  display: var(--display);
  position: fixed;
  top: 0;
  padding: 4px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor ?? 'yellow'};
  color: ${(props) => props.textColor ?? 'black'};
  opacity: ${(props) => props.opacity ?? '50%'};

  &::after {
    content: 'Phone';
  }

  @media (min-width: ${(props) =>
      props.breakpoints?.tabletMin ?? DefaultBreakpoints.tabletMin}) {
    &::after {
      content: 'Tablet';
    }
  }

  @media (min-width: ${(props) =>
      props.breakpoints?.laptopMin ?? DefaultBreakpoints.laptopMin}) {
    &::after {
      content: 'Laptop';
    }
  }

  @media (min-width: ${(props) =>
      props.breakpoints?.desktopMin ?? DefaultBreakpoints.desktopMin}) {
    &::after {
      content: 'Desktop';
    }
  }

  @media (min-width: ${(props) =>
      props.breakpoints?.largeDesktopMin ??
      DefaultBreakpoints.largeDesktopMin}) {
    &::after {
      content: 'Large Desktop';
    }
  }
`;
