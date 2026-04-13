import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;