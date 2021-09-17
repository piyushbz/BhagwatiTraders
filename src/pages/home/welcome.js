import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#F0F8FF",
    overflow: "hidden",
    fontFamily:"Calibri,Garamond,arial,helvetica"
  },
  gridItem: {
    //borderWidth:'6px 3px 3px 6px',
    width: "20%",
    backgroundColor: "yellow",
    border: "20px solid white",
    borderRadius: "5px",
    padding: "10px",
  },
  gridContainer: {
    margin: "auto",
    width: "80%",
    fontSize: "18px",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily:'Cambria'
  },
  hr: {
    width: "100px",
    height: "2px",
    backgroundColor: "orange",
    border: "solid orange",
    borderRadius: "2px",
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{fontFamily:'serif'}}>Welcome to Bhagwati Traders</h1>
      <hr className={classes.hr} />
      <h2 style={{fontFamily:'serif'}}>" One place stop for all types of mining equipments "</h2>
      <Box className={classes.gridContainer}>
        Easyblast provides a safer, silent and less labor intensive solution to
        rock and concrete breaking. It is efficient and clean, increases
        productivity and safety. Easyblast will continuously conduct research
        and bring the latest Technological Advancements to the Marketplace
      </Box>
      <h2 style={{fontFamily:'serif'}}>Features of Cracking Powder</h2>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Eco Friendly</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Safe & Easy To Use</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>No Noise</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Non Explosive</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Controlled Demolition</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>Non-Toxic</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>No Licenses Required</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>No Heavy Equipment</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
