import { useState, useEffect, useDebugValue } from 'react';

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    console.log(`Fetching status for friend ${friendId}...`);
    setTimeout(() => {
      const onlineStatus = friendId % 2 === 0;
      setIsOnline(onlineStatus);
    }, 2000);

    return () => {
      console.log(`Cleaning up status fetch for ${friendId}`);
      // Any cleanup logic here
    };
  }, [friendId]);

  useDebugValue(isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline', status => `Friend ${friendId} is: ${status}`);

  return isOnline;
}

export default useFriendStatus;