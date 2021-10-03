import React, { useState } from 'react';
import Box, { Center, FlexBox } from '../Box';
import { Document, Page, pdfjs } from 'react-pdf';
import Card from './parts';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { useStore } from '~/global-store/hooks';
import { Heading4 } from '../Text';
import { COLORS } from '~/styles/theme';
import Button from '../Button';
import styled from 'styled-components';

const OPTIONS = {
  useSystemFonts: false,
};

const WhiteButton = styled(Button)`
  color: white;
  transform: translateY(-3px);
  font-size: 1.4rem;
`;

export const DocumentPreview: React.FC = () => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const documentUrl = useStore((state) => state.documentUrl);

  if (!documentUrl)
    return (
      <Center height="100%" padding="4rem" textAlign="center" opacity={0.6}>
        <Heading4 fontWeight={500}>Wystąpił problem z dokumentem PDF.</Heading4>
      </Center>
    );

  return (
    <Card>
      <Box width="100%" height="92vh">
        <Center>
          <Document
            file={{
              url: documentUrl,
            }}
            renderMode="svg"
            options={OPTIONS}
            onLoadSuccess={(data) => {
              setMaxPages(data?.numPages || 1);
            }}
          >
            <Page pageNumber={page} />
          </Document>
        </Center>
      </Box>

      <Box position="absolute" height="40px" width="80%" background="white" left="30px" top="0" />
      <FlexBox
        position="fixed"
        background={COLORS.primary}
        bottom="2rem"
        right="2rem"
        padding="0.5rem 1rem"
        color="white"
        borderRadius="12px"
        alignItems="center"
        style={{ fontSize: '1.2rem' }}
      >
        {page > 1 ? <WhiteButton onClick={() => setPage(page - 1)}>&larr;</WhiteButton> : <Box opacity={0}>&larr;</Box>}
        <Box paddingX="1rem">{page}</Box>
        {page < maxPages ? (
          <WhiteButton onClick={() => setPage(page + 1)}>&rarr;</WhiteButton>
        ) : (
          <Box opacity={0}>&larr;</Box>
        )}
      </FlexBox>
    </Card>
  );
};

export default DocumentPreview;
