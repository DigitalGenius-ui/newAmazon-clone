import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import CartUi from "./CartUi";
import { clearAll } from "../../redux/productSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const useStyles = makeStyles((theme) => ({
    cartUi: {
      display: "flex",
      gap: "0.5rem",
      margin: "0.7rem",
    },
    ui: { flex: 2.9, display: "flex", flexDirection: "column", gap: "0.5rem" },
    subtotal: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "1.2rem 1rem",
      borderRadius: "5px",
      height: "8rem",
    },
    btn: {
      width: "100%",
      padding: "0.5rem 0.5rem",
      backgroundColor: "#fad400",
      border: "none",
      boxShadow: `-3px 15px 30px -16px rgba(207,204,204,0.75),
            -webkit-box-shadow: -3px 15px 30px -16px rgba(207,204,204,0.75),
            -moz-box-shadow: -3px 15px 30px -16px rgba(207,204,204,0.75)`,
      borderRadius: "4px",
      cursor: "pointer",
    },
    header: {
      fontSize: "1.2rem",
      padding: "0.5rem",
    },
  }));
  const classes = useStyles();
  const itemPrice = cartItems.filter((item) => item.price);
  const subtotal = itemPrice
    .reduce((acc, cur) => acc + cur.price, 0)
    .toFixed(2);
  const dispatch = useDispatch();
  return (
    <div className={classes.cartUi}>
      <div className={classes.ui}>
        {cartItems.length === 0 ? (
          <h1 className={classes.header}>Your Cart is Empty</h1>
        ) : (
          <h1 className={classes.header}>Your Cart Items :</h1>
        )}
        {cartItems.map((item) => (
          <CartUi key={item.id} item={item} />
        ))}
        {cartItems.length > 0 && (<button
          style={{
            width: "5rem",
            padding: "0.3rem",
            fontWeight: "300",
            backgroundColor: "#ca7300",
            color : "white",
            cursor: "pointer",
            border : "1px solid #000"
          }}
          onClick={() => {dispatch(clearAll())}}
        >
          Clear All
        </button>)}
      </div>
      <div className={classes.subtotal}>
        <h3>
          Subtotal ({cartItems.length} items) : ${subtotal}
        </h3>
        <div style={{ paddingTop: "1.3rem" }}>
          <button className={classes.btn}>Proceed toc checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
