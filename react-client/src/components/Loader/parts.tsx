import styled from 'styled-components';

const DEFAULT_LOADER_SIZE = 80;
const DEFAULT_LOADER_STROKE_SIZE = 6;

export const Container = styled.div<{
  size?: number;
  strokeSize?: number;
  color?: string;
}>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size ?? DEFAULT_LOADER_SIZE}px;
  height: ${(props) => props.size ?? DEFAULT_LOADER_SIZE}px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => (props.size ?? DEFAULT_LOADER_SIZE) * 0.8}px;
    height: ${(props) => (props.size ?? DEFAULT_LOADER_SIZE) * 0.8}px;
    margin: ${(props) => (props.size ?? DEFAULT_LOADER_SIZE) * 0.1}px;
    border: ${(props) =>
        (props.strokeSize ?? DEFAULT_LOADER_STROKE_SIZE) * 0.8}px
      solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
