import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.scss";
import Icon from "../icon";
import HeaderBtn from "./HeaderBtn";
import { categoryItems } from "../../helpers/categories";
import { setCategoryFilter } from "../../redux/productSlice";

const Header = () => {
  const cartTotalProduct = useSelector((store) => store.cart.totalProduct);
  const favoriteTotalProduct = useSelector(
    (store) => store.favorite.totalProduct
  );
  const activeCategory = useSelector((store) => store.product.categoryFilter);
  const dispatch = useDispatch();
  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };
  return (
    <div>
      <div className="head">
        <div className="head__logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <nav className="head__nav">
          <NavLink to="/cart" className="head__nav__link">
            <div>
              <span>{cartTotalProduct}</span>
            </div>
            <Icon id="shopping-cart" className="head__nav__img"></Icon>
          </NavLink>
          <NavLink to="/favorites" className="head__nav__link">
            <div>
              <span>{favoriteTotalProduct}</span>
            </div>
            <Icon id="heart" className="head__nav__img"></Icon>
          </NavLink>
        </nav>
      </div>
      <div className="categories">
        <button
          onClick={() => handleCategoryChange("")}
          key="all"
          className={activeCategory === "" ? "btn-active" : ""}
        >
          <Link to="/"> All Products</Link>
        </button>
        {categoryItems.map((btn) => (
          <HeaderBtn
            key={btn.category}
            category={btn.category}
            title={btn.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
