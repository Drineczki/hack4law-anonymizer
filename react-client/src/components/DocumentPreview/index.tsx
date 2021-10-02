import React from 'react';
import Box, {Center} from '../Box';
import { Document, Page, pdfjs } from 'react-pdf';
import Card from './parts';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

const options = {
  useSystemFonts: false
};

interface Props {
  documentTitle: string;
}
export const DocumentPreview: React.FC<Props> = ({ documentTitle }) => {
  return (
    <Card>
      <Box width="100%" height="92vh">
        <Center>
          <Document
            file={{
              url: 'http://localhost:8080/out.pdf',
            }}
            renderMode='svg'
            options={options}
          >
            <Page pageNumber={1} />
          </Document>
        </Center>
      </Box>
    </Card>
  );
};

export default DocumentPreview;
