import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_WEIGHTS } from '~/styles/theme';
import Box from '../Box';
import { Paragraph } from '../Text';

export const MODAL_HORIZONTAL_PADDING = '2em';
export const MODAL_VERTICAL_PADDING = '1.5rem';

export const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modalMiddle};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 712px;
  border-radius: 12px;
  animation: fade-in 0.2s ease-out;
  animation-fill-mode: forwards;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

interface ModalErrorMessageProps {
  error?: string | null;
}

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  top: 4.6rem;
  left: 0;
  opacity: 0.7;
  transform: translateY(-10px);
`;

export const ModalErrorMessage: React.FC<ModalErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <Box marginBottom="1.5rem">
      <Paragraph fontSize="0.8rem" textAlign="center" color={COLORS.danger} fontWeight={FONT_WEIGHTS.medium}>
        {error}
      </Paragraph>
    </Box>
  );
};
