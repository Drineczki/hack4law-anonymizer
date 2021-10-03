import React from 'react';
import { COLORS } from '~/styles/theme';
import { FlexBox } from '../Box';
import Icon from '../Icon';

const ProfilePicture: React.FC = () => {
  return (
    <FlexBox
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      overflow="hidden"
      width="80px"
      height="80px"
      margin="1rem auto"
      background={COLORS.primary}
      color="white"
    >
      <Icon icon="user-fill" size={26} />
    </FlexBox>
  );
};

export default ProfilePicture;
