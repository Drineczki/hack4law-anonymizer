import styled from 'styled-components';

export const Container = styled.div<{ size?: number }>`
  display: flex;
  color: white;
  font-size: ${(props) => props.size ?? 32}px;
`;
