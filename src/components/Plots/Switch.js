import React from 'react';
import './Switch.css';

const Switch = () => {
  
  return (
    <>
      <input        
        onChange={() => setIsComplete(!iscomplete)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        value={iscomplete}
        checked={iscomplete}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;

