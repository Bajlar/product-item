import React from 'react';

const Button = ({ handleAddToCart, item }) => {
  return (
    <div>
      <button
        onClick={() => handleAddToCart(item)}
        className="mt-4 w-full text-lg font-semibold bg-sky-500 hover:bg-sky-800 py-2 text-white"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Button;