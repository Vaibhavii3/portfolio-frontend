import React from 'react';

function ProfileSection() {
  return (
    <section>
      <h2>Profile</h2>
      <img src="profile.jpg" alt="Profile" style={{ borderRadius: '50%', width: '100px' }} />
      <p>About Section</p>
      <button>Customize</button>
    </section>
  );
}

export default ProfileSection;
