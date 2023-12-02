import "../style/product.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoryItems, findCategoryName } from "../helpers/categories";
import Icon from "../components/icon";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";
import { useEffect, useState } from "react";
import { addToCart } from "../redux/cartSlice";
import { setCategoryFilter } from "./../redux/productSlice";
const Product = () => {
  const { product } = useSelector((store) => store.product);
  const products = useSelector((store) => store.favorite.products);
  const findFavorite = products.find((item) => item.id === product.id);

  const dispatch = useDispatch();
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };
  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromFavorite(id));
  };
  const categoryName = categoryItems.find(
    (item) => item.category === product.category
  );
  const stock =
    product.stock > 0 ? (
      <p className="product__content__stock--available">Available</p>
    ) : (
      <p className="product__content__stock--unavailable">Unavailable</p>
    );
  const [index, setIndex] = useState(product.images.length - 1);
  useEffect(() => {
    setIndex(product.images.length - 1);
  }, [product]);
  const next = () => {
    index === product.images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const prev = () => {
    index === 0 ? setIndex(product.images.length - 1) : setIndex(index - 1);
  };
  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };
  return (
    <div className="page">
      <ul className="page__breadcrumb">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              handleCategoryChange(categoryName?.category);
            }}
            to={`/categories/${categoryName?.category}`}
          >
            {categoryName?.title}
          </NavLink>
        </li>
        <li>{product.title}</li>
      </ul>
      <div className="product">
        <div className="product__image">
          <div className="product__image__container">
            <img
              className="product__image--main"
              src={product.images[index]}
              alt={product.title}
            />
            <div className="actions">
              <button onClick={prev}>
                <Icon id="arrow-left" className="actions__icon" />
              </button>
              <button onClick={next}>
                <Icon id="arrow-right" className="actions__icon" />
              </button>
            </div>
          </div>
          <div className="product__thumbnail">
            {product.images.map((img, i) => (
              <img
                height="60px"
                key={i}
                src={img}
                alt={product.title}
                onClick={() => setIndex(i)}
                className={index === i ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <div className="product__content">
          <h2 className="product__content__title">{product.title}</h2>
          {stock}
          <p className="product__content__description">{product.description}</p>
          <h3 className="product__content__price">{product.price} $</h3>
          <div className="product__content__btns">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn--orange"
            >
              TO CART
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
