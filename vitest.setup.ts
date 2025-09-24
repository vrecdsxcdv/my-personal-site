import '@testing-library/jest-dom/vitest'
// Polyfills for JSDOM
// Ensure matchMedia is a callable function
// @ts-expect-error test env
if (typeof window.matchMedia !== 'function') {
  // @ts-expect-error test env
  window.matchMedia = () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
    media: '',
    onchange: null,
  })
}

if (!('IntersectionObserver' in globalThis)) {
  // @ts-expect-error test env
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
}
