import { useDispatch, useSelector } from "react-redux";
import "../style/cart.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Icon from "../components/icon";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";
import { selectProduct } from "../redux/productSlice";

const Cart = () => {
  const data = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIncrement = (id) => {
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="page">
      <ul className="page__breadcrumb">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>Cart</li>
      </ul>
      <div className="page__title">
        <h1>CART</h1>
      </div>
      {data?.products.length > 0 ? (
        <ul className="cart__list">
          <li>Name</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      ) : (
        <div>
          <p className="cart__empty">
            Sorry, you don't have any products in your cart. You can
            <Link to="/"> CONTINUE SHOPPING</Link>
          </p>
        </div>
      )}
      {data?.products.length > 0 &&
        data?.products.map((product) => {
          return (
            <div key={product.id} className="cart__card">
              <div
                className="cart__card__image-container"
                onClick={() => {
                  handleSelectProduct(product);
                }}
              >
                <img
                  className="cart__card__image"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h2 className="cart__card__title">{product.title}</h2>
              </div>
              <div className="cart__card__price">
                <p>{product.price}$</p>
              </div>
              <div className="cart__card__qty">
                <button onClick={() => handleDecrement(product.id)}>
                  <Icon id="minus" className="cart__card__qty-icon"></Icon>
                </button>
                <span>{product.qty}</span>
                <button onClick={() => handleIncrement(product.id)}>
                  <Icon id="plus" className="cart__card__qty-icon"></Icon>
                </button>
              </div>
              <div className="cart__card__total">
                <span>{product.qty * product.price}$</span>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className="cart__card__remove"
              >
                <Icon id="close" className="cart__card__remove-icon"></Icon>
              </button>
            </div>
          );
        })}
      {data?.products.length > 0 && (
        <div className="cart__total">
          <div className="cart__total__price">
            <p>Total price</p> <p>{data.totalPrice}$</p>
          </div>
          <div className="cart__total__discount">
            <p>Total discount</p>
            <p>{data.totalDiscount.toFixed(1)}$</p>
          </div>
          <div className="cart__total__pay">
            <p>To pay</p>
            <p className="cart__total__pay-orange">
              {data.totalPrice - data.totalDiscount.toFixed(1)}$
            </p>
          </div>
          <button className="btn--orange">Go to order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
