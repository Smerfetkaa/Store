import { useEffect } from "react";
import Card from "../components/Card/Card";
import "../style/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { NavLink } from "react-router-dom";
import { categoryItems } from "../helpers/categories";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, fetchingProducts, categoryFilter } = useSelector(
    (store) => store.product
  );
  const categoryName = categoryItems.find(
    (item) => item.category === categoryFilter
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <ul className="page__breadcrumb">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>{categoryName?.title}</li>
      </ul>

      {isLoading && (
        <div className="loading">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}
      <div className="cards__container">
        {fetchingProducts
          .filter(
            (product) => !categoryFilter || product.category === categoryFilter
          )
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
