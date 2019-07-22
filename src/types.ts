export type TBrowsersRules = { [key in TBrowserKey]?: TBrowserSupportRules }
export type TBrowserKey =
  | "ie"
  | "firefox"
  | "chrome"
  | "safari"
  | "opera"
  | "edge"
type TBrowserSupportRules = boolean | number
