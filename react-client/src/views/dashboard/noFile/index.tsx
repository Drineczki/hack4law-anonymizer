import React from 'react';
import { useHistory } from 'react-router';
import ActionButton from '~/components/ActionButton';
import {
  getDocumentUploadRoute
} from '../../../constants/routes';
import Box, { Center } from '~/components/Box';
import Button from '~/components/Button';
import { StyledButton } from './parts';

export const NoFileView: React.FC = () => {
  
  const history = useHistory();

  const onClick = () => {
    history.push(getDocumentUploadRoute());
  };
  return (
      <Center height="100%" flexDirection="column" flexShrink={1}>
        <h3>Wyglada na to ze nie zaladowales zadnego pliku 😞 </h3>
        <StyledButton onClick={onClick}>
          Kliknij tutaj aby zaladowac plik
        </StyledButton>
      </Center>
  );
};

export default NoFileView;