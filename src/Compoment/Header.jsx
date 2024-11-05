import React from 'react';

const Header = ({ resetGame }) => (
  <header className="mb-4">
    <h1 className="text-3xl font-bold text-gray-100">Tic Tac Toe  Game In <span className='text-cyan-400'>React</span></h1>
    <button
      onClick={resetGame}
      className="mt-2 ml-28 px-4 py-2 bg-cyan-400 text-black font-semibold rounded"
    >
      Reset Game
    </button>
  </header>
);

export default Header;
