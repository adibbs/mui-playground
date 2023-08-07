import React from "react";
import StandaloneToggleButton from "./StandaloneToggleButton";
import ToggleButtonNotEmpty from "./ToggleButtonNotEmpty";
import ToggleButtonSizes from "./ToggleButtonSizes";
import ToggleButtons from "./ToggleButtons";
import ToggleButtonsMultiple from "./ToggleButtonsMultiple";
import VerticalToggleButtons from "./VerticalToggleButtons";

const TogglebuttonContainer = () => {
return (
<>
<h1>StandaloneToggleButton</h1>
    <StandaloneToggleButton />
    <br /><br />
<h1>ToggleButtonNotEmpty</h1>
    <ToggleButtonNotEmpty />
    <br /><br />
<h1>ToggleButtonSizes</h1>
    <ToggleButtonSizes />
    <br /><br />
<h1>ToggleButtons</h1>
    <ToggleButtons />
    <br /><br />
<h1>ToggleButtonsMultiple</h1>
    <ToggleButtonsMultiple />
    <br /><br />
<h1>VerticalToggleButtons</h1>
    <VerticalToggleButtons />
    <br /><br />
</>
);
};

export default TogglebuttonContainer;