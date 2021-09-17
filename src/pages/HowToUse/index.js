import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RandDImage from "../../images/RD.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "justify",
    width: "100%",
    height: "100vh",
    margin: "auto",
    //backgroundColor: 'white',
    overflow: "hidden",
  },

  hr: {
    width: "30px",
    height: "5px",
    backgroundColor: "orange",
    border: "solid orange",
    borderRadius: "2.5px",
    display: "table-cell",
  },
  main: {
    backgroundColor: "white",
    width: "100%",
    height: "100vh",
  },
  heading: {
    fontSize: "30px",
    margin: "10px 0px 0px 0px",
  },
  content: {
    fontSize: "16px",
    margin: "10px 0px",
  },
}));

function Product() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          Three Easy Steps
        </Grid>
        <Grid item xs={4}>
          Drill
        </Grid>
        <Grid item xs={4}>
          Mix
        </Grid>
        <Grid item xs={4}>
          Pour
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;
