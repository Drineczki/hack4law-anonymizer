import AlternativeLoader from '~/components/AlternativeLoader';
import { Center } from '~/components/Box';
import React from 'react';
import { COLORS } from '~/styles/theme';

export const LoadingView: React.FC = () => {
  return (
    <Center width='100%' height='100vh' background={COLORS.background20}>
      <AlternativeLoader size={160} />
    </Center>
  );
};

export default LoadingView;
