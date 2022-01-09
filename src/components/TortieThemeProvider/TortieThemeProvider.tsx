import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultThemeLight, GlobalStyle } from '../../styles';
import Theme from '../../types/Theme';

export default function TortieThemeProvider(props: {
  theme?: Theme;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={props.theme ?? DefaultThemeLight}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
}
