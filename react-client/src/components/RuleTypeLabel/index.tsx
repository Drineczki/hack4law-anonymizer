import React from 'react';
import styled from 'styled-components';
import { mapRuleTypeToString, RuleType } from '~/services/types';
import { COLORS } from '~/styles/theme';

export const getColorForRuleType = (type: RuleType) => {
  switch (type) {
    case RuleType.Personal:
      return COLORS.primary;
    case RuleType.Place:
      return COLORS.accent1;
    case RuleType.Numerical:
      return COLORS.accent2;
    case RuleType.Internet:
      return COLORS.danger;
    case RuleType.GeoLoc:
      return COLORS.accent1;
    default:
      return COLORS.primary;
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
  return <Container type={type}>{mapRuleTypeToString(type)}</Container>;
};

export default RuleTypeLabel;
