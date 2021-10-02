import { DefaultTheme } from 'styled-components';

export interface CustomTheme {
  colors: {
    black: string;
    transparent: string;
    white: string;
    background20: string;
    background50: string;
    background70: string;
    primary100: string;
    primary80: string;
    secondary100: string;
    accentPrimary100: string;
    accentSecondary100: string;
    danger100: string;
    danger70: string;
  };
  radiuses: {
    regular: number;
    medium: number;
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
  background20: '#202442',
  background50: '#25294A',
  background70: '#2A2F54',
  primary100: '#7033FF',
  primary80: '#5a29cc',
  secondary100: '#2A99FF',
  accentPrimary100: '#44F3FE',
  accentSecondary100: '#EE249F',
  danger100: '#c0392b',
  danger70: '#86281e'
};

export const RADIUSES = {
  regular: 6,
  medium: 10,
  large: 16,
  full: '100%'
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
  black: 900
};

export const TRANSITIONS = {
  shortAll: 'all .3s ease-in-out',
  defaultAll: 'all .5s ease-in-out',
  longAll: 'all .8s ease-in-out'
};

export const SHADOWS = {
  smallBlack: '',
  defaultBlack: '',
  bigBlack: ''
};

export const FONT_SIZES = {
  superSmall: '.625rem',
  small: '.75rem',
  regular: '1rem',
  medium: '1.125rem',
  big: '1.375rem',
  headingSmall: '1.625rem',
  headingMedium: '1.75rem',
  headingBig: '2rem'
};

export const DEFAULTS = {
  duration_ms: 300,
  duration: '.3',
  easing: 'ease-in-out',
  transition: 'all .3s ease-in-out'
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
  MobileXS = 'mobileXS'
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
  [Device.MobileXS]: 320
};

export const MEDIA_QUERIES = {
  ...Object.values(Device).reduce<Record<Device, string>>((acc, breakpoint) => {
    return {
      ...acc,
      [breakpoint]: `only screen and (max-width: ${BREAKPOINTS[breakpoint]}px)`
    };
  }, {} as Record<Device, string>),
  [Device.Mobile]: `only screen and (max-width: ${
    BREAKPOINTS[Device.Mobile]
  }px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileS]}px)`,
  [Device.MobileS]: `only screen and (max-width: ${
    BREAKPOINTS[Device.MobileS]
  }px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileXS]}px)`,
  [Device.MobileXS]: `only screen and (max-width: ${
    BREAKPOINTS[Device.MobileXS]
  }px),
    only screen and (max-height: ${BREAKPOINTS[Device.MobileXS]}px)`
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
  modalFront: 39
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
  mediaQueries: MEDIA_QUERIES
};
