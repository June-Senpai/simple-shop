import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ">
        <img className="w-full h-[23rem]" src={productImage} alt="product" />
        <div className="px-6 py-4 flex flex-col justify-center items-center">
          <div className="font-bold text-xl mb-2">{productName}</div>
          <p className="text-gray-700 text-base">Price: ₹{price}</p>
          <button
            onClick={() => addToCart(id)}
            className="border-2 rounded-lg p-1 px-2 mt-3 hover:bg-green-200"
          >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
