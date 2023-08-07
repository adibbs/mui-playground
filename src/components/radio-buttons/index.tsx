import React from "react";
import ErrorRadios from "./ErrorRadios";
import FormControlLabelPlacement from "./FormControlLabelPlacement";
import RadioButtons from "./RadioButtons";
import RadioButtonsGroup from "./RadioButtonsGroup";

const RadiobuttonsContainer = () => {
return (
<>
<h1>ErrorRadios</h1>
    <ErrorRadios />
    <br /><br />
<h1>FormControlLabelPlacement</h1>
    <FormControlLabelPlacement />
    <br /><br />
<h1>RadioButtons</h1>
    <RadioButtons />
    <br /><br />
<h1>RadioButtonsGroup</h1>
    <RadioButtonsGroup />
    <br /><br />
</>
);
};

export default RadiobuttonsContainer;