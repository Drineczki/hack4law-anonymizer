import React from 'react';
import styled from 'styled-components';
import { RuleType } from '~/services/types';
import { COLORS } from '~/styles/theme';

export const getColorForRuleType = (type: RuleType) => {
  switch (type) {
    case RuleType.person:
      return COLORS.primary;
    case RuleType.area:
      return COLORS.accent1;
    case RuleType.geo:
      return COLORS.accent2;
    default:
      throw new Error('No such rule type!');
  }
};

const Container = styled.div<{ type: RuleType }>`
  background: ${({ type }) => getColorForRuleType(type)};
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  border-radius: 3px;
`;

interface Props {
  type: RuleType;
}
export const RuleTypeLabel: React.FC<Props> = ({ type }) => {
  return <Container type={type}>{type}</Container>;
};

export default RuleTypeLabel;
