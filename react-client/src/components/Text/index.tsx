import styled, {
  CSSProperties,
  StyledComponentPropsWithRef
} from 'styled-components';

import {
  color,
  ColorProps,
  compose,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps,
  system
} from 'styled-system';

export type TextProps = ColorProps &
  TextShadowProps &
  TypographyProps &
  Pick<
    CSSProperties,
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textOverflow'
    | 'overflow'
    | 'maxWidth'
  > &
  StyledComponentPropsWithRef<'span'>;

const textStyledSystem = compose(
  color,
  textShadow,
  typography,
  system({
    overflow: true,
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
    maxWidth: true
  })
);

export const Text = styled.span<TextProps>`
  ${textStyledSystem}
`;

export const Heading1 = styled(Text).attrs(() => ({ as: 'h1' }))``;
export const Heading2 = styled(Text).attrs(() => ({ as: 'h2' }))``;
export const Heading3 = styled(Text).attrs(() => ({ as: 'h3' }))``;
export const Heading4 = styled(Text).attrs(() => ({ as: 'h4' }))``;
export const Heading5 = styled(Text).attrs(() => ({ as: 'h5' }))<{
  light?: boolean;
}>`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ light, theme }) => (light ? theme.colors.white : 'inherit')};
`;
export const Paragraph = styled(Text).attrs(() => ({ as: 'p' }))``;

export default Text;
