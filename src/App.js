import React from 'react';
import Memo from './useMemoExample/intensiveCalculation/index';
import Box from './useMemoExample/preservedReference/index';

function App() {

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gridTemplateAreas: '. content .' }}>
        <div></div>
        <div>
          <Memo />
          <Box />
          </div>
        <div></div>
      </div>
    </>
  );
}


export default App;




