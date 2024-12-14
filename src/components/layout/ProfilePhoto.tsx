import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="relative w-48 h-48">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=80"
        alt="Profile"
        className="w-full h-full object-cover border-4 border-white shadow-lg"
      />
      <div className="absolute inset-0 ring-2 ring-black/5"></div>
    </div>
  );
};

export default ProfilePhoto;