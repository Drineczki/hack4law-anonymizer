import React from 'react';
import ProfilePicture from '../ProfilePircture';
import picture from '~/assets/images/avatar.png';
import Box from '../Box';

const Profile: React.FC = () => {

  return (
    <Box flexDirection="column" justifyContent="center" textAlign="center" margin="1.5rem 0">
      <ProfilePicture picture={picture}/>
      <h5>
        Adam Kowalski
      </h5>
    </Box>
  );
};

export default Profile;
