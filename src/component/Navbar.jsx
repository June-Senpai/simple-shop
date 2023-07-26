import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-2xl text-white ">
      <Link className="ml-4 hover:text-blue-300" to="/">
        Shop
      </Link>
      <Link className="mr-8 hover:text-blue-300" to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>
  );
};

export default Navbar;
