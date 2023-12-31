import { useEffect } from "react";
import Card from "../components/Card/Card";
import "../style/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, fetchingProducts } = useSelector(
    (store) => store.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home">
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
        {fetchingProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
