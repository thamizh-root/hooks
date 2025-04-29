import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FocusableInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" {...props} />;
});

export default FocusableInput;