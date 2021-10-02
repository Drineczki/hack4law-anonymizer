import React from 'react';
import Box from '../Box';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

interface Props {
  documentTitle: string;
}
export const DocumentPreview: React.FC<Props> = ({ documentTitle }) => {
  return (
    <Box>
      <Box width="600px" position="relative" margin="2rem auto">
        <Document
          file={{
            url: 'http://localhost:8080/out.pdf',
          }}
        >
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Box>
  );
};

export default DocumentPreview;
