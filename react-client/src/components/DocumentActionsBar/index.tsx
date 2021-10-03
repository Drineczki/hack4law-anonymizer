import React, { useState } from 'react';
import { useStore } from '~/global-store/hooks';
import { COLORS } from '~/styles/theme';
import Box, { FlexBox } from '../Box';
import GlobalLoader from '../GlobalLoader';
import IconButton from '../IconButton';

export const DocumentActionsBar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const documentTitle = useStore((state) => state.documentName);
  const documentUrl = useStore((state) => state.documentUrl);
  const updateReplacements = useStore((state) => state.uploadChanges);
  const download = useStore((state) => state.uploadChangesFinally);
  const replacements = useStore((state) => state.rules);
  return (
    <>
      <FlexBox>
        {documentTitle && replacements && (
          <Box marginLeft="auto" transform="translateY(-20%)">
            <IconButton
              icon="refresh"
              onClick={async () => {
                setIsLoading(true);
                try {
                  await updateReplacements(documentTitle, replacements);
                } catch (_) {
                  //
                } finally {
                  setIsLoading(false);
                }
              }}
            />
          </Box>
        )}
        {documentTitle && replacements && (
          <Box marginLeft="1rem" transform="translateY(-20%)">
            <IconButton
              icon="download"
              color={COLORS.primary}
              isDanger
              onClick={async () => {
                setIsLoading(true);
                try {
                  await download(documentTitle, replacements);
                } catch (error) {
                  //
                } finally {
                  setIsLoading(false);
                }
              }}
            />
          </Box>
        )}
        <Box marginLeft="1rem" transform="translateY(-20%)">
          <IconButton icon="trash" color={COLORS.accent2} onClick={() => console.log('will close')} isDanger />
        </Box>
      </FlexBox>
      {isLoading && <GlobalLoader />}
    </>
  );
};

export default DocumentActionsBar;
