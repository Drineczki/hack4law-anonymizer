import React from 'react';
import { useStore } from '~/global-store/hooks';
import { COLORS } from '~/styles/theme';
import Box, { FlexBox } from '../Box';
import IconButton from '../IconButton';

export const DocumentActionsBar: React.FC = () => {
  const documentTitle = useStore((state) => state.documentName);
  const documentUrl = useStore((state) => state.documentUrl);
  const updateReplacements = useStore((state) => state.uploadChanges);
  const replacements = useStore((state) => state.rules);
  return (
    <FlexBox>
      <Box marginLeft="auto" transform="translateY(-20%)">
        <IconButton
          icon="refresh"
          onClick={() => documentTitle && replacements && updateReplacements(documentTitle, replacements, false)}
        />
      </Box>
      {documentUrl && documentUrl && (
        <Box marginLeft="1rem" transform="translateY(-20%)">
          <a href={documentUrl} download={documentTitle} target="_blank" rel="noopener noreferrer">
            <IconButton
              icon="refresh"
              color={COLORS.primary}
              isDanger
              onClick={() => {
                //
              }}
            />
          </a>
        </Box>
      )}
      <Box marginLeft="1rem" transform="translateY(-20%)">
        <IconButton icon="trash" color={COLORS.accent2} onClick={() => console.log('will close')} isDanger />
      </Box>
    </FlexBox>
  );
};

export default DocumentActionsBar;
