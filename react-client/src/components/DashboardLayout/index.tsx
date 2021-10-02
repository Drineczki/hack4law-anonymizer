import React from 'react';
import { Container, NavBarContainer, DashboardContent } from './parts';

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBarContainer>NAVBAR WILL BE HERE</NavBarContainer>
      <DashboardContent>{children}</DashboardContent>
    </Container>
  );
};

export default DashboardLayout;
