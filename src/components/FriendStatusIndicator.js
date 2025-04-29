import React from 'react';
import useFriendStatus from '../hooks/useFriendStatus';

function FriendStatusIndicator({ friendId }) {
  const isOnline = useFriendStatus(friendId);

  return <p>Friend {friendId} is: {isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'}</p>;
}

export default FriendStatusIndicator;