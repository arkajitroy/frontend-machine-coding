import React from "react";

const LimitedMoveInput = ({ maxMoves, setMaxMoves }) => {
  const handleMaxMovesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 2 && value <= 10) {
      setMaxMoves(value);
    }
  };

  return (
    <div className="flex items-center gap-2 my-2">
      <label htmlFor="maxMoves" className="font-semibold">
        Max Moves
      </label>
      <input
        type="number"
        id="maxMoves"
        value={maxMoves}
        onChange={handleMaxMovesChange}
        min={2}
        max={10}
        className="bg-transparent border-[1px] border-gray-300 rounded-lg p-1"
      />
    </div>
  );
};

export default LimitedMoveInput;
