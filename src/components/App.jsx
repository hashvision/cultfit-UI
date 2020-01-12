import React from "react";
import "./../styles/App.css";
import Menubar from "./Menu";
import Body from "./Body";
import Packs from "./Packs";

export default () => (
  <div className="App">
    <Menubar />
    <Body />
    <Packs />
  </div>
);
