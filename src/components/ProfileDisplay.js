import React, { useState } from 'react';

function ProfileDisplay({ initialName, initialBio }) {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

export default ProfileDisplay;