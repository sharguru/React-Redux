import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, openDescription } from "../Redux/cartDetail";
import Description from "./description";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const handleClickForDescription = () => {
    dispatch(openDescription(product.id));
  };

  const timerFunction = () => {
    const interval = setTimeout(() => {
      alert("Item Added");
    }, 400);
    return () => clearInterval(interval);
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.img} alt={product.name} className="rounded" />
      </div>
      <h3>{product.name}</h3>
      <p>Price : ${product.price}</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          timerFunction();
        }}
      >
        ADD
      </button>
      <button onClick={handleClickForDescription}>Read Description</button>
      {product.inCart && (
        <Description
          description={product.description}
          close={handleClickForDescription}
        />
      )}
    </div>
  );
}
