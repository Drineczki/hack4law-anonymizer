import styled from 'styled-components';

export const Container = styled.div<{ size?: number }>`
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${(props) => props.size ?? 32}px;
`;
