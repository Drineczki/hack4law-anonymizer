import React, { useState } from 'react';
import { RuleType } from '~/services/types';
import { useInView } from 'react-intersection-observer';
import { COLORS } from '~/styles/theme';
import Box, { FlexBox } from '../Box';

import RuleTypeLabel from '../RuleTypeLabel';
import Text, { Heading5, Paragraph } from '../Text';
import ConfirmDeleteButton from '../ConfirmDeleteButton';
import RuleCardEditableField from '../RuleCardEditableField';

enum CardField {
  OriginalValue,
  Replacement,
}

interface Props {
  originalValue: string;
  replacement: string;
  type: RuleType;
}

export const RuleCard: React.FC<Props> = ({ originalValue, replacement, type }) => {
  const [editedField, setEditedField] = useState<CardField | null>(null);

  const onFieldChange = (field: CardField, value: string) => {
    setEditedField(null);
    console.log(value);
  };

  const { ref, inView } = useInView({
    /* Optional options */
    rootMargin: '-49% 0px',
    threshold: 0,
  });

  const isSelected = inView;

  return (
    <Box marginY="2rem" transition="all 0.25s ease-in-out">
      <Box
        background={COLORS.white}
        padding="1.8rem"
        borderRadius="8px"
        boxShadow="0 0.7rem 1.3rem rgba(0, 0, 0, 0.04)"
        transform={isSelected ? 'scale(1.14)' : 'unset'}
        transition="all 0.25s ease-in-out"
        ref={ref}
      >
        <FlexBox marginBottom="1.5rem" alignItems="center">
          <RuleTypeLabel type={type} />
          <ConfirmDeleteButton onDelete={() => null} />
        </FlexBox>
        <FlexBox marginBottom="1.5rem">
          <Box width="50%">
            <RuleCardEditableField
              label="Fraza do anonimizacji"
              value={originalValue}
              onEdit={() => setEditedField(CardField.OriginalValue)}
              onConfirmEdit={(value) => onFieldChange(CardField.OriginalValue, value)}
              isEdited={editedField === CardField.OriginalValue}
            />
          </Box>
          <Box width="50%" paddingLeft="1rem">
            <RuleCardEditableField
              label="Fraza zastępcza"
              value={replacement}
              onEdit={() => setEditedField(CardField.Replacement)}
              onConfirmEdit={(value) => onFieldChange(CardField.Replacement, value)}
              isEdited={editedField === CardField.Replacement}
            />
          </Box>
        </FlexBox>
        <Box>
          <Box opacity="0.8" marginBottom="0.5rem">
            <Heading5 fontSize="0.8rem" fontWeight={600}>
              Rezultat
            </Heading5>
          </Box>
          <FlexBox alignItems="center">
            <Paragraph fontSize="1.1rem">
              <Text textDecoration="line-through">{originalValue}</Text>
            </Paragraph>
            <Box paddingX="1.5rem">
              <Text fontWeight={600} color={COLORS.primary}>
                &rarr;
              </Text>
            </Box>
            <Paragraph fontSize="1.1rem">{replacement}</Paragraph>
          </FlexBox>
        </Box>
      </Box>
    </Box>
  );
};

export default RuleCard;
