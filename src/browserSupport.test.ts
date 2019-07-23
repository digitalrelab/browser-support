import { clear, mockUserAgent } from "jest-useragent-mock"

import { IE_11_USERAGENT, CHROME_74_USERAGENT } from "./testUtils"
import { browserSupport } from "./browserSupport"

describe("browserSupport", (): void => {
  afterEach(clear)

  describe("when IE is disabled", (): void => {
    test("return false when userAgent is IE", (): void => {
      mockUserAgent(IE_11_USERAGENT)

      const isIESupported = browserSupport({ ie: false })

      expect(isIESupported).toBeFalsy()
    })

    test("return true when userAgent is Chrome", (): void => {
      mockUserAgent(CHROME_74_USERAGENT)

      const isChromeSupported = browserSupport({ ie: false })

      expect(isChromeSupported).toBeTruthy()
    })
  })

  describe("when options.shouldReturnSupportedBrowsers === true", (): void => {
    describe("when IE is disabled", (): void => {
      mockUserAgent(IE_11_USERAGENT)

      test("return all browsers but IE for supported browsers", (): void => {
        const [, expectedSupportedBrowsers] = browserSupport(
          { ie: false },
          { shouldReturnSupportedBrowsers: true },
        )

        const actualSupportedBrowsers = [
          "chrome",
          "firefox",
          "safari",
          "opera",
          "edge",
        ]

        expect(expectedSupportedBrowsers).toEqual(actualSupportedBrowsers)
      })
    })

    describe("when all browsers but Chrome are disabled", (): void => {
      test("return only Chrome for supported browsers", (): void => {
        const [, expectedSupportedBrowsers] = browserSupport(
          {
            ie: false,
            opera: false,
            safari: false,
            firefox: false,
            edge: false,
          },
          { shouldReturnSupportedBrowsers: true },
        )

        const actualSupportedBrowsers = ["chrome"]

        expect(expectedSupportedBrowsers).toEqual(actualSupportedBrowsers)
      })
    })
  })
})
