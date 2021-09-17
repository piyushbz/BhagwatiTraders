import React from "react";
import Grid from "@material-ui/core/Grid";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import { Slide } from 'react-slideshow-image';
import "./slideshow.css"


 

  



function Slideshow() {
  //const classes = useStyles()
  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true
  };
  const images = [
   image1,image2,image3
  ];

  return (
    <Grid>
      <div className="slide-container">
        <Slide {...fadeProperties}>
          {images.map(i=>(<div className="each-fade">
            <div>
              <img src={i} />
            </div>
          </div>))}
        </Slide>
      </div>
    </Grid>
  );
}

export default Slideshow;
