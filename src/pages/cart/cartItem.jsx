import React, { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext)
  return (
    <>
      <div className="">
        <div className="flex shadow-lg pr-4 rounded-xl mb-5">
          <img src={productImage} width={128} height={128} alt="productImage" />
          <div className="flex flex-col mt-7 ml-8 text-2xl ">
            <p className="font-bold">{productName}</p>
            <p className="font-light">₹{price}</p>
            <div className="">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
                className="w-[10%]"
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
