import React from "react";
import FormControlLabelPosition from "./FormControlLabelPosition";
import SwitchLabels from "./SwitchLabels";
import Switches from "./Switches";
import SwitchesGroup from "./SwitchesGroup";
import SwitchesSize from "./SwitchesSize";

const SwitchesContainer = () => {
return (
<>
<h1>FormControlLabelPosition</h1>
    <FormControlLabelPosition />
    <br /><br />
<h1>SwitchLabels</h1>
    <SwitchLabels />
    <br /><br />
<h1>Switches</h1>
    <Switches />
    <br /><br />
<h1>SwitchesGroup</h1>
    <SwitchesGroup />
    <br /><br />
<h1>SwitchesSize</h1>
    <SwitchesSize />
    <br /><br />
</>
);
};

export default SwitchesContainer;