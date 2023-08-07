import React from "react";
import SimpleCollapse from "./SimpleCollapse";
import SimpleFade from "./SimpleFade";
import SimpleGrow from "./SimpleGrow";
import SimpleSlide from "./SimpleSlide";
import SimpleZoom from "./SimpleZoom";

const TransitionsContainer = () => {
return (
<>
<h1>SimpleCollapse</h1>
    <SimpleCollapse />
    <br /><br />
<h1>SimpleFade</h1>
    <SimpleFade />
    <br /><br />
<h1>SimpleGrow</h1>
    <SimpleGrow />
    <br /><br />
<h1>SimpleSlide</h1>
    <SimpleSlide />
    <br /><br />
<h1>SimpleZoom</h1>
    <SimpleZoom />
    <br /><br />
</>
);
};

export default TransitionsContainer;