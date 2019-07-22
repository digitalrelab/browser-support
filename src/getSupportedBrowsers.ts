import { TBrowserKey, TBrowsersRules } from "./types"

export function getSupportedBrowsers(
  browsersRules: TBrowsersRules,
): TBrowserKey[] {
  const browsersKeys = Object.keys(browsersRules)

  return browsersKeys.filter((browserKey: TBrowserKey): boolean => {
    const browserRule = browsersRules[browserKey]

    if (typeof browserRule === "undefined") {
      return true
    }

    if (browserRule === true) {
      return true
    }

    return false
  }) as TBrowserKey[]
}
