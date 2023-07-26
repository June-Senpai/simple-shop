import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const Shop = () => {
  return (
    <>
      <div className="flex justify-center items-center text-2xl ">Shop</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Shop;
