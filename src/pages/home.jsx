import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const Home = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();

        setProducts(data);
      } catch (e) {
        console.log(e.massage);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      HomePage
      {/* <Card products={products}></Card> */}
    </div>
  );
};

export default Home;
