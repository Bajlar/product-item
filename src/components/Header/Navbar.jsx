import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Item from "./Item";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("navData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [])

  return (
    <div className="md:w-10/12 mx-auto py-4 md:px-0 px-4">
      <div className="relative flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">T-Shirt</h1>
        </Link>
        <div className="hidden md:flex gap-8 text-lg font-bold">
          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
        {/* Mobile Navbar Section */}
        <div className="md:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="text-2xl text-gray-600" />
          </button>
          {isOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <Link to="/">
                    <h1 className="text-2xl font-bold text-black">T-Shirt</h1>
                  </Link>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaX className="text-2xl text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <Item key={item.id} item={item}></Item>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
