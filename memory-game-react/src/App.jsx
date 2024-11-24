import React from "react";
import MemoryGame from "./app/pages/memory-game";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-4">
      <h3 className="text-blue-700 font-semibold text-2xl">GAME BOARD</h3>
      <MemoryGame />
    </div>
  );
};

export default App;
