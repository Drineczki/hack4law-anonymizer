import React from 'react';
import ActionButton from '../ActionButton';
import Button from '../Button';
import NavMenu from '../NavMenu';
import Profile from '../Profile';
import {Container} from './parts';

const SidebarMenu: React.FC = () => {
  return (
    <Container>
      <Profile/>
      <ActionButton onClick={() => console.log('Hello')}>
        Anonimizuj!
      </ActionButton>
      <NavMenu/>
    </Container>
  );
};

export default SidebarMenu;