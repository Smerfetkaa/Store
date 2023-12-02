import "./Card.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement } from "../../redux/cartSlice";
import Icon from "../icon";
import { useState } from "react";
import { addToFavorite, removeFromFavorite } from "../../redux/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { selectProduct } from "../../redux/productSlice";

const Card = ({ product }) => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const products = useSelector((store) => store.favorite.products);
  const findFavorite = products.find((item) => item.id === product.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsAddToCart(!isAddToCart);
  };
  const handleRemoveFromCart = (id) => {
    dispatch(decrement(id));
    setIsAddToCart(!isAddToCart);
  };
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };
  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromFavorite(id));
  };

  const btnCartClass = isAddToCart
    ? "card__btnCart card__btnCart--check"
    : "card__btnCart";
  
  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="card">
      <div
        className="card__image-container"
        onClick={() => handleSelectProduct(product)}
      >
        <img
          className="card__image"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <h2 className="card__title" onClick={() => handleSelectProduct(product)}>
        {product.title}
      </h2>
      <div className="card__price-container">
        <p className="card__price">{product.price}$</p>
        <div className="card__btn-container">
          {findFavorite?.isFavorite ? (
            <button
              onClick={() => handleRemoveFromFavorite(product.id)}
              className="card__btnFavorite"
            >
              <Icon
                id="heart"
                className="card__btnFavorite-img card__btnFavorite-img--check"
              ></Icon>
            </button>
          ) : (
            <button
              onClick={() => handleAddToFavorite(product)}
              className="card__btnFavorite"
            >
              <Icon id="heart" className="card__btnFavorite-img"></Icon>
            </button>
          )}

          {isAddToCart ? (
            <button
              className={btnCartClass}
              onClick={() => handleRemoveFromCart(product.id)}
            >
              <Icon
                id="check-circle"
                className="card__btnCart-img card__btnCart-img--check"
              ></Icon>
            </button>
          ) : (
            <button
              className={btnCartClass}
              onClick={() => handleAddToCart(product)}
            >
              <Icon id="shopping-cart" className="card__btnCart-img"></Icon>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
