import React from 'react';
import { useStore } from '~/global-store/hooks';
import Box, { Center } from '../Box';
import RuleCard from '../RuleCard';
import { Heading4 } from '../Text';

export const RulesCardList: React.FC = () => {
  const rules = useStore((state) => state.rules);

  if (!rules) {
    return (
      <Center height="100%" padding="4rem" textAlign="center" opacity={0.6}>
        <Heading4 fontWeight={500}>Wystąpił problem z znalezieniem reguł do anonimizacji.</Heading4>
      </Center>
    );
  }

  if (rules && !rules.length) {
    return (
      <Center height="100%" padding="4rem" textAlign="center" opacity={0.6}>
        <Heading4 fontWeight={500}>Nie znaleziono żadnych reguł do anonimizacji.</Heading4>
      </Center>
    );
  }

  return (
    <>
      {rules.map((rule, index) => (
        <RuleCard
          key={index}
          originalValue={rule.entity}
          replacement={rule.anonymization}
          type={rule.anon_type}
          index={index}
        />
      ))}
      <Box paddingBottom="40vh" />
    </>
  );
};

export default RulesCardList;
