import React, { useReducer } from 'react';

const initialState = { value: '', isEditing: false };

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.payload };
    case 'EDIT':
      return { ...state, isEditing: true };
    case 'SAVE':
      return { ...state, isEditing: false };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function EditableName({ onNameChange }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE', payload: event.target.value });
  };

  const handleEdit = () => {
    dispatch({ type: 'EDIT' });
  };

  const handleSave = () => {
    onNameChange(state.value);
    dispatch({ type: 'SAVE' });
  };

  return (
    <div>
      {state.isEditing ? (
        <div>
          <input type="text" value={state.value} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{state.value || 'Edit Name'}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EditableName;