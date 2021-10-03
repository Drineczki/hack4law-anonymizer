import React from 'react';
import { useStore } from '~/global-store/hooks';
import Box from '../Box';
import { ModalType } from '../Modal/types';
import NavMenu from '../NavMenu';
import Profile from '../Profile';
import { Container, ActionButtonSmall } from './parts';

const SidebarMenu: React.FC = () => {
  const openModal = useStore((state) => state.openModal);

  return (
    <Container>
      <Profile />
      <Box paddingX="2.4rem" width="100%">
        <ActionButtonSmall onClick={() => openModal(ModalType.uploadFile)}>Anonimizuj!</ActionButtonSmall>
      </Box>
      <NavMenu />
    </Container>
  );
};

export default SidebarMenu;
