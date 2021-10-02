import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import { Container, Input, Label } from './parts';

export type TextProps = StyledComponentPropsWithRef<'input'>;

interface Props {
  label: string;
  placeholder: string;
  value: string;
}

const TextInput: React.FC<Props & TextProps> = ({
  label,
  placeholder,
  value,
  ...restProps
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...restProps} placeholder={placeholder} value={value} />
    </Container>
  );
};

export default TextInput;
