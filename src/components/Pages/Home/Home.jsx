import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleShirt from "./SingleShirt";
import SideCart from "../../SideCart/SideCart";
import Swal from "sweetalert2";

const Home = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const exists = cart.find((pd) => pd._id === item._id);
    if (exists) {
      Swal.fire({
        icon: "error",
        title: "Oops... Already added",
        text: "Something went wrong!",
      });
    } else {
      const newCart = [...cart, item];
      setCart(newCart);
    }
  };

  const handleDelete = (id) => {
    const remaining = cart.filter((item) => item._id !== id);
    setCart(remaining);
  };

  return (
    <div className="md:flex gap-4 my-10">
      <div className="md:w-3/4 grid md:grid-cols-3 gap-4">
        {data.map((item) => (
          <SingleShirt
            key={item._id}
            item={item}
            handleAddToCart={handleAddToCart}
          ></SingleShirt>
        ))}
      </div>
      <div className="md:w-1/4 border-2 md:mt-0 mt-4">
        <SideCart cart={cart} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Home;
