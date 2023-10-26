import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import icon from "./assets/icons/shopping-cart.svg";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <div> dasnfakfafl</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">
        <img src={icon} alt=""></img>
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
