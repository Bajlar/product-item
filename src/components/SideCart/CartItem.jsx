import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, handleDelete }) => {
  const { name, price, _id } = item;

  return (
    <div className="flex justify-between items-center border my-1 p-1">
      <div className="mb-4">
        <h2 className="text-lg">{name}</h2>
        <p>
          Price: <span className="text-orange-400">${price}</span>
        </p>
      </div>
      <button onClick={() => handleDelete(_id)}>
        <FaTrashAlt className="text-2xl text-red-500" />
      </button>
    </div>
  );
};

export default CartItem;