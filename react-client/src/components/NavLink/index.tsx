import React from 'react';
import { useHistory } from 'react-router';
import Box, { Center, FlexBox } from '../Box';
import Button, { NavButton } from '../Button';
import Icon, { SupportedIcon } from '../Icon';

interface Props {
  icon: SupportedIcon;
  text: string;
  path: () => string;
  disabled?: boolean;
}

const NavLink: React.FC<Props> = ({ icon, text, path, disabled }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(path());
  };
  return (
    <NavButton onClick={onClick} disabled={disabled}>
      <FlexBox alignItems="center" width="100%">
        <Box marginRight="1rem" width="2rem">
          <Icon icon={icon} size={24} />
        </Box>
        {text}
      </FlexBox>
    </NavButton>
  );
};

export default NavLink;
