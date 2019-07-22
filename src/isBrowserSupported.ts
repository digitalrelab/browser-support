import { TBrowsersRules, TBrowserKey } from "./types"

export function isBrowserSupported(
  browsersRules: TBrowsersRules,
  currentBrowser: Bowser.Parser.Details,
): boolean {
  if (!currentBrowser.name) {
    return true
  }

  const currentBrowserKey = getBrowserKeyByName(currentBrowser.name)

  if (!currentBrowserKey) {
    return true
  }

  const currentBrowserRule = browsersRules[currentBrowserKey]

  if (typeof currentBrowserRule === "number") {
    return Number(currentBrowser.version) > currentBrowserRule
  }

  return currentBrowserRule === false ? false : true
}

function getBrowserKeyByName(name: string): TBrowserKey | null {
  switch (name) {
    case "Internet Explorer":
      return "ie"

    case "Chrome":
      return "chrome"

    case "Firefox":
      return "firefox"

    case "Opera":
      return "opera"

    case "Safari":
      return "safari"

    case "Edge":
      return "edge"

    default:
      return null
  }
}
