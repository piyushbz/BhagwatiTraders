import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './list.js'
import Grid from '@material-ui/core/Grid';
import image1 from '../../images/1.jpg';



const useStyles = makeStyles({
  main: {
    border: 'solid black',
    borderWidth:'0px 0px 0px 0px',
    backgroundColor:'#F8F8FF',
    //borderRadius:'5px'
   

  },
  box1: {
    border: 'solid black',
    borderWidth:'0px 0px 0.1em 0px',
    minHeight:'200px'
  },
  box2: {
    alignSelf:'center',
    padding:'auto',
    overflow:'hidden'
  },
  box3: {
    border: 'solid black',
    borderWidth:'0px 0px 0px 0.1em',
    padding:'20px 40px',
    fontFamily:"serif"
  },
  productName:{
    fontSize:'1.7em',
    fontWeight:'bold',
  },
  table:{
    padding:'2px 5px 2px 0px',
    minWidth:'8em',
    fontFamily:"Calibri,Garamond,arial,helvetica",
    fontSize:'18px'
  }
});

export default function ProductCard(product) {
  console.log(product)
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid className={classes.box1} container xs={12}>
        <Grid className={classes.box2} item xs={12} sm={4}>
        
          <img src={image1} style={{width:'100%'}}/>
        </Grid>
        <Grid className={classes.box3} item xs={12} sm={8}>
          <div className={classes.productName}>
            {product.product["Product Name"]}
          </div>
          <Grid item xs={12} style={{fontSize:'15px',}}><i>Approx price: <b style={{color:'red',}}>{product.product["Price"]}</b></i></Grid>
          <Grid container xs={12} style={{padding:'10px 0px 0px 0px',}}>
            <Grid container xs={12} style={{fontSize:'20px',}}>Product Detail</Grid>
            {Object.keys(product.product["Product Details"]).map((key) => (
              <Grid container xs={12}>
                <Grid item xs={4} className={classes.table}><b>{key+":"}</b></Grid>
                <Grid item xs={8} className={classes.table}>{product.product["Product Details"][key]}</Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
