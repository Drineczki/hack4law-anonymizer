import React from 'react';
import Box, { FlexBox } from '~/components/Box';
import DashboardTitle from '~/components/DashboardTitle';
import RulesCardList from '~/components/RulesCardList';
import IconButton from '~/components/IconButton';
import { Heading3 } from '~/components/Text';
import TopBar from '~/components/TopBar';
import { RuleType } from '~/services/types';
import DocumentPreview from '~/components/DocumentPreview';

const MOCK_RULE = {
  originalValue: 'Jan Kowalski',
  replacement: 'J.K.',
  type: RuleType.person,
};

const MOCK_RULES = Array.from(Array(10).keys()).map(() => MOCK_RULE);

export const AnonymizerView: React.FC = () => {
  return (
    <>
      <DashboardTitle>Anonimizacja dokumentu</DashboardTitle>
      <FlexBox>
        <Box width="42%" paddingRight="5rem" maxWidth="650px">
          <TopBar>
            <FlexBox>
              <Heading3 fontWeight={500} fontSize="1.2rem" color={'rgba(0,0,0, 0.6)'}>
                Reguły anonimizacji
              </Heading3>
              <Box marginLeft="auto" transform="translateY(-20%)">
                <IconButton icon="add" onClick={() => console.log('will close')} />
              </Box>
            </FlexBox>
          </TopBar>
          <Box marginBottom="2rem" />

          <RulesCardList rules={MOCK_RULES} />
        </Box>
        <Box width="58%">
          <TopBar>
            <FlexBox>
              <Box marginLeft="auto" transform="translateY(-20%)">
                <IconButton icon="trash" isDanger onClick={() => console.log('will close')} />
              </Box>
            </FlexBox>
          </TopBar>
          <DocumentPreview documentTitle="Test dokument" />
        </Box>
      </FlexBox>
    </>
  );
};

export default AnonymizerView;
