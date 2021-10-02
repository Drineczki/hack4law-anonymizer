import React from 'react';
import Box, { Center } from '~/components/Box';
import Button from '~/components/Button';
import DashboardTitle from '~/components/DashboardTitle';
import { ModalType } from '~/components/Modal/types';
import { useStore } from '~/global-store/hooks';

export const DashboardHomeView: React.FC = () => {
  const { openModal } = useStore((state) => state);

  return (
    <>
      <DashboardTitle>Home</DashboardTitle>
      <Center height="100%" flexDirection="column" flexShrink={1}>
        <Box>
          <Button onClick={() => openModal(ModalType.uploadFile)}>Dodaj plik</Button>
        </Box>
      </Center>
    </>
  );
};

export default DashboardHomeView;
