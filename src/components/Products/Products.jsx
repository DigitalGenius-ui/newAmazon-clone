import { makeStyles } from "@material-ui/core";
import React from "react";
import SingleProduct from "./SingleProduct";
import { useGetAllProductsQuery } from "../../redux/fetchData";

const Products = () => {
  const useStyles = makeStyles((theme) => ({
    item: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1rem",
    },
  }));
  const classes = useStyles();
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <div style={{margin : "1rem 0"}}>
        <img
          style={{ width: "90%", height : "9rem", objectFit : "cover" }}
          src="https://www.antevenio.com/fr/wp-content/uploads/2020/07/Your-Complete-Guide-to-Amazon-Advertising.png"
          alt="banner"
        />
      </div>
      <div className={classes.item}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error happened</p>
        ) : (
          <>
            {data.map((item) => (
              <SingleProduct item={item} key={item.id} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
