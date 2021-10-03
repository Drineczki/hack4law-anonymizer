import React, { useEffect } from 'react';
import Box, { FlexBox } from '~/components/Box';
import DashboardTitle from '~/components/DashboardTitle';
import RulesCardList from '~/components/RulesCardList';
import IconButton from '~/components/IconButton';
import { Heading3 } from '~/components/Text';
import TopBar from '~/components/TopBar';
import DocumentPreview from '~/components/DocumentPreview';
import { useStore } from '~/global-store/hooks';
import { useHistory } from 'react-router-dom';
import { getDashboardHomeRoute, getNoFilesRoute } from '~/constants/routes';
import { ModalType } from '~/components/Modal/types';
import { COLORS } from '~/styles/theme';
import DocumentActionsBar from '~/components/DocumentActionsBar';

// const MOCK_RULE = {
//   originalValue: 'Jan Kowalski',
//   replacement: 'J.K.',
//   type: RuleType.person,
// };

// const MOCK_RULES = Array.from(Array(10).keys()).map(() => MOCK_RULE);

export const AnonymizerView: React.FC = () => {
  const openModal = useStore((state) => state.openModal);
  const documentUrl = useStore((state) => state.documentUrl);

  const history = useHistory();

  useEffect(() => {
    if (!documentUrl) history.push(getNoFilesRoute());
  }, [documentUrl]);

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
                <IconButton icon="add" onClick={() => openModal(ModalType.addRule)} />
              </Box>
            </FlexBox>
          </TopBar>
          <Box marginBottom="2rem" />

          <RulesCardList />
        </Box>
        <Box width="58%">
          <TopBar>
            <DocumentActionsBar />
          </TopBar>
          <DocumentPreview />
        </Box>
      </FlexBox>
    </>
  );
};

export default AnonymizerView;
