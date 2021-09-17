import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import classes from "../../styles/Footer.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 50px",
    backgroundColor: "#2F575D",
    width: "100vw",
    
  },
  root1: {
    padding: "5px 5px",
    backgroundColor: "#28363D",
    width: "100vw",
    color: "white",
    textAlign: "center ",
  },
  heading: {
    color: "white",
    textAlign: "left",
    fontSize: "26px",
    fontFamily:'serif',
  },
  text: {
    color: "white",
    textAlign: "justify",
    fontFamily:"Calibri,Garamond,arial,helvetica"
  },
  contact: {
    color: "white",
    textAlign: "left",
    fontFamily:"Calibri,Garamond,arial,helvetica"

  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Box>
        <Box className={classes.root}>
          <Typography component="div">
            <Grid container xs={12} spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Grid item xs={12} className={classes.heading}>
                  About Us
                  <hr></hr>
                </Grid>
                <Grid xs={12} className={classes.text}>
                  Shree Annailakshmi Exports is a growing company in chemical
                  demolition technology industry. We are engaged in providing
                  reliable solutions related to concrete structures demolition,
                  rock excavation and boulders demolition, etc. Our company is
                  instrumental in its business since its commencement in 2015 as
                  a Sole Proprietorship based venture with its unit stationed at
                  Bangalore, Karnataka (India). With our specialization in the
                  domain of Chemical Demolition Technology.
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography component="div" className={classes.heading}>
                  Products
                  <hr></hr>
                </Typography>
                <Grid xs={12} className={classes.text}>
                  Expansive Agent
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography component="div" className={classes.heading}>
                  Contact Us
                  <hr></hr>
                </Typography>
                <Grid xs={12} className={classes.contact}>
                  <b>Address :</b> 3-B subhash Nagar, Pal Road Jodhpur Rajasthan
                  (India) 342008.
                  <br />
                  <b>Email :</b> cracking@gmail.com
                  <br />
                  <b>Mobile :</b> +91-9782429633
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography component="div" className={classes.heading}>
                  Links
                  <hr></hr>
                </Typography>
                <Grid xs={12} className={classes.text}>
                  <Grid xs={12}>Home</Grid>
                  <Grid xs={12}>Contact Us</Grid>
                  <Grid xs={12}>How To Use</Grid>
                  <Grid xs={12}>Distributor</Grid>
                  <Grid xs={12}>Carrier Opportunity</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Typography>
        </Box>
        <Box>
          <Typography
            component="div"
            className={classes.root1}
            style={{ backgroundColor: "#28363D" }}
          >
            &copy; 2021 Made By BetaHertz. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
