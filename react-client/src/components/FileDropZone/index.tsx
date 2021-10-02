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

export const FileDropZone: React.FC<Props> = ({ onFileChange, disabled, text }) => {
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
      <Heading5 fontWeight={FONT_WEIGHTS.normal} fontSize="1rem">
        {isDragActive ? 'Upuść plik tutaj!' : text ?? 'Upuść plik tutaj, lub kliknij aby wybrać z listy plików'}
      </Heading5>
    </Container>
  );
};

export default FileDropZone;
