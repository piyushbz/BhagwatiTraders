import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import RandDImage from "../../images/RD.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "justify",
    width: "75%",
    minHeight: "100vh",
    margin: "auto",
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
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "30px",
    margin: "10px 0px 0px 0px",
  },
  content: {
    fontSize: "16px",
    margin: "10px 0px",
  },
  cell: {
    overflow: "hidden",
    border: "3px solid #F8F8FF",
    "&:hover, &:focus": {
      border: "10px",
    },
  },
  bigCell: {
    display: "none",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  containerCell: {
    padding: "10px",
  },
}));



let images=[RandDImage,RandDImage,RandDImage,RandDImage,RandDImage,RandDImage,RandDImage];

let show = () => {
  
};

function Gallery() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box className={classes.root}>
        <Grid className={classes.containerCell} spacing={1} container xs={12}>
          
            {images.map(i=>(<Grid item onClick={show} className={classes.cell} xs={3}>
            <img className={classes.image} src={i} alt="Logo" />
            </Grid>
           
            ) )}
          
        </Grid>
      </Box>
    </Box>
  );
}

export default Gallery;
