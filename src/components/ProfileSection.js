import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Profile.css';

function ProfileSection() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profilePage");
  }

  return (

    <div className='main-box' onClick={handleClick}>

      <img src="../img/profile.jpg" alt="Profile" className='image' style={{ borderRadius: '50%',  }} />

    </div>

  );
}

export default ProfileSection;
