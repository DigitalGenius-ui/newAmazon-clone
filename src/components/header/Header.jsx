import { makeStyles } from "@material-ui/core";
import React from "react";
import { Search, AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#070718",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2rem 0 1rem",
      height: "58px",
    },
    image: {
      width: "5rem",
      marginTop: "0.4rem",
    },
    search: {
      display: "flex",
      alignItems: "center",
      flex: 1,
      backgroundColor: "white",
      marginLeft: "0.4rem",
      borderRadius: "4px",
      overflow: "hidden",
    },
    input: {
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      padding: "0.6rem",
      outline: "none",
    },
    icon: {
      backgroundColor: "#ffb867",
      width: "3rem",
      height: "2.4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    menu: {
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    singleMenu: {
      marginLeft: "1.2rem",
      cursor: "pointer",
      padding: "0.3rem",
      "&:hover": {
        border: "1px solid #fff",
      },
    },
    shopIcon: {
      marginLeft: "1.2rem",
      marginTop: "0.3rem",
      cursor: "pointer",
    },
    logo: {
      padding: "0.3rem",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #fff",
      },
    },
  }));
  const classes = useStyles();
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img
            className={classes.image}
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="amazon logo"
          />
        </div>
      </Link>
      <div className={classes.search}>
        <input type="text" className={classes.input} />
        <span className={classes.icon}>
          <Search style={{ fontSize: "1.7rem", cursor: "pointer" }} />
        </span>
      </div>
      <div className={classes.menu}>
        <div className={classes.singleMenu}>
          <span style={{ fontSize: "0.7rem" }}>Hello, Me</span>
          <h4 style={{ fontSize: "0.8rem" }}>Account & List</h4>
        </div>
        <div className={classes.singleMenu}>
          <span style={{ fontSize: "0.7rem" }}>Return</span>
          <h4 style={{ fontSize: "0.8rem" }}>& Orders</h4>
        </div>
        <Link to="/cart">
          <Badge
            badgeContent={cartItems.length}
            color="error"
            className={classes.shopIcon}
          >
            <div>
              <AddShoppingCart style={{ fontSize: "2rem" }} />
            </div>
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Header;
