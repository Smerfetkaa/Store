import "./Card.scss";
import iconCart from "../../assets/icons/shopping-cart.svg";

const Card = ({ products }) => {
  const newProducts = products.products;

  console.log(newProducts);
  return (
    <div>
      {newProducts.length > 0 &&
        newProducts.map((product) => {
          return (
            <div>
              <div key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.price}$</p>
                <button>
                  <img src={iconCart} alt="iconCart" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
