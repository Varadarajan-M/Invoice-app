import React from 'react';
import '../../navbar/Navbar.scss';
import Backdrop from '@mui/material/Backdrop';

const Profile = ({ profileClick, onClose }) => {
  return (
    <Backdrop open={profileClick} onClick={onClose} sx={{ zIndex: 1302 }}>
      <div class='profile d-flex flex-column min-vh-100 min-vw-100 justify-content-center align-items-center'>
        <h1>Your Profile</h1>

        <p>View Git Repo</p>
      </div>
    </Backdrop>
  );
};

export default Profile;
