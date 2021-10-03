import React from 'react';
import Icon, { SupportedIcon } from '../Icon';
import { Container } from './parts';

interface Props {
  icon: SupportedIcon;
  onClick: () => void;
  isDanger?: boolean;
  color?: string;
}
export const IconButton: React.FC<Props> = ({ icon, onClick, isDanger, color }) => {
  return (
    <Container onClick={onClick} isDanger={isDanger} color={color}>
      <Icon icon={icon} size={16} />
    </Container>
  );
};

export default IconButton;
