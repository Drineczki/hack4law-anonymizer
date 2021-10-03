import styled from 'styled-components';

export const Container = styled.div<{ size?: number }>`
  display: flex;
  color: inherit;
  font-size: ${(props) => props.size ?? 32}px;
`;
