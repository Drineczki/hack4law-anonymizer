import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div<{ disabled?: boolean }>`
  height: 100%;

  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionButtonSmall = styled(Button)`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
