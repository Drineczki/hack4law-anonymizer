import React from 'react';
import Box from '../Box';

interface Props {
  picture: string
}

const ProfilePicture: React.FC<Props> = ({picture}) => {
  return (
    <Box borderRadius="50%" overflow="hidden" width="60px" height="60px" margin="1rem auto">
      <img src={picture} alt="profile_picture" width="100%" height="100%" object-fit="cover"/>
    </Box>
  );
};

export default ProfilePicture;