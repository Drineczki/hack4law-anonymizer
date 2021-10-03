import Box, { FlexBox } from '~/components/Box';
import React, { useState } from 'react';
import { COLORS } from '~/styles/theme';
import ModalWrapper from '../ModalWrapper';
import { MODAL_HORIZONTAL_PADDING, MODAL_VERTICAL_PADDING } from '../parts';
import ActionButton from '~/components/ActionButton';
import { useStore } from '~/global-store/hooks';
import { RuleType, mapRuleTypeToString, mapStringToRule } from '~/services/types';
import TextInput from '~/components/TextInput';
import SelectInput from '~/components/SelectInput';

interface Props {
  onClose?: () => void;
}

export const AddRuleModal: React.FC<Props> = ({ onClose }) => {
  const [entity, setEntity] = useState<string>('');
  const [replacement, setReplacement] = useState<string>('');
  const [type, setType] = useState<RuleType>(RuleType.Personal);

  const addRule = useStore((state) => state.addRule);

  console.log(type);

  const onAdd = () => {
    addRule({
      entity,
      anonymization: replacement,
      anon_type: type,
    });
    onClose && onClose();
  };

  return (
    <ModalWrapper title="Dodaj nową regułę anonimizacji" onClose={onClose}>
      <Box paddingX={MODAL_HORIZONTAL_PADDING} paddingY="2rem">
        <SelectInput
          label="Typ danej do anonimizacji"
          value={mapRuleTypeToString(type)}
          onChange={(e) => setType(RuleType.Personal)}
        />
        <TextInput
          label="Fraza do anonimizacji"
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
          placeholder="np. Jan Kowalski"
        />
        <Box paddingBottom="2rem" />
        <TextInput
          label="Fraza zastępcza"
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
          placeholder="np. J.K."
        />
      </Box>

      <FlexBox
        paddingY={MODAL_VERTICAL_PADDING}
        paddingX={MODAL_HORIZONTAL_PADDING}
        background={COLORS.background}
        justifyContent="flex-end"
      >
        <ActionButton onClick={onAdd} disabled={!entity || !replacement}>
          Wyślij
        </ActionButton>
      </FlexBox>
    </ModalWrapper>
  );
};

export default AddRuleModal;
