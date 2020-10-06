import React from "react";
import Navbar from "./Navbar";



export default (props) => (
  <div>
    <Navbar/>
    <div {...props}>
      {props.children}
    </div>
  </div>
)
