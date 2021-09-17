import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./productBar";
import Plist from "./list";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "justify",
    width: "60%",
    height: "100%",
    margin: "auto",
    //padding:'50px 0',
    //backgroundColor: 'white',
    overflow: "hidden",
    borderRadius:'15px',
    border:'solid black',
    borderWidth:'1px 1px 0px 1px'
  
    
    
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
    minHeight: "100vh",
    padding:'50px 0px'
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


let chooseProduct=(category)=>{  
  let newList=Plist.filter((product)=>(product["Category"]===category? 1:0))
  console.log(newList)
  return newList
}



function Product(props) {
  const classes = useStyles();
  var list=Plist
  console.log(props)
  list=(Object.keys(props).length === 0 && props.constructor === Object)?Plist:chooseProduct(props.match.params.path)
  return (
    <Box className={classes.main}>
      <Box className={classes.root}>
        {list.map((product)=>(<ProductCard product={product}/>))}
      </Box>
    </Box>
  );
}

export default Product;
