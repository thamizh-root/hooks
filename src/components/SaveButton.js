import React, { useRef, useLayoutEffect } from 'react';

function SaveButton({ onSave }) {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      console.log('Save button DOM dimensions:', buttonRef.current.getBoundingClientRect());
      // Perform any layout-related tasks here if needed
    }
  }, []); // Runs after the DOM is updated

  return <button ref={buttonRef} onClick={onSave}>Save Profile</button>;
}

export default SaveButton;