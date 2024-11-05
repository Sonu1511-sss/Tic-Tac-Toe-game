// src/App.jsx
import React, { useState } from 'react';
import { calculateWinner } from './utils/gameLogic.js';
import toast, { Toaster } from 'react-hot-toast';
import Header from './Compoment/Header.jsx';
import Board from './Compoment/Board.jsx';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    if (calculateWinner(newBoard)) {
      toast.success(`Player ${isXNext ? 'X' : 'O'} wins!`);
    } else if (newBoard.every(Boolean)) {
      toast('It\'s a draw!', { icon: '🤝' });
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <Toaster />
      <Header resetGame={resetGame} />
      {winner && <p className="text-xl font-semibold text-green-500">Winner: {winner}</p>}
      <Board squares={board} onClick={handleClick} />
    </div>
  );
};

export default App;
