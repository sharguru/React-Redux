import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, subQuantity } from "../Redux/cartDetail";

export default function Cart() {
  const { addedItems } = useSelector((state) => state.cartDetail);
  const dispatch = useDispatch();

  return (
    <div className="cartItems">
      {addedItems.length === 0 && (
        <h4>No Item in Cart! Please Add some Products</h4>
      )}

      {addedItems.map((cartItem, index) => {
        return (
          <div className="cartItem" key={index}>
            <h3 key={cartItem.id}>
              {cartItem.name} <small>by {cartItem.author}</small>
            </h3>
            <div className="cartButton">
              <button
                className="button"
                onClick={() => dispatch(subQuantity(cartItem.id))}
              >
                -
              </button>
              <span className="quantity">{cartItem.quantity}</span>
              <button
                className="button"
                onClick={() => dispatch(addQuantity(cartItem.id))}
              >
                +
              </button>

              <span>
                * ${cartItem.price} = ${" "}
                {(cartItem.quantity * cartItem.price).toFixed(2)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
