export type TBrowsersRules = { [key in TBrowserKey]?: TBrowserSupportRules }
export type TBrowserKey = "ie" | "firefox" | "chrome" | "safari" | "opera"
type TBrowserSupportRules = boolean | number
