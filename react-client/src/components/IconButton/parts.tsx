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

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
