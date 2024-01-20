import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="row">
      <img className="small" src={product.thumbnail} alt={product.title}></img>
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
