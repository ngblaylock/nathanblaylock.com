import Bowser from 'bowser';

/**
 * Gets device information including OS, browser, and platform details.
 * @returns Device information including OS, browser, and platform details. Only available in browser environment.
 */
export const getClientEnvironment = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const platform = parser.getPlatform();

  const isTouch = 'ontouchstart' in window;

  const isIos = os.name === 'iOS';
  const isAndroid = os.name === 'Android';
  const isSafari = browser.name === 'Safari';
  const isChrome = browser.name === 'Chrome';
  const isFirefox = browser.name === 'Firefox';

  // iPadOS often identifies as macOS but has touch
  const isIPadOSSafari = os.name === 'macOS' && isSafari && isTouch;
  const isIosSafari = (isIos && isSafari) || isIPadOSSafari;

  // Detect PWA (standalone mode)
  const isPwa =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true; // iOS Safari only

  return {
    isIos,
    isAndroid,
    isSafari,
    isChrome,
    isFirefox,
    isIosSafari,
    isPwa,
    isMobile: platform.type === 'mobile',
    isTablet: platform.type === 'tablet',
    isDesktop: platform.type === 'desktop',
    osName: os.name,
    browserName: browser.name,
  };
};
