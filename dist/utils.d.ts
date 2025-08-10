/**
 * Gets device information including OS, browser, and platform details.
 * @returns Device information including OS, browser, and platform details. Only available in browser environment.
 */
export declare const getClientEnvironment: () => {
    isIos: boolean;
    isAndroid: boolean;
    isSafari: boolean;
    isChrome: boolean;
    isFirefox: boolean;
    isIosSafari: boolean;
    isPwa: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    osName: string | undefined;
    browserName: string | undefined;
};
