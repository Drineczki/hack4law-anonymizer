import React from 'react';
import { Container } from './parts';

interface Props {
  size?: number;
  stroke?: number;
  color?: string;
}

export const AlternativeLoader: React.FC<Props> = ({ size, stroke, color }) => {
  return (
    <Container size={size} stroke={stroke} color={color}>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default AlternativeLoader;
