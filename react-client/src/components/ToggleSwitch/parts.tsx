import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 23px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #aaa;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.25s;
    transition: 0.25s;
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.primary100};
  }

  &:focused + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary100};
  }

  &:checked + ${Slider}:before {
    transform: translateX(18px);
  }
`;
