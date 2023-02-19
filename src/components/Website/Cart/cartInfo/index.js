import React from "react";
import "./styles.scss";

const CartInfo = () => {
  return (
    <section className={`cart-info`}>
      <div className="wrapper">
        <div className={`title`}>
          <h2>My Cart</h2>
        </div>
        <div className={`cart-header`}>
          <button
            className={`btn-secondary`}
            style={{ height: "50px", width: "150px" }}
          >
            continue shopping
          </button>
          <div className={`cart-count`}>
            <span>shopping cart(21)</span>
            <span>my wishlist(7)</span>
          </div>
          <button
            className={`btn-primary`}
            style={{ height: "50px", width: "150px" }}
          >
            checkout now
          </button>
        </div>
        <div className={`cart-grid`}>
          <div className={`cart-items`}>cart items</div>
          <div className={`cart-order`}>order</div>
        </div>
      </div>
    </section>
  );
};

export default CartInfo;
