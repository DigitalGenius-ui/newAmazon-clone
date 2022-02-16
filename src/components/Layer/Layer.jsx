import { makeStyles } from '@material-ui/core';
import React from 'react';
import Products from '../Products/Products';
import SideBar from '../sideBar/SideBar';

const Layer = () => {
    const useStyles = makeStyles((theme) => ({
        menu:{
            display : "flex",
            padding : "0.5rem"
        },
        sidebar :{
            flex :1
        },
        product:{
            flex : 3
        }
    }));
    const classes = useStyles();
  return (
      <div className= {classes.menu}>
          <div className={classes.sidebar}><SideBar /></div>
          <div className={classes.product}><Products/></div>
      </div>
  );
};

export default Layer;
