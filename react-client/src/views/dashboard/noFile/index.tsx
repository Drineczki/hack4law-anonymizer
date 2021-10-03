import React from 'react';
import { Center } from '~/components/Box';
import { StyledButton } from './parts';
import { useStore } from '~/global-store/hooks';
import { ModalType } from '~/components/Modal/types';

export const NoFileView: React.FC = () => {
  const openModal = useStore((state) => state.openModal);

  const onClick = () => {
    openModal(ModalType.uploadFile);
  };

  return (
    <Center height="100%" flexDirection="column" flexShrink={1}>
      <h3 style={{ marginBottom: '1rem' }}>Wyślij plik PDF aby rozpocząć proces anonimizacji! 😀 </h3>
      <StyledButton onClick={onClick}>Kliknij tutaj aby wysłać plik</StyledButton>
    </Center>
  );
};

export default NoFileView;
