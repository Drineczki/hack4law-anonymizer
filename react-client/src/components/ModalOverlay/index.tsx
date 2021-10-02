import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isVisible: boolean | null }>`
  position: fixed;
  display: ${(props) => (props.isVisible !== null ? 'block' : 'none')};

  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modalBack};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;
  cursor: ${(props) => (props.onClick && props.isVisible ? 'pointer' : 'auto')};

  animation-name: ${(props) =>
    props.isVisible ? 'fade-in-little' : 'fade-out-little'};
  animation-fill-mode: ${(props) =>
    props.isVisible ? 'backwards' : 'forwards'};
  animation-duration: 0.25s;
`;
