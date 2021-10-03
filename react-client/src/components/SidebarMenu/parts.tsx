import styled from 'styled-components';

export const Container = styled.div<{ disabled?: boolean }>`
  height: 100%;

  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
