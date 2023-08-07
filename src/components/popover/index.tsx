import React from "react";
import MouseOverPopover from "./MouseOverPopover";
import SimplePopover from "./SimplePopover";

const PopoverContainer = () => {
return (
<>
<h1>MouseOverPopover</h1>
    <MouseOverPopover />
    <br /><br />
<h1>SimplePopover</h1>
    <SimplePopover />
    <br /><br />
</>
);
};

export default PopoverContainer;