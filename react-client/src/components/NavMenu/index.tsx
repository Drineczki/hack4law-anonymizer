import React from 'react';
import styled from 'styled-components';
import { FlexCol } from '../Box';
import NavLink from '../NavLink';
import { menu } from './data';

const NavMenu: React.FC = () => {
  return (
    <FlexCol>
      {menu.map(option => {
        const {id, icon, text, path} = option;
        return (
          <NavLink key={id} icon={icon} text={text} path={path}/>
        );
      })}
    </FlexCol>
  );
};

export default styled(NavMenu)`
  flex-direction: column;
`;
