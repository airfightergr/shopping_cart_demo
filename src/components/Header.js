import React from "react";

export default function Header(props) {
  const { countCartItems } = props;

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#cart">
          Cart Items:{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            "Empty"
          )}
        </a>
      </div>
    </header>
  );
}
