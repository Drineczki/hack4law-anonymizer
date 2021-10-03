import React from 'react';
import styled from 'styled-components';
import { useStore } from '~/global-store/hooks';
import { FlexCol } from '../Box';
import NavLink from '../NavLink';
import { menu } from './data';

const NavMenu: React.FC = () => {
  const documentUrl = useStore((state) => state.documentUrl);

  return (
    <FlexCol margin="2rem 0" width="80%">
      {menu.map((option) => {
        const { id, icon, text, path } = option;
        return <NavLink key={id} icon={icon} text={text} path={path} disabled={Boolean(id === 2 && !documentUrl)} />;
      })}
    </FlexCol>
  );
};

export default styled(NavMenu)`
  flex-direction: column;
`;
