import React, { useState, useRef } from 'react';
import ProfileDisplay from './components/ProfileDisplay';
import EditableName from './components/EditableName';
import EditableBio from './components/EditableBio';
import SaveButton from './components/SaveButton';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeContext } from './contexts/ThemeContext';
import ErrorFallback from './components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import FocusableInput from './components/FocusableInput';
import CustomInput from './components/CustomInput';
import FriendStatusIndicator from './components/FriendStatusIndicator';
import UniqueIdLabelledInput from './components/UniqueIdLabelledInput';

function App() {
  const [profileName, setProfileName] = useState('Initial Name');
  const [profileBio, setProfileBio] = useState('Initial Bio');
  const focusableInputRef = useRef();

  const handleNameChange = (newName) => {
    setProfileName(newName);
    console.log('Name updated:', newName);
  };

  const handleBioChange = (newBio) => {
    setProfileBio(newBio);
    console.log('Bio updated:', newBio);
  };

  const handleSaveProfile = () => {
    // Simulate saving
    alert(`Saving profile: Name - ${profileName}, Bio - ${profileBio}`);
  };

  const handleFocusInput = () => {
    if (focusableInputRef.current) {
      focusableInputRef.current.focus();
    }
  };

  const handleCustomInputChange = (value) => {
    console.log('Custom input changed:', value);
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`app ${theme}`}>
          <h1>Profile Editor</h1>
          <ProfileDisplay initialName={profileName} initialBio={profileBio} />
          <EditableName onNameChange={handleNameChange} />
          <EditableBio initialBio={profileBio} onBioChange={handleBioChange} />
          <SaveButton onSave={handleSaveProfile} />
          <ThemeSwitcher />
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            {/* Components that might error */}
          </ErrorBoundary>
          <div>
            <FocusableInput ref={focusableInputRef} placeholder="Focusable Input" />
            <button onClick={handleFocusInput}>Focus Input</button>
          </div>
          <CustomInput onInputChange={handleCustomInputChange} />
          <FriendStatusIndicator friendId={1} />
          <FriendStatusIndicator friendId={2} />
          <UniqueIdLabelledInput />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;