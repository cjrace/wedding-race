require("@testing-library/jest-dom");
const { toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Mantine animates AppShell collapse and Transition status changes via RAF /
// setTimeout callbacks that fire after React's act scope has closed. The state
// updates are harmless (the library is the one driving them) but they emit
// "not wrapped in act(...)" warnings under React 19 + jsdom. Suppress only
// those specific Mantine-internal warnings; turn anything else into a thrown
// error so a regression fails the suite instead of scrolling past unnoticed.
//
// React calls `console.error("An update to %s inside a test...", componentName)`
// with the component name in args[1] — see react-dom-client.development.js.
const ALLOWED_ACT_COMPONENTS = new Set([
  "@mantine/core/Transition",
  "@mantine/core/AppShell",
]);

const originalConsoleError = console.error;
console.error = (...args) => {
  const format = typeof args[0] === "string" ? args[0] : "";
  const componentName = typeof args[1] === "string" ? args[1] : "";

  if (
    format.includes("An update to %s inside a test was not wrapped in act(") &&
    ALLOWED_ACT_COMPONENTS.has(componentName)
  ) {
    return;
  }

  originalConsoleError(...args);
  throw new Error(
    `Unexpected console.error in test: ${format} ${componentName}`.trim(),
  );
};
