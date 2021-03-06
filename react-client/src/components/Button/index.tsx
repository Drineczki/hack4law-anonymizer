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

export const NavButton = styled(Button)`
  width: 100%;
  margin: 0.5rem 0;
  color: #9192a3;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    color: #777df2;
  }
`;
