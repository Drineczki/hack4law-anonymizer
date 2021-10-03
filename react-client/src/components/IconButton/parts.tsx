import styled from 'styled-components';
import Button from '../Button';

export const Container = styled(Button)<{ isDanger?: boolean }>`
  border-radius: 100%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, isDanger }) => (isDanger ? theme.colors.accent1 : theme.colors.primary)};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
