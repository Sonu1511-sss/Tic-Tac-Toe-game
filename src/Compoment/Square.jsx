import React from 'react';
import clsx from 'clsx';

const Square = ({ value, onClick }) => (
  <button
    className={clsx(
      "w-24 h-24 flex items-center justify-center text-4xl font-bold border border-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110",
      value === 'X' ? "text-yellow-500 animate-pop" : "text-cyan-500 animate-pop"
    )}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
