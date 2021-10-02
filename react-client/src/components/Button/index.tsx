import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: center;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
