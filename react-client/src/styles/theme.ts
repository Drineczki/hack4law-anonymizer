import { DefaultTheme } from 'styled-components';

export interface CustomTheme {
  colors: {
    black: string;
    transparent: string;
    white: string;
    gray: string;
    background: string;
    primary: string;
    primaryLight: string;
    accent1: string;
    accent1Light: string;
    accent2: string;
    accent2Light: string;
    danger: string;
    dangerLight: string;
  };
  radiuses: {
    regular: number;
    large: number;
    full: string;
  };
  fontWeights: {
    thin: number;
    extraLight: number;
    light: number;
    normal: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
  };
  transitions: {
    shortAll: string;
    defaultAll: string;
    longAll: string;
  };
  boxShadows: {
    smallBlack: string;
    defaultBlack: string;
    bigBlack: string;
  };
  fontSizes: {
    superSmall: string;
    small: string;
    regular: string;
    medium: string;
    big: string;
    headingSmall: string;
    headingMedium: string;
    headingBig: string;
  };
  breakpoints: Record<Device, number>;
  mediaQueries: Record<Device, string>;
  zIndex: {
    backgroundBack: number;
    backgroundMiddle: number;
    backgroundFront: number;
    foregroundBack: number;
    foregroundMiddle: number;
    foregroundFront: number;
    stickedBack: number;
    stickedMiddle: number;
    stickedFront: number;
    modalBack: number;
    modalMiddle: number;
    modalFront: number;
  };
}

export const COLORS = {
  black: '#000000',
  transparent: 'transparent',
  white: '#ffffff',
  gray: '#c4ccde',
  background: '#f6f4fc',
  primary: '#7977fe',
  primaryLight: '#7977fe',
  accent1: '#e8246b',
  accent1Light: '#e8246b',
  accent2: '#fcbf59',
  accent2Light: '#fcbf59',
  danger: '#c0392b',
  dangerLight: '#86281e',
};

export const RADIUSES = {
  regular: 4,
  medium: 8,
  large: 12,
  full: '100%',
};

export const FONT_WEIGHTS = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const TRANSITIONS = {
  shortAll: 'all .15s ease-in-out',
  defaultAll: 'all .3s ease-in-out',
  longAll: 'all .5s ease-in-out',
};

export const SHADOWS = {
  smallBlack: '0 0.5rem 0.4rem rgba(0, 0, 0, 0.1)',
  defaultBlack: '0 0.75rem 0.5rem rgba(0, 0, 0, 0.2)',
  bigBlack: '0 1rem 1rem rgba(0, 0, 0, 0.2)',
};

export const FONT_SIZES = {
  superSmall: '.625rem', // 10px
  small: '.75rem', // 12px
  regular: '1rem', // 16px
  medium: '1.125rem', // 18px
  big: '1.375rem', // 22px
  headingSmall: '1.625rem', // 26px
  headingMedium: '1.75rem', // 28px
  headingBig: '2rem', // 32px
};

export const DEFAULTS = {
  duration_ms: 300,
  duration: '.3',
  easing: 'ease-in-out',
  transition: 'all .3s ease-in-out',
};

export enum Device {
  Desktop = 'desktop',
  DesktopS = 'desktopS',
  Laptop = 'laptop',
  LaptopS = 'laptopS',
  Tab = 'tab',
  TabS = 'tabS',
  Mobile = 'mobile',
  MobileS = 'mobileS',
  MobileXS = 'mobileXS',
}

export const BREAKPOINTS: Record<Device, number> = {
  [Device.Desktop]: 1920,
  [Device.DesktopS]: 1600,
  [Device.Laptop]: 1440,
  [Device.LaptopS]: 1150,
  [Device.Tab]: 970,
  [Device.TabS]: 780,
  [Device.Mobile]: 600,
  [Device.MobileS]: 450,
  [Device.MobileXS]: 320,
};

export const MEDIA_QUERIES = {
  ...Object.values(Device).reduce<Record<Device, string>>((acc, breakpoint) => {
    return {
      ...acc,
      [breakpoint]: `only screen and (max-width: ${BREAKPOINTS[breakpoint]}px)`,
    };
  }, {} as Record<Device, string>),
  [Device.Mobile]: `only screen and (max-width: ${BREAKPOINTS[Device.Mobile]}px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileS]}px)`,
  [Device.MobileS]: `only screen and (max-width: ${BREAKPOINTS[Device.MobileS]}px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileXS]}px)`,
  [Device.MobileXS]: `only screen and (max-width: ${BREAKPOINTS[Device.MobileXS]}px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileXS]}px)`,
};

export const Z_INDEX = {
  backgroundBack: 1,
  backgroundMiddle: 5,
  backgroundFront: 9,
  foregroundBack: 10,
  foregroundMiddle: 15,
  foregroundFront: 19,
  stickedBack: 20,
  stickedMiddle: 25,
  stickedFront: 29,
  modalBack: 30,
  modalMiddle: 35,
  modalFront: 39,
};

export const defaultTheme: DefaultTheme = {
  colors: COLORS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  radiuses: RADIUSES,
  boxShadows: SHADOWS,
  zIndex: Z_INDEX,
  transitions: TRANSITIONS,
  breakpoints: BREAKPOINTS,
  mediaQueries: MEDIA_QUERIES,
};
