import React, { useState, useEffect } from 'react';

function EditableBio({ initialBio, onBioChange }) {
  const [bio, setBio] = useState(initialBio);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      const timeoutId = setTimeout(() => {
        onBioChange(bio);
        setIsTyping(false);
        console.log('Bio saved after typing...');
      }, 1500); // Simulate saving after 1.5 seconds of inactivity
      return () => clearTimeout(timeoutId); // Cleanup on unmount or re-run
    }
  }, [bio, isTyping, onBioChange]);

  const handleChange = (event) => {
    setBio(event.target.value);
    setIsTyping(true);
  };

  return (
    <div>
      <label>Bio:</label>
      <textarea value={bio} onChange={handleChange} />
      {isTyping && <p>Saving...</p>}
    </div>
  );
}

export default EditableBio;