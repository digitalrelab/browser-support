import Bowser from "bowser"

import { TBrowsersRules } from "./types"
import { isBrowserSupported } from "./isBrowserSupported"

export function browserSupport(browsersRules: TBrowsersRules): boolean {
  const bowser = Bowser.getParser(window.navigator.userAgent)
  const currentBrowser = bowser.getBrowser()

  const isCurrentBrowserSupported = isBrowserSupported(
    browsersRules,
    currentBrowser,
  )

  return isCurrentBrowserSupported
}

export * from "./getSupportedBrowsers"
