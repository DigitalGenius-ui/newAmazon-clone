import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/productSlice";

const SingleProduct = ({ item }) => {
  const useStyles = makeStyles((theme) => ({
    cart: {
      padding: "0.5rem",
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: "6px",
    },
    img: {
      width: "14rem",
      height: "14rem",
      objectFit : "contain"
    },
    image_container: {
      width: "100%",
      height: "16rem",
      objectFit: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    btn_container: {
      padding: "0.7rem 0",
      textAlign: "center",
    },
    btn: {
      padding: "0.4rem 1rem",
      cursor: "pointer",
      backgroundColor: "#ca7300",
      border: "1px solid #000",
      color: "#fff",
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title ,price, description, image } = item;

  const addItem = () => {
    dispatch(
      addCart({
        id: item.id,
        image,
        title,
        price,
        description
      })
    );
  };

  return (
    <div className={classes.cart}>
      <div className={classes.image_container}>
        <img className={classes.img} src={image} alt="" />
      </div>
      <h5>{title}</h5>
      <div style={{ display: "flex" }}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <div key={i} style={{ fontSize: "0.8rem", padding: "0.3rem 0" }}>
              ⭐️
            </div>
          ))}
      </div>
      <span>${price}</span>
      <div className={classes.btn_container}>
        <button className={classes.btn}
        onClick={addItem}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
