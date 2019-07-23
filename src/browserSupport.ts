import Bowser from "bowser"

import { TBrowsersRules, TBrowserKey } from "./types"
import { isBrowserSupported } from "./isBrowserSupported"
import { getSupportedBrowsers } from "./getSupportedBrowsers"

const DEFAULT_BROWSERS_RULES: TBrowsersRules = {
  ie: true,
  chrome: true,
  firefox: true,
  safari: true,
  opera: true,
  edge: true,
}

export function browserSupport(browsersRules: TBrowsersRules): boolean
export function browserSupport(
  browsersRules: TBrowsersRules,
  options: { shouldReturnSupportedBrowsers: true },
): [boolean, TBrowserKey[]]

export function browserSupport(
  browsersRules: TBrowsersRules,
  options?: IBrowserSupportOptions,
): boolean | [boolean, TBrowserKey[]] {
  const bowser = Bowser.getParser(window.navigator.userAgent)
  const currentBrowser = bowser.getBrowser()

  const isCurrentBrowserSupported = isBrowserSupported(
    browsersRules,
    currentBrowser,
  )

  if (options && options.shouldReturnSupportedBrowsers) {
    const supportedBrowsers = getSupportedBrowsers({
      ...DEFAULT_BROWSERS_RULES,
      ...browsersRules,
    })

    return [isCurrentBrowserSupported, supportedBrowsers]
  }

  return isCurrentBrowserSupported
}

interface IBrowserSupportOptions {
  shouldReturnSupportedBrowsers: boolean
}
