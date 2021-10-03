import React from 'react';
import SidebarMenu from '../SidebarMenu';
import { Container, NavBarContainer, DashboardContent } from './parts';

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBarContainer>
        <SidebarMenu/>
      </NavBarContainer>
      <DashboardContent>{children}</DashboardContent>
    </Container>
  );
};

export default DashboardLayout;
