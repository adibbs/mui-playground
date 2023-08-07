import React from "react";
import ArrowTooltips from "./ArrowTooltips";
import ControlledTooltips from "./ControlledTooltips";
import DelayTooltips from "./DelayTooltips";
import DisabledTooltips from "./DisabledTooltips";
import InteractiveTooltips from "./InteractiveTooltips";
import PositionedTooltips from "./PositionedTooltips";
import SimpleTooltips from "./SimpleTooltips";
import TransitionsTooltips from "./TransitionsTooltips";
import TriggersTooltips from "./TriggersTooltips";
import VariableWidth from "./VariableWidth";

const TooltipsContainer = () => {
return (
<>
<h1>ArrowTooltips</h1>
    <ArrowTooltips />
    <br /><br />
<h1>ControlledTooltips</h1>
    <ControlledTooltips />
    <br /><br />
<h1>DelayTooltips</h1>
    <DelayTooltips />
    <br /><br />
<h1>DisabledTooltips</h1>
    <DisabledTooltips />
    <br /><br />
<h1>InteractiveTooltips</h1>
    <InteractiveTooltips />
    <br /><br />
<h1>PositionedTooltips</h1>
    <PositionedTooltips />
    <br /><br />
<h1>SimpleTooltips</h1>
    <SimpleTooltips />
    <br /><br />
<h1>TransitionsTooltips</h1>
    <TransitionsTooltips />
    <br /><br />
<h1>TriggersTooltips</h1>
    <TriggersTooltips />
    <br /><br />
<h1>VariableWidth</h1>
    <VariableWidth />
    <br /><br />
</>
);
};

export default TooltipsContainer;