import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducers);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <Link to={`/details/${product.id}`}>
                    <img src={`/images/${product.image}`} alt="image name" />
                  </Link>
                </div>
                <div className="product__name">{product.name}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product__price">
                      <span className="actualPrice">${product.price}00</span>{" "}
                      <span className="discount">{product.discount}%</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product__discount__price">
                      ${product.discountPrice}00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
