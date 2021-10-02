import { BREAKPOINTS, Device } from '~/styles/theme';
import { useViewportSize } from '../useViewportSize';

const MAX_MOBILE_HEIGHT = 800;

export const useDevice = () => {
  const { width, height } = useViewportSize();

  const isMaxMobileHeight = width <= MAX_MOBILE_HEIGHT;

  const isMobileHorizontal =
    height <= BREAKPOINTS[Device.Mobile] && isMaxMobileHeight;
  const isMobileMHorizontal =
    height <= BREAKPOINTS[Device.MobileXS] && isMaxMobileHeight;
  const isMobileSHorizontal =
    height <= BREAKPOINTS[Device.MobileS] && isMaxMobileHeight;

  return {
    isDesktop: width <= BREAKPOINTS.desktop,
    isDesktopS: width <= BREAKPOINTS.desktopS,
    isLaptop: width <= BREAKPOINTS.laptop,
    isLaptopS: width <= BREAKPOINTS.laptopS,
    isMobile: width <= BREAKPOINTS.mobile || isMobileHorizontal,
    isMobileS: width <= BREAKPOINTS.mobileS || isMobileMHorizontal,
    isMobileXS: width <= BREAKPOINTS.mobileXS || isMobileSHorizontal,
    isTab: width <= BREAKPOINTS.tab,
    isTabS: width <= BREAKPOINTS.tabS
  };
};
