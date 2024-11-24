import React, { useEffect, useState, useCallback } from "react";
import GameGrid from "../../../features/game-grid";
import GridInput from "../../../features/grid-input";
import LimitedMoveInput from "../../../features/limited-input";

export default function MemoryGame() {
  const [gridSize, setGridSize] = useState(4);
  const [maxMoves, setMaxMoves] = useState(5);
  const [moves, setMoves] = useState(0);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [matched, setMatched] = useState([]); // State for permanently flipped cards
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const isFlipped = useCallback((cardId) => flipped.includes(cardId), [flipped]);
  const isSolved = useCallback((cardId) => solved.includes(cardId), [solved]);
  const isMatched = useCallback((cardId) => matched.includes(cardId), [matched]);

  const handleModifyGridSize = (e) => {
    const parsedValue = parseInt(e.target.value, 10);
    if (parsedValue >= 2 && parsedValue <= 10) {
      setGridSize(parsedValue);
    }
  };

  const initializeGame = useCallback(() => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = Array.from({ length: pairCount }, (_, i) => i + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((num, index) => ({ id: index, val: num }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setMatched([]);
    setMoves(0);
    setWon(false);
    setDisabled(false);
  }, [gridSize]);

  const checkMatch = useCallback(
    (secondId) => {
      const [firstId] = flipped;

      if (cards[firstId].val === cards[secondId].val) {
        setSolved((prev) => [...prev, firstId, secondId]);
        setMatched((prev) => [...prev, firstId, secondId]); // Add to matched state
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    },
    [cards, flipped]
  );

  const handleGridCellClick = (cardId) => {
    if (disabled || won || isSolved(cardId) || isFlipped(cardId) || isMatched(cardId))
      return;

    if (moves + 1 >= maxMoves) {
      setDisabled(true);
      return;
    }

    setMoves((prev) => prev + 1);

    if (flipped.length === 0) {
      setFlipped([cardId]);
    } else if (flipped.length === 1) {
      setFlipped((prev) => [...prev, cardId]);
      setDisabled(true);
      checkMatch(cardId);
    }
  };

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);

  return (
    <>
      <GridInput gridSize={gridSize} handleModifyGridSize={handleModifyGridSize} />
      <LimitedMoveInput maxMoves={maxMoves} setMaxMoves={setMaxMoves} />

      <button
        onClick={initializeGame}
        className="my-4 bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white px-7 py-2 rounded-full"
      >
        {won ? "Play Again" : "Reset Game"}
      </button>

      <GameGrid
        cards={cards}
        gridSize={gridSize}
        handleGridCellClick={handleGridCellClick}
        isFlipped={isFlipped}
        isMatched={isMatched}
        isSolved={isSolved}
      />
      <h2 className="text-xl">
        Moves:{" "}
        <strong>
          {moves}/{maxMoves}
        </strong>
      </h2>
      {won && (
        <h2 className="mt-4 text-xl font-bold text-emerald-600 animate-bounce">
          Congratulations! You won the game!
        </h2>
      )}
      {!won && moves >= maxMoves && (
        <h2 className="mt-4 text-xl font-bold text-red-600">
          Game Over! You've used all your moves.
        </h2>
      )}
    </>
  );
}
