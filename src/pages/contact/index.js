import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./form";
import Map from "../../component/map/map.js";
import Paper from "@material-ui/core/Paper";
import location from "../../images/location.png";
import contact from "../../images/contact.jpg"
const useStyles = makeStyles((theme) => ({
  main: {
    width: "80%",
    margin: "50px auto",
    //padding:'30px auto',
    background: "white",
    font: "shreif",
    color: "black",
  },
  contactImg:{
    width:"100vw",
    height:'40vh'
  },
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  centered:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: "Courier,Arial, Helvetica, sans-serif",
    width:'80%'

  }
  
}));

const address = [
  ["Address", "3-B Subhash Nagar Pal-Road"],
  ["City", "Jodhpur"],
  ["State", "Rajasthan"],
  ["PostalCode", "342001"],
  ["Contact-No", "+91-9024556229"],
  ["Email", "piyushbz123@gmail.com"],
];

function Contact() {
  const classes = useStyles();

  return (
    <Box>
      <Grid>
        <Grid item xs={12} class={classes.container}>
        <div className={classes.centered}>
          <h1 style={{fontSize:'4vw'}}>Talk to a Human</h1>
          <p style={{wodth:'80%',fontSize:'1.5vw'}}>You're going to hit a great support when you call us.
             Your email isn't going to the inbox abyss, never to be seen or heard from again. At Bhagwati exports, 
            we provide the exceptional service we'd want to experience ourselves!</p>
        </div>
          <img src={contact} className={classes.contactImg}/>
        </Grid>
      </Grid>
      <Box className={classes.main}>
        <Grid
          container
          style={{
            fontSize: 30,
            border: "3px solid lightgrey",
            borderRadius: "20px",
            backgroundColor: "white",
            padding: "20px 20px 40px 20px",
            fontFamily:'shref'
          }}
        >
          <Grid item xs={6}>
            <Grid item xs={12}>
              <div style={{ fontSize: 30, textAlign: "center" }}>
                Get in Touch
              </div>
              <div style={{ fontSize: 18, margin: "10px 0px 40px 0px" }}>
                Please fill out the form and we will be in touch with lightening
                speed.
              </div>
              <Form />
            </Grid>
          </Grid>
          <hr className={classes.line} />
          <Grid item xs={4} style={{ margin: "auto", alignSelf: "center" }}>
            <Grid container xs={12}>
              {/* <Grid style={{}}>
              <img src={location} style={{width:"200px",}}/></Grid> */}
              {address.map((element) => (
                <Grid container xs={12}>
                  <Grid
                    item
                    xs={4}
                    style={{ fontSize: "18px", fontWeight: 650 }}
                  >
                    {element[0]}
                  </Grid>
                  <Grid item xs={8} style={{ fontSize: "18px" }}>
                    {element[1]}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
