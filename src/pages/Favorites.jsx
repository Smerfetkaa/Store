import { Link, NavLink } from "react-router-dom";
import "../style/favorites.scss";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";

const Favorites = () => {
  const data = useSelector((store) => store.favorite);

  return (
    <div className="page">
      <ul className="page__breadcrumb">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>Favorites</li>
      </ul>
      <div className="page__title">
        <h1>Favorites</h1>
      </div>
      <div className="cards__container">
        {data.products?.length > 0 ? (
          data.products?.map((product) => (
            <Card key={product.id} product={product}/>
          ))
        ) : (
          <div>
            <p className="cart__empty">
              Sorry, you don't have any products in your favorites. You can 
              <Link to="/"> CONTINUE SHOPPING</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
