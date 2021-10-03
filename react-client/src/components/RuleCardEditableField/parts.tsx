import styled from 'styled-components';
import Button from '../Button';

export const EditButton = styled(Button)`
  opacity: 0.5;
  transition: all 0.15s ease-in-out;
  padding: 0.5rem;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent1};
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.3rem 0;
  font-size: 1.1rem;
  max-width: 70%;
`;
