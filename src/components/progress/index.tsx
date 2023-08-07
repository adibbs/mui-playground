import React from "react";
import CircularDeterminate from "./CircularDeterminate";
import CircularIndeterminate from "./CircularIndeterminate";
import CircularIntegration from "./CircularIntegration";
import CircularUnderLoad from "./CircularUnderLoad";
import CircularWithValueLabel from "./CircularWithValueLabel";
import DelayingAppearance from "./DelayingAppearance";
import LinearBuffer from "./LinearBuffer";
import LinearDeterminate from "./LinearDeterminate";
import LinearIndeterminate from "./LinearIndeterminate";
import LinearWithValueLabel from "./LinearWithValueLabel";

const ProgressContainer = () => {
return (
<>
<h1>CircularDeterminate</h1>
    <CircularDeterminate />
    <br /><br />
<h1>CircularIndeterminate</h1>
    <CircularIndeterminate />
    <br /><br />
<h1>CircularIntegration</h1>
    <CircularIntegration />
    <br /><br />
<h1>CircularUnderLoad</h1>
    <CircularUnderLoad />
    <br /><br />
<h1>CircularWithValueLabel</h1>
    <CircularWithValueLabel />
    <br /><br />
<h1>DelayingAppearance</h1>
    <DelayingAppearance />
    <br /><br />
<h1>LinearBuffer</h1>
    <LinearBuffer />
    <br /><br />
<h1>LinearDeterminate</h1>
    <LinearDeterminate />
    <br /><br />
<h1>LinearIndeterminate</h1>
    <LinearIndeterminate />
    <br /><br />
<h1>LinearWithValueLabel</h1>
    <LinearWithValueLabel />
    <br /><br />
</>
);
};

export default ProgressContainer;