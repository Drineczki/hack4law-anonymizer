import Box, { FlexBox } from '~/components/Box';
import FileDropZone from '~/components/FileDropZone';
import Text, { Paragraph } from '~/components/Text';
import React, { useState } from 'react';
import { COLORS, FONT_WEIGHTS } from '~/styles/theme';
import ModalWrapper from '../ModalWrapper';
import { ModalErrorMessage, MODAL_HORIZONTAL_PADDING, MODAL_VERTICAL_PADDING } from '../parts';
import ActionButton from '~/components/ActionButton';

interface Props {
  onClose?: () => void;
}

export const AddFileModal: React.FC<Props> = ({ onClose }) => {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFileChange = (newFile: File) => {
    setFile(newFile);
  };

  const onUpload = async () => {
    if (!file) return;
    setError(null);

    console.log(file);

    if (file.type !== 'application/pdf') {
      return setError('Wybrany plik ma niepoprawny format. Proszę wybrać plik w formacie PDF.');
    }

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <ModalWrapper title="Wyślij nowy dokument" onClose={onClose}>
      <Box paddingX={MODAL_HORIZONTAL_PADDING}>
        <Box marginTop="1rem">
          <Paragraph fontSize="0.9rem">
            Przeciągnij i upuść plik w polu poniżej. Pamiętaj, że powinien zostać wybrany tylko jeden plik w formacie
            PDF.
          </Paragraph>
        </Box>

        <Box marginY="2rem">
          <FileDropZone onFileChange={onFileChange} />
        </Box>

        {!file && (
          <Box marginBottom="2rem" height="20px">
            <Paragraph fontSize="0.8rem">Nie wybrano żadnego pliku</Paragraph>
          </Box>
        )}
        {file && (
          <Box marginBottom="2rem">
            <Paragraph fontSize="0.9rem">
              <Text fontWeight={FONT_WEIGHTS.medium}>Wybrany plik: </Text>
            </Paragraph>
            <Box marginBottom="0.5rem" />
            <Paragraph fontSize="1rem">
              <Text>{file.name}</Text>
            </Paragraph>
          </Box>
        )}

        <ModalErrorMessage error={error} />
      </Box>

      <FlexBox
        paddingY={MODAL_VERTICAL_PADDING}
        paddingX={MODAL_HORIZONTAL_PADDING}
        background={COLORS.background}
        justifyContent="flex-end"
      >
        <ActionButton onClick={onUpload} disabled={!file} isLoading={isLoading}>
          Wyślij
        </ActionButton>
      </FlexBox>
    </ModalWrapper>
  );
};

export default AddFileModal;
