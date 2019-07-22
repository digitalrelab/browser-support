import { isBrowserSupported } from "./isBrowserSupported"

test("return not supported when IE is disabled", (): void => {
  const isIE11Supported = isBrowserSupported(
    { ie: false },
    { name: "Internet Explorer", version: "11" },
  )

  const isIE10Supported = isBrowserSupported(
    { ie: false },
    { name: "Internet Explorer", version: "10" },
  )

  const isIE9Supported = isBrowserSupported(
    { ie: false },
    { name: "Internet Explorer", version: "9" },
  )

  const isIE8Supported = isBrowserSupported(
    { ie: false },
    { name: "Internet Explorer", version: "8" },
  )

  expect(isIE11Supported).toBeFalsy()
  expect(isIE10Supported).toBeFalsy()
  expect(isIE9Supported).toBeFalsy()
  expect(isIE8Supported).toBeFalsy()
})

test("return not supported when Chrome is disabled", (): void => {
  const isChromeSupported = isBrowserSupported(
    { chrome: false },
    { name: "Chrome", version: "49" },
  )

  expect(isChromeSupported).toBe(false)
})

test("return Chrome is supported when IE is not supported", (): void => {
  const isChromeSupported = isBrowserSupported(
    { ie: false },
    { name: "Chrome", version: "49" },
  )

  expect(isChromeSupported).toBe(true)
})

test("return IE10 is not supported when IE11-only is supported", (): void => {
  const isIE11Supported = isBrowserSupported(
    { ie: 10 },
    { name: "Internet Explorer", version: "11" },
  )

  expect(isIE11Supported).toBeTruthy()
})

test("return IE and Chrome are not supported when both are disabled", (): void => {
  const isChromeSupported = isBrowserSupported(
    { ie: false, chrome: false },
    { name: "Chrome", version: "49" },
  )

  const isIESupported = isBrowserSupported(
    { ie: false, chrome: false },
    { name: "Internet Explorer", version: "11" },
  )

  expect(isChromeSupported).toBeFalsy()
  expect(isIESupported).toBeFalsy()
})
