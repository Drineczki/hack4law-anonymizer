import React from 'react';
import ProfilePicture from '../ProfilePircture';
import Box from '../Box';

const Profile: React.FC = () => {
  return (
    <Box flexDirection="column" justifyContent="center" textAlign="center" margin="0.5rem 0 2rem">
      <ProfilePicture />
      <h5>Anonymizer</h5>
    </Box>
  );
};

export default Profile;
