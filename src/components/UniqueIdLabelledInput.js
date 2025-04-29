import React from 'react';
import { useId } from 'react';

function UniqueIdLabelledInput() {
  const inputId = useId();
  return (
    <div>
      <label htmlFor={inputId}>Enter Value:</label>
      <input type="text" id={inputId} />
    </div>
  );
}

export default UniqueIdLabelledInput;