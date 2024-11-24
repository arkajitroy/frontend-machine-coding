import React from "react";

const GridInput = ({ gridSize, handleModifyGridSize }) => {
  return (
    <>
      <div className="flex items-center gap-2 my-2">
        <label htmlFor="gridSize" className="font-semibold">
          Grid Size (max 10)
        </label>
        <input
          type="number"
          id="gridSize"
          value={gridSize}
          onChange={handleModifyGridSize}
          min={2}
          max={10}
          className="bg-transparent border-[1px] border-gray-300 rounded-lg p-1"
        />
      </div>
    </>
  );
};

export default GridInput;
