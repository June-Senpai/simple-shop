import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./component/navbar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import ShopContextProvider from "./context/shopContext"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <>
      <div className="">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  )
}

export default App
