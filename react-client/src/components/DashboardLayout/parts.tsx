import styled from 'styled-components';
import { NAVBAR_WIDTH } from '~/constants/ui';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const NavBarContainer = styled.aside`
  width: ${NAVBAR_WIDTH};
  height: 100%;
  flex-shrink: 0;
`;

export const DashboardContent = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 4rem 6rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;
