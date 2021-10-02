import styled from 'styled-components';

export const Container = styled.div<{
  size?: number;
  stroke?: number;
  color?: string;
}>`
  --size: ${({ size }) => size ?? 80}px;

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: var(--size);
    height: var(--size);
  }
  .lds-ripple div {
    position: absolute;
    border: ${({ stroke }) => stroke ?? 4}px solid
      ${({ color, theme }) => color ?? theme.colors.white};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: calc(0.45 * var(--size));
      left: calc(0.45 * var(--size));
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: calc(0.9 * var(--size));
      height: calc(0.9 * var(--size));
      opacity: 0;
    }
  }
`;
