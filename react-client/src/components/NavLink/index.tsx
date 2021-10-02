import React from 'react';
import { useHistory } from 'react-router';
import {Center, FlexBox} from '../Box';
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
    <button onClick={onClick}>
      <FlexBox alignItems="center">
      <Icon icon={icon}/>
      {text}
      </FlexBox>
    </button>
  );
};

export default NavLink;
