import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RandDImage from "../../images/RD.jpg";
import cutting from "../../images/cutting.jpeg";
import drilling from "../../images/drilling.jpg";
import CompleteList from'../product/list'
const pList=["Non-Explosive Expansive Motar","Drilling Tools","Cutting Tools"]
const pImg=[RandDImage,cutting,drilling]
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "white",
    overflow: "hidden",
    fontFamily:'shref',
  },
  gridItem: {
    //borderWidth:'6px 3px 3px 6px',
    marginBottom: "10px",
    padding: "20px",
    overflow: "hidden",
    "&:hover, &:focus": {
      fontWeight: "bold",
      backgroundColor: "#f6f6f6",
    },
  },
  gridContainer: {
    margin: "auto",
    width: "80%",
    fontSize: "18px",
  },
  paper: {
    //padding: theme.spacing(4),
    textAlign: "center",
    color: "none",
  },
  hr: {
    width: "100px",
    height: "2px",
    backgroundColor: "orange",
    border: "solid orange",
    borderRadius: "2px",
  },
  image: {
    height: "100%",
    width: "100%",
    maxWidth: "300px",
  },
  a:{
    textDecoration: "none",
    color:'black',
    fontFamily:'shref',
    fontSize:'18px'
  }
}));


function Product() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1>Mining Products</h1>
      <hr className={classes.hr} />
      <Box className={classes.gridContainer}>
        <Paper className={classes.paper}>
          <Grid container>
            {pList.map((productCategory,index)=>(
              
            
            <Grid className={classes.gridItem} item xs={12} sm={4}>
              <a className={classes.a} href={"products/"+productCategory}>
              <Grid xs={12}>{productCategory}</Grid>
              <hr />
              <img className={classes.image} src={pImg[index]} alt={productCategory} />
              </a>
            </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default Product;
