<p align="center">
  <img src="https://i.imgur.com/WWCvUgE.png" />
</p>

# React Browser Support

A simple React hook to render contents based on browser support. TypeScript ready.

![https://img.shields.io/badge/typescript-v3.5.3-blue.svg](https://img.shields.io/badge/typescript-v3.5.3-blue.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

# Requirements

- [React v16.8+](https://reactjs.org/docs/hooks-intro.html)

# Install

```shell
yarn add @digitalrelab/react-browser-support
```

or

```shell
npm install @digitalrelab/react-browser-support
```

# Quick start

```tsx
import { useBrowserSupport } from "@digitalrelab/react-browser-support"

export const App: React.FC = () => {
  const isBrowserSupported = useBrowserSupport({ ie: false })

  // Will render for IE only.
  if (!isBrowserSupported) {
    return <div>Friends don't let friends use IE.</div>
  }

  return <div>Oh yeah, your browser is great!</div>
}
```

# In depth

### useBrowserSupport(browsersRules: TBrowsersRules): boolean
This method returns `true` when current browser is actually supported. `false` otherwise.

### What are browsersRules?

The keys of browsersRules are equivalent to a browsers' names. Their values can be whether it's disabled or not (`false` or `true`), or the minimum version to run on that browser. i.e.

```tsx
useBrowserSupport({ ie: false, chrome: 48 })
```

The above means that all IE versions are disabled, and Chrome requires version higher than 48.

### Browsers available

- `chrome`
- `ie`
- `firefox`
- `safari`
- `opera`
- `edge`

# License

Brought to you by [DigitalReLab, LLC](https://starchive.io/). MIT.