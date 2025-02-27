import React from "react";
import BinaryLaptop from "../components/BinaryLaptop";


const ProfilePage = () => {
    return (
        <div className="profile-page">
          <h1>Welcome to My Profile</h1>
          <BinaryLaptop />
          <p>
            I'm a passionate developer who creates interactive and responsive web
            applications!
          </p>
        </div>
      );
};

export default ProfilePage;