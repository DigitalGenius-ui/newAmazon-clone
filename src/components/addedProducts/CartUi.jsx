import React from "react";
import { makeStyles } from "@material-ui/core";
import { addCart, decreaseCart, removeCart } from "../../redux/productSlice";
import { useDispatch } from "react-redux";

const CartUi = ({ item}) => {
  const useStyles = makeStyles((theme) => ({
    ui: {
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "0.5rem",
      display: "flex",
      gap: "1rem",
    },
    container: {
      padding: "0.5rem 0",
    },
    btn: {
      padding: "0.3rem 0.5rem",
      cursor: "pointer",
      backgroundColor: "#ca7300",
      border: "1px solid #000",
      color: "#fff",
    },
    select :{
        width : "6rem",
        cursor : "pointer",
        padding : "0.2rem 0",
        outline : "none"
    },
    btns : {
      display: "flex",
      aligItems : "center",
      gap : "0.5rem",
      marginTop : "0.5rem"
    },
    button : {
      width : "1.2rem",
      height: "1.2rem",
      textAlign : "center",
      cursor: "pointer"
    }
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, title ,price, description, image, cartQuantity } = item;
  console.log(
    description
  )

  return (
    <div key={item.id} className={classes.ui}>
      <div>
        <img style={{ width: "8rem" }} src={image} alt="tv" />
      </div>
      <div className={classes.container}>
        <div style={{fontWeight : "500"}}>{title}</div>
        <div style={{padding : "0.4rem 0", fontSize : "0.9rem"}}>{description}</div>
        <div style={{ display: "flex" }}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} style={{ fontSize: "0.8rem", padding: "0.3rem 0" }}>
                ⭐️
              </div>
            ))}
        </div>
        <div className={classes.btns}>
          <span style={{marginRight : "0.4rem"}}>${(price * cartQuantity).toFixed(2)}</span>
          <div>
            <button onClick={() => {dispatch(decreaseCart({id}))}} className={classes.button}>-</button>
            <span style={{margin : "0 0.5rem"}}>{cartQuantity}</span>
            <button onClick={() => {dispatch(addCart({id}))}} className={classes.button}>+</button>
          </div>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <button
            onClick={() => {dispatch(removeCart({id : id}))}}
            className={classes.btn}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartUi;
