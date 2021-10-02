import React, { useState } from 'react';
import Box, { Center } from '~/components/Box';
import Button from '~/components/Button';
import DashboardTitle from '~/components/DashboardTitle';
import FileDropZone from '~/components/FileDropZone';

export const DashboardHomeView: React.FC = () => {
  const [file, setFile] = useState<File>();

  return (
    <>
      <DashboardTitle>Home</DashboardTitle>
      <Center height="100%" flexDirection="column" flexShrink={1}>
        <Box height="200px">
          <FileDropZone onFileChange={(file) => setFile(file)} />
        </Box>
        <Box>
          <Button onClick={() => console.log(file)}>Wyślij</Button>
        </Box>
      </Center>
    </>
  );
};

export default DashboardHomeView;
