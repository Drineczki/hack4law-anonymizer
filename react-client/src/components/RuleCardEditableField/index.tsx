import React, { useEffect, useState } from 'react';
import Box, { FlexBox } from '../Box';
import Icon from '../Icon';
import { Heading5, Paragraph } from '../Text';
import { EditButton, Input } from './parts';

interface Props {
  value: string;
  label: string;
  isEdited?: boolean;
  onEdit?: () => void;
  onConfirmEdit?: (newValue: string) => void;
}

export const RuleCardEditableField: React.FC<Props> = ({ value, label, onConfirmEdit, isEdited, onEdit }) => {
  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    setFieldValue(value);
  }, [value]);

  return (
    <>
      <Box opacity="0.8" marginBottom="0.5rem">
        <Heading5 fontSize="0.8rem" fontWeight={600}>
          {label}
        </Heading5>
      </Box>
      <FlexBox alignItems="center">
        {isEdited ? (
          <Input
            type="text"
            value={fieldValue}
            onChange={({ target }) => {
              setFieldValue(target.value);
            }}
          />
        ) : (
          <Paragraph fontSize="1.1rem" style={{ maxWidth: '80%', wordWrap: 'break-word' }}>
            {value}
          </Paragraph>
        )}
        <Box marginLeft="auto" marginRight="2rem">
          <EditButton onClick={isEdited ? () => onConfirmEdit && onConfirmEdit(fieldValue) : onEdit}>
            <Icon icon={isEdited ? 'accept' : 'edit'} size={15} />
          </EditButton>
        </Box>
      </FlexBox>
    </>
  );
};

export default RuleCardEditableField;
