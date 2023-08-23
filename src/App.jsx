import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import Product from "./pages/Product"
import Error from "./pages/Error"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App