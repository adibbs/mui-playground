import React from "react";
import CheckboxLabels from "./CheckboxLabels";
import Checkboxes from "./Checkboxes";
import CheckboxesGroup from "./CheckboxesGroup";
import FormControlLabelPosition from "./FormControlLabelPosition";

const CheckboxesContainer = () => {
return (
<>
<h1>CheckboxLabels</h1>
    <CheckboxLabels />
    <br /><br />
<h1>Checkboxes</h1>
    <Checkboxes />
    <br /><br />
<h1>CheckboxesGroup</h1>
    <CheckboxesGroup />
    <br /><br />
<h1>FormControlLabelPosition</h1>
    <FormControlLabelPosition />
    <br /><br />
</>
);
};

export default CheckboxesContainer;