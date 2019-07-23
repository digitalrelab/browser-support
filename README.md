<p align="center">
  <img src="https://i.imgur.com/WWCvUgE.png" />
</p>

# Browser Support

A simple function that determines whether the user's browser is supported or not. TypeScript ready.

[![CircleCI](https://circleci.com/gh/digitalrelab/browser-support/tree/master.svg?style=svg)](https://circleci.com/gh/digitalrelab/browser-support/tree/master)
![https://img.shields.io/badge/typescript-v3.5.3-blue.svg](https://img.shields.io/badge/typescript-v3.5.3-blue.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![MIT](https://img.shields.io/badge/license-MIT-blue.svg)


# Install

```shell
yarn add @digitalrelab/browser-support
```

or

```shell
npm install @digitalrelab/browser-support
```

# Quick start

The following is a usage demo using a React component. Nevertheless, `browser-support` works with all JavaScript frameworks.

```tsx
import React from "react"
import { browserSupport } from "@digitalrelab/browser-support"

export const App: React.FC = () => {
  const isBrowserSupported = browserSupport({ ie: false })

  // Will render for IE only.
  if (!isBrowserSupported) {
    return <div>Friends don't let friends use IE.</div>
  }

  return <div>Oh yeah, your browser is great!</div>
}
```

# In depth

## browserSupport(browsersRules: TBrowsersRules): boolean
This method returns `true` when current browser is actually supported. `false` otherwise.

### What is `browsersRules`?

The keys of `browsersRules` are equivalent to browsers' names. Their values can be whether it's disabled or not (`false` or `true`), or the minimum version to run on that browser. i.e.

```tsx
browserSupport({ ie: false, chrome: 48 })
```

The above means that all IE versions are disabled, and Chrome requires version higher than 48.

### Browsers available

- `chrome`
- `ie`
- `firefox`
- `safari`
- `opera`
- `edge`

## Returning supported browsers

From `v1.2.0`, you have the ability to retrieve supported browsers based on the user's UserAgent:

```tsx
const [isBrowserSupported, supportedBrowsers] = browserSupport(
  { ie: false },
  { shouldReturnSupportedBrowsers: true },
)

/* ["chrome", "firefox", "safari", "opera", "edge"] */
console.log(supportedBrowsers)
```

# License

Brought to you by [DigitalReLab, LLC](https://starchive.io/). MIT.