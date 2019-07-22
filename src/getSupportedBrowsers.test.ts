import { getSupportedBrowsers } from "./getSupportedBrowsers"
import { TBrowserKey } from "./types"

test("return all browsers if no one is disabled", (): void => {
  const expectedSupportedBrowsers = getSupportedBrowsers({
    ie: undefined,
    chrome: undefined,
    opera: undefined,
    firefox: undefined,
    safari: undefined,
  })

  const actualSupportedBrowsers = ["ie", "chrome", "opera", "firefox", "safari"]

  expect(expectedSupportedBrowsers).toEqual(actualSupportedBrowsers)
})

test("return all but ie if it is disabled", (): void => {
  const expectedSupportedBrowsers = getSupportedBrowsers({
    ie: false,
    chrome: undefined,
    opera: undefined,
    firefox: undefined,
    safari: undefined,
  })

  const actualSupportedBrowsers = ["chrome", "opera", "firefox", "safari"]

  expect(expectedSupportedBrowsers).toEqual(actualSupportedBrowsers)
})

test("return none if all browsers are not supported", (): void => {
  const expectedSupportedBrowsers = getSupportedBrowsers({
    ie: false,
    chrome: false,
    opera: false,
    firefox: false,
    safari: false,
  })

  const actualSupportedBrowsers: TBrowserKey[] = []

  expect(expectedSupportedBrowsers).toEqual(actualSupportedBrowsers)
})
