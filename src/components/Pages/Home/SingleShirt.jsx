import React from 'react';
import Button from './Button';

const SingleShirt = ({ item, handleAddToCart }) => {
  const { price, picture, name, gender } = item;
  return (
    <div className="border-2 p-4">
      <img className="w-full h-64 border p-2" src={picture} alt="" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>Gender: {gender}</p>
        <p>
          Price: <span className="text-orange-400">${price}</span>
        </p>
        <Button handleAddToCart={handleAddToCart} item={item} />
      </div>
    </div>
  );
};

export default SingleShirt;