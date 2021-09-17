import React from "react";
import Slideshow from "../../component/slideshow/slideshow";
import Welcome from "./welcome";
import Rd from "./R&d";
import Product from "./product";

function home() {
  //const classes = useStyles()

  return (
    <div>
      <Slideshow />
      <Welcome />
      <Product />
      <Rd />
    </div>
  );
}

export default home;
