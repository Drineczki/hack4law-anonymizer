import Box, { FlexBox } from '~/components/Box';
import Icon from '~/components/Icon';
import { ModalOverlay } from '~/components/ModalOverlay';
import { Heading3 } from '~/components/Text';
import React from 'react';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '~/styles/theme';
import { Container, Divider, MODAL_HORIZONTAL_PADDING, MODAL_VERTICAL_PADDING } from '../parts';
import Button from '~/components/Button';

interface Props {
  title?: string;
  onClose?: () => void;
  blockClose?: () => void;
}

export const ModalWrapper: React.FC<Props> = ({ children, title, onClose, blockClose }) => {
  return (
    <>
      <Container>
        {title && (
          <>
            <FlexBox
              textAlign="left"
              maxWidth="100%"
              justifyContent="space-between"
              paddingX={MODAL_HORIZONTAL_PADDING}
              paddingY={MODAL_VERTICAL_PADDING}
            >
              <Heading3 color={COLORS.black} fontWeight={FONT_WEIGHTS.medium} fontSize={FONT_SIZES.big}>
                {title}
              </Heading3>
              {!blockClose && (
                <Button onClick={onClose}>
                  <Icon icon="close" />
                </Button>
              )}
            </FlexBox>
            <Divider />
          </>
        )}
        {children}
      </Container>
      <ModalOverlay isVisible={true} onClick={onClose} />
    </>
  );
};

export default ModalWrapper;
