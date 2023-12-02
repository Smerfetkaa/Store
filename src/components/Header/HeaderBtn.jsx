import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../redux/productSlice";
import "./Header.scss";
import { Link } from "react-router-dom";

const HeaderBtn = ({ category, title }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((store) => store.product.categoryFilter);

  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <button
      key={category}
      onClick={() => handleCategoryChange(category)}
      className={activeCategory === category ? "btn-active" : ""}
    >
      <Link to={`/categories/${category}`}>{title}</Link>
    </button>
  );
};

export default HeaderBtn;
