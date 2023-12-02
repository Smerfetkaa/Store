import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/categories/:categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
