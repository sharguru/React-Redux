import React from "react";

const Description = (props) => {
  return (
    <div className="productDesc">
      <button onClick={() => props.close()}>x</button>
      <h3>Description</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Description;
