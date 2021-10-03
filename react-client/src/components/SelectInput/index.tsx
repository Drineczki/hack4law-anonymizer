import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import { RuleType } from '~/services/types';
import { Container, Select, Label } from './parts';

export type SelectProps = StyledComponentPropsWithRef<'select'>;

interface Props {
  label: string;
  value: string;
}

const SelectInput: React.FC<Props & SelectProps> = ({
  label,
  placeholder,
  value,
  ...restProps
}) => {

  return (
    <Container>
      <Label>{label}</Label>
      <Select {...restProps}  value={value}/>
    </Container>
  );
};

export default SelectInput;
