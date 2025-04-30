import React from 'react';
import './index.css';

function Boxes({ boxes }) {
  console.info(
    'Render Boxes ' +
      new Date().toLocaleTimeString(
        'en-US'
      )
  );

  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </div>
  );
}

export default React.memo(Boxes);