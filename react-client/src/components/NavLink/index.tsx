import React from 'react';
import { useHistory } from 'react-router';
import Box, {Center, FlexBox} from '../Box';
import Button, { NavButton } from '../Button';
import Icon, { SupportedIcon } from '../Icon';

interface Props {
  icon: SupportedIcon,
  text: string,
  path: () => string
}

const NavLink: React.FC<Props> = ({icon, text, path}) => {
  const history = useHistory();

  const onClick = () => {
    history.push(path());
  };
  return (
    <NavButton onClick={onClick}>
      <FlexBox alignItems="center">
        <Box marginRight="1rem">
        <Icon icon={icon}/>
      </Box>
      {text}
      </FlexBox>
    </NavButton>
  );
};

export default NavLink;
