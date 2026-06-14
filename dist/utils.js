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
    const isPwa = window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true; // iOS Safari only
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
/**
 * Initializes Bootstrap if it already hasn't. This will ensure Bootstrap is loaded and there are no race conditions.
 *
 * Usage:
 * const bs = await getBootstrap();
 * bsModal = bs.Modal.getOrCreateInstance(modalEl);
 */
// This promise caches the import so it only ever triggers once app-wide
let bootstrapPromise = null;
export function getBootstrap() {
    if (typeof window === 'undefined')
        return Promise.resolve(null);
    if (window.bootstrap) {
        return Promise.resolve(window.bootstrap);
    }
    if (!bootstrapPromise) {
        bootstrapPromise = import('bootstrap').then((bootstrap) => {
            window.bootstrap = bootstrap;
            return bootstrap;
        });
    }
    return bootstrapPromise;
}
