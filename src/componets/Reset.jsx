import React from "react";

const Reset = ({ onReset }) => {
  return (
    <div className="flex justify-center py-6 px-4">
      <button onClick={onReset} className="reset" style={{}}>
        Reset All Cards
      </button>
    </div>
  );
};

export default Reset;
