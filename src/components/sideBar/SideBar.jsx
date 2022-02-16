import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const SideBar = () => {
  const useStyles = makeStyles((theme) => ({
    sideBar : {
      backgroundColor : "#fff",
      margin : "1rem 1rem 0 0",
      padding : "0.5rem",
      borderRadius : "4px"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <Typography variant="h6" style={{fontSize : "0.9rem"}}>
          Department
      </Typography>
      <div style={{padding : "0.5rem"}}>
        <Typography variant="h6" style={{fontSize : "0.8rem"}}>
          Television & Monitor 
        </Typography>
      </div>
    </div>
  );
};

export default SideBar;
