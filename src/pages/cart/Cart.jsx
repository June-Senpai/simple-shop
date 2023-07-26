import React, { useContext } from "react"
import { PRODUCTS } from "../../product"
import { ShopContext } from "../../context/shopContext"
import CartItem from "./cartItem"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center items-center text-4xl mb-5 ">
        Your Cart
      </div>
      <div className="flex flex-col justify-center items-center ">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="text-center text-3xl mt-3">
          <p> Subtotal: ₹{totalAmount} </p>
          <button
            onClick={() => navigate("/")}
            className="border-2 rounded-xl p-2 bg-gray-300 hover:opacity-90"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              checkout()
              navigate("/checkout")
            }}
            className="border-2 rounded-xl p-2 bg-green-400 hover:opacity-90 ml-3"
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="text-4xl text-center"> Your Shopping Cart is Empty</h1>
      )}
    </>
  )
}

export default Cart
