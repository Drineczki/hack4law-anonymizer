import React from 'react';
import { COLORS } from '~/styles/theme';
import Box from '../Box';

export const TopBar: React.FC = ({ children }) => {
  return (
    <Box paddingY="1rem" height="60px" borderBottom={`1px solid ${COLORS.gray}`}>
      {children}
    </Box>
  );
};

export default TopBar;
