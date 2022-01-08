<div align="center">
  <a href="https://tortie.marcdonald.com">
    <img width="256" src="https://raw.githubusercontent.com/MarcDonald/tortie/main/.github/images/tortie-logo.png">
  </a>
<h1 align="center">Tortie</h1>
<h3>A React component and convenience library</h3>

<h5>VERY WIP</h5>

[![Build Status](https://github.com/MarcDonald/tortie/actions/workflows/build.yml/badge.svg)](https://github.com/MarcDonald/tortie/actions/workflows/build.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/marcdonald/tortie/blob/main/LICENSE)
[![npm Version](https://img.shields.io/npm/v/tortie.svg?style=flat)](https://npmjs.com/package/tortie)
[![npm Downloads](https://img.shields.io/npm/dm/tortie.svg?style=flat-square)](https://npmjs.org/package/tortie)
[![npm Bundle Size](https://img.shields.io/bundlephobia/min/tortie)](https://bundlephobia.com/package/tortie)

</div>

## To use

- Install using `npm` or `yarn`
- Wrap your app in the TortieThemeProvider

```jsx
import { TortieThemeProvider } from 'tortie';

return (
  <TortieThemeProvider>
    <App />
  </TortieThemeProvider>
);
```

You can also optionally pass in your own theme

```jsx
import { TortieThemeProvider } from 'tortie';

return (
  <TortieThemeProvider theme={customTheme}>
    <App />
  </TortieThemeProvider>
);
```

## OSS

https://github.com/Omnibus-Type/Asap

https://github.com/adobe-fonts/source-code-pro
