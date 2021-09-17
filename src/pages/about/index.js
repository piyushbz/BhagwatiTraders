import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RandDImage from "../../images/RD.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "justify",
    width: "80%",
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
  },
  heading: {
    fontSize: "30px",
    margin: "10px 0px 0px 0px",
    fontFamily:'serif',
  },
  content: {
    fontSize: "16px",
    margin: "10px 0px",
    fontFamily:"Calibri,Garamond,arial,helvetica",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Box className={classes.root}>
        <Box className={classes.heading}>COMPANY OVERVIEW</Box>
        <hr className={classes.hr} />
        <Box className={classes.content}>
          <Grid xs={6}>
            Shree Annailakshmi Exports is a growing company in chemical
            demolition technology industry. We are engaged in providing reliable
            solutions related to concrete structures demolition, Mass
            Excavation, Soil Excavation, Rock Excavation and boulders
            demolition, etc. Our company is instrumental in its business venture
            with its unit stationed at Bangalore, Karnataka (India). With our
            specialization in the domain of Chemical Demolition Technology, we
            deliver Stone Cracking Powder/Concrete Demolition Chemical/Silent
            Rock Demolition Agent to our customers. We are also known to provide
            services such as end to end Concrete Structures Demolition, Rock
            Demolition, Drilling Service, Core Cutting, Concrete Chipping
            Service, Land Development Service and others. Offered products are
            manufactured at our vendors end with the use of advanced technology
            and quality grade factor inputs keeping quality consistently
            maintained. We execute services as per the precise needs of our
            customers and take full safety measures while serving customers.
          </Grid>
          <Grid xs={6}></Grid>
        </Box>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box className={classes.heading}>MISSION STATEMENT</Box>
            <hr className={classes.hr} />
            <Box className={classes.content}>
              Easyblast will be recognized as the provider of the most powerful
              ecological solution for Non-Explosive Demolition and concrete
              breaking, while providing superior customer service and support.
              Easyblast provides a safer, silent and less labor intensive
              solution to rock and concrete breaking. It is efficient and clean,
              increases productivity and safety. Easyblast will continuously
              conduct research and bring the latest Technological Advancements
              to the Marketplace
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Box className={classes.heading}>RESEARCH & DEVELOPMENT</Box>
            <hr className={classes.hr} />
            <Box className={classes.content}>
              In order to strengthen our position in the competitive market, we
              conduct regular research & development program at our unit. With
              the help of our proficient researcher, we carry out various
              research works to move with the changing dynamics of the market.
              This, in turn, also helps in upgrading our range with the latest
              industry standards. To be at par with the excellence, we
              incorporate various research related techniques to improvise our
              range. The R&D activities also help in increasing our industry
              knowledge which in turn also helps in the development of the
              organization. Besides, we also conduct market research for
              analyzing the best vendor to procure the products from.
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box className={classes.heading}>
              INFRASTRUCTURE & OUR WORKFORCE
            </Box>
            <hr className={classes.hr} />
            <Box className={classes.content}>
              We possess the sound infrastructure that plays an instrumental
              role in enhancing the production rate by using advance technology
              and deploying new techniques. We recruit the entire team after
              testing their abilities in their domain and thereby utilize the
              technology available to the best. After doing the extreme research
              we cater to the needs and requirements of the clients.We are
              backed by a group of well qualified and experienced professionals
              who work throughout the day to yield high quality services. All
              the members of our team are employed after testing their abilities
              in their respective field of operation.
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
