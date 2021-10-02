import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.03);

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
