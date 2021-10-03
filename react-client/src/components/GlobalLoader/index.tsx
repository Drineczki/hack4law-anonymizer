import React from 'react';
import Box from '../Box';
import Loader from '../Loader';
import { ModalOverlay } from '../ModalOverlay';

export const GlobalLoader: React.FC = () => {
  return (
    <>
      <Box zIndex={999} position="fixed" top={'50%'} left={'50%'} transform="translate(-50%, -50%)">
        <Loader color="white" />
      </Box>
      <ModalOverlay isVisible={true} />
    </>
  );
};

export default GlobalLoader;
