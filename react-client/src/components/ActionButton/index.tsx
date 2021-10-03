import styled from 'styled-components';
import Button from '../Button';
import React from 'react';
import Loader from '../Loader';

const Container = styled(Button)`
  padding: 0.5rem 2rem;
  height: 50px;
  width: 130px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: ${({ theme }) => theme.transitions.shortAll};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.black}60;
  }
`;

interface Props {
  isLoading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const ActionButton: React.FC<Props> = ({ isLoading, disabled, children, onClick }) => {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {isLoading ? <Loader size={20} strokeSize={3} /> : children}
    </Container>
  );
};

export default ActionButton;
