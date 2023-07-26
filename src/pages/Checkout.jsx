import React from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-8xl">
        Thank you for Purchasing
        <button
          onClick={() => navigate("/")}
          className="border-2 rounded-xl p-2 bg-gray-300 hover:opacity-90 mt-12"
        >
          Continue Shopping
        </button>
      </div>
    </>
  )
}

export default Checkout
