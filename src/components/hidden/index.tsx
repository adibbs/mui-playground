import React from "react";
import BreakpointDown from "./BreakpointDown";
import BreakpointOnly from "./BreakpointOnly";
import BreakpointUp from "./BreakpointUp";
import GridIntegration from "./GridIntegration";

const HiddenContainer = () => {
return (
<>
<h1>BreakpointDown</h1>
    <BreakpointDown />
    <br /><br />
<h1>BreakpointOnly</h1>
    <BreakpointOnly />
    <br /><br />
<h1>BreakpointUp</h1>
    <BreakpointUp />
    <br /><br />
<h1>GridIntegration</h1>
    <GridIntegration />
    <br /><br />
</>
);
};

export default HiddenContainer;