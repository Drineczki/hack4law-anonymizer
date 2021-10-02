import React from 'react';
import Icon, { SupportedIcon } from '../Icon';
import { Container } from './parts';

interface Props {
  icon: SupportedIcon;
  onClick: () => void;
  isDanger?: boolean;
}
export const IconButton: React.FC<Props> = ({ icon, onClick, isDanger }) => {
  return (
    <Container onClick={onClick} isDanger={isDanger}>
      <Icon icon={icon} size={16} />
    </Container>
  );
};

export default IconButton;
