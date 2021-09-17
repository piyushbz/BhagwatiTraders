import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RandDImage from "../../images/RD.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "white",
    overflow: "hidden",
  },
  gridItem: {
    //borderWidth:'6px 3px 3px 6px',
    overflow: "hidden",
  },
  gridContainer: {
    margin: "auto",
    width: "80%",
    fontSize: "18px",
  },
  paper: {
    padding: theme.spacing(4),
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
}));

function RandD() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{fontFamily:'serif'}}>Research and Innovation</h1>
      <hr className={classes.hr} />
      <Box className={classes.gridContainer}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} style={{fontFamily:"Calibri,Garamond,arial,helvetica"}}>
              <p>
                In order to strengthen our position in the competitive market,
                we conduct regular research & development program at our unit.
                With the help of our proficient researcher, we carry out various
                research works to move with the changing dynamics of the market.
                This, in turn, also helps in upgrading our range with the latest
                industry standards.
              </p>
              <p>
                To be at par with the excellence, we incorporate various
                research related techniques to improvise our range. The R&D
                activities also help in increasing our industry knowledge which
                in turn also helps in the development of the organization.
                Besides, we also conduct market research for analyzing the best
                vendor to procure the products from.
              </p>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6}>
              <img src={RandDImage} alt="Logo" />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default RandD;
