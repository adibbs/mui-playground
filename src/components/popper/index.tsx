import React from "react";
import FakedReferencePopper from "./FakedReferencePopper";
import PositionedPopper from "./PositionedPopper";
import SimplePopper from "./SimplePopper";
import TransitionsPopper from "./TransitionsPopper";

const PopperContainer = () => {
return (
<>
<h1>FakedReferencePopper</h1>
    <FakedReferencePopper />
    <br /><br />
<h1>PositionedPopper</h1>
    <PositionedPopper />
    <br /><br />
<h1>SimplePopper</h1>
    <SimplePopper />
    <br /><br />
<h1>TransitionsPopper</h1>
    <TransitionsPopper />
    <br /><br />
</>
);
};

export default PopperContainer;