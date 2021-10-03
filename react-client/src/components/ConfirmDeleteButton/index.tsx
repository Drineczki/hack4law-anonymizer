import React, { useRef, useState } from 'react';
import { useOutsideClick } from '~/hooks/useOutsideClick';
import { COLORS, Z_INDEX } from '~/styles/theme';
import Box, { FlexBox } from '../Box';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

interface Props {
  onDelete: () => void;
}
export const ConfirmDeleteButton: React.FC<Props> = ({ onDelete }) => {
  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setIsOpened(false));

  return (
    <FlexBox ref={ref} marginLeft="auto" position="relative">
      <Box
        transform={isOpened ? 'translate(-50px, 1px)' : 'translateY(1px)'}
        transition="all 0.15s ease-in-out"
        zIndex={Z_INDEX.foregroundMiddle}
      >
        <Button onClick={() => setIsOpened(!isOpened)}>
          <Icon icon="trash" size={18} />
        </Button>
      </Box>
      <Box
        position="absolute"
        right={0}
        top={0}
        transition="all 0.15s ease-in-out"
        zIndex={Z_INDEX.foregroundBack}
        opacity={isOpened ? 1 : 0}
        visibility={isOpened ? 'visible' : 'hidden'}
      >
        <Button
          onClick={() => {
            if (!isOpened) return;
            onDelete();
            setIsOpened(false);
          }}
        >
          <Text color={COLORS.accent1}>Usuń</Text>
        </Button>
      </Box>
    </FlexBox>
  );
};

export default ConfirmDeleteButton;
