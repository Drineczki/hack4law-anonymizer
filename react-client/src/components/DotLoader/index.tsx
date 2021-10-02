import React from 'react';
import { Container } from './parts';

interface Props {
  size?: number;
  color?: string;
}

export const DotLoader: React.FC<Props> = () => {
  return (
    <Container>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default DotLoader;
