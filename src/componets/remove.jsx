import { useState } from "react";

const Remove = ({ onRemove }) => {
  return (
    <>
      <button
        onClick={onRemove}
        className="px-4 py-1 m-1 remove rounded-full hover:bg-gray-500 transition-colors duration-200"
      >
        Remove
      </button>
    </>
  );
};

export default Remove;
