import React from 'react';
import Box, { Center } from '../Box';
import RuleCard from '../RuleCard';
import { Heading4 } from '../Text';

interface Props {
  // TODO: FIx with dto
  rules: any[];
}
export const RulesCardList: React.FC<Props> = ({ rules }) => {
  if (!rules || !rules.length) {
    return (
      <Center height="100%" padding="4rem" textAlign="center" opacity={0.6}>
        <Heading4 fontWeight={500}>Nie znaleziono żadnych fraz do anonimizacji.</Heading4>
      </Center>
    );
  }

  return (
    <>
      {rules.map((rule, index) => (
        <RuleCard key={index} originalValue={rule.originalValue} replacement={rule.replacement} type={rule.type} />
      ))}
      <Box paddingBottom="40vh" />
    </>
  );
};

export default RulesCardList;