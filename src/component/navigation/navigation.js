import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ul: {
    display: "flex",
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
  },
  li: {
    display: "flex",
    textAlign: "center",
    margin: "auto",
    textDecoration: "none",
    fontSize: "20px",
    
    fontWeight: "bold",
    fontFamily:'serif',

  },
  tool: {
    height: "100px",
  },
  a: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      fontSize:'22px'
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Nav(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="sticky" style={{ backgroundColor: "white" }}>
          <Toolbar className={classes.tool}>
            <Grid container xs={12}>
              <Grid xs={4} style={{ color: "black" }}>
                LOGO
              </Grid>
              <Grid xs={8}>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href="/">
                      Home
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="/about">
                      About Us
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="/products">
                      Products
                    </a>
                  </li>
                  {/* <li className={classes.li}>
                    <a className={classes.a} href="/howtouse">
                      How To Use
                    </a>
                  </li> */}
                  <li className={classes.li}>
                    <a className={classes.a} href="/gallery">
                      Gallery
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href="/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
