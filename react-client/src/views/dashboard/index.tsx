import React, { useState } from 'react';
import Box, { Center } from '~/components/Box';
import Button from '~/components/Button';
import FileDropZone from '~/components/FileDropZone';

export const DashboardView: React.FC = () => {
  const [file, setFile] = useState<File>();

  return (
    <Center height="100vh" flexDirection="column">
      <Box height="200px">
        <FileDropZone onFileChange={(file) => setFile(file)} />
      </Box>
      <Box>
        <Button onClick={() => console.log(file)}>Wyślij</Button>
      </Box>
    </Center>
  );
};

export default DashboardView;
