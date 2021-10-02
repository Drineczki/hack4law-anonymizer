import { Heading5 } from '~/components/Text';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FONT_WEIGHTS } from '~/styles/theme';
import { Container } from './parts';

interface Props {
  onFileChange: (file: File) => void;
  disabled?: boolean;
  text?: string;
}

export const FileDropZone: React.FC<Props> = ({
  onFileChange,
  disabled,
  text
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length) onFileChange(acceptedFiles[0]);
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container {...getRootProps()} disabled={disabled}>
      {!disabled && <input {...getInputProps()} />}
      <Heading5 fontWeight={FONT_WEIGHTS.normal} fontSize='1rem'>
        {isDragActive
          ? 'Drop the file here!'
          : text ??
            'Drag & drop the file here, or click to select file manually'}
      </Heading5>
    </Container>
  );
};

export default FileDropZone;
