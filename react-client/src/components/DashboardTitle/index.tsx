import React from 'react';
import Box from '../Box';
import { Heading2 } from '../Text';

export const DashboardTitle: React.FC = ({ children }) => {
  return (
    <Box marginBottom="2rem">
      <Heading2>{children}</Heading2>
    </Box>
  );
};

export default DashboardTitle;
