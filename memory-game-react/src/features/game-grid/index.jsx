import React from "react";

const GameGrid = ({
  cards,
  gridSize,
  handleGridCellClick,
  isFlipped,
  isMatched,
  isSolved,
}) => {
  return (
    <main
      className={`grid gap-2 min-w-[400px] min-h-[400px] my-2 bg-white p-2 h-1/2 shadow-lg rounded-lg`}
      style={{
        gridTemplateColumns: `repeat(${gridSize},minmax(0, 1fr))`,
        width: `min(100%, ${gridSize * 5.5}rem)`,
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleGridCellClick(card.id)}
          className={`aspect-square flex items-center justify-center font-bold text-xl rounded-lg cursor-pointer transition-all duration-300 border-gray-200 border-[1.5px] 
            ${
              isMatched(card.id)
                ? "bg-green-600 text-white"
                : isFlipped(card.id)
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:border-blue-600"
            }`}
        >
          {isMatched(card.id) || isFlipped(card.id) ? card.val : "?"}
        </div>
      ))}
    </main>
  );
};

export default GameGrid;
