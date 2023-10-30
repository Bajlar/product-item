import React from 'react';
import CartItem from './CartItem';

const SideCart = ({ cart, handleDelete }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Add your product</p>;
  }

  return (
    <div className="sticky top-0">
      <h1 className="text-3xl text-orange-600 text-center font-bold underline underline-offset-4">
        Summary: {cart.length}
      </h1>
      <div>
        <div className="text-center">{message}</div>
        <div className="px-2 my-4 mx-2">
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></CartItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCart;