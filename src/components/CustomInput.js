import React, { useState, useMemo, useCallback } from 'react';

function CustomInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  // Memoize the formatted value
  const formattedValue = useMemo(() => {
    return inputValue.toUpperCase();
  }, [inputValue]);

  // Memoize the handle change function
  const handleChange = useCallback((event) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  }, [onInputChange]);

  return (
    <div>
      <label>Enter Text:</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Formatted Value: {formattedValue}</p>
    </div>
  );
}

export default CustomInput;