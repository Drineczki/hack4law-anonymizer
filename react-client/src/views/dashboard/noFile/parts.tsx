import Button from '~/components/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  padding: 0 1.5rem;
  margin: 1rem 0;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;