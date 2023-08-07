import React from "react";
import BasicTextFields from "./BasicTextFields";
import ColorTextFields from "./ColorTextFields";
import ComposedTextField from "./ComposedTextField";
import FormPropsTextFields from "./FormPropsTextFields";
import InputAdornments from "./InputAdornments";
import InputWithIcon from "./InputWithIcon";
import Inputs from "./Inputs";
import LayoutTextFields from "./LayoutTextFields";
import MultilineTextFields from "./MultilineTextFields";
import SelectTextFields from "./SelectTextFields";
import StateTextFields from "./StateTextFields";
import TextFieldSizes from "./TextFieldSizes";
import ValidationTextFields from "./ValidationTextFields";

const TextfieldsContainer = () => {
return (
<>
<h1>BasicTextFields</h1>
    <BasicTextFields />
    <br /><br />
<h1>ColorTextFields</h1>
    <ColorTextFields />
    <br /><br />
<h1>ComposedTextField</h1>
    <ComposedTextField />
    <br /><br />
<h1>FormPropsTextFields</h1>
    <FormPropsTextFields />
    <br /><br />
<h1>InputAdornments</h1>
    <InputAdornments />
    <br /><br />
<h1>InputWithIcon</h1>
    <InputWithIcon />
    <br /><br />
<h1>Inputs</h1>
    <Inputs />
    <br /><br />
<h1>LayoutTextFields</h1>
    <LayoutTextFields />
    <br /><br />
<h1>MultilineTextFields</h1>
    <MultilineTextFields />
    <br /><br />
<h1>SelectTextFields</h1>
    <SelectTextFields />
    <br /><br />
<h1>StateTextFields</h1>
    <StateTextFields />
    <br /><br />
<h1>TextFieldSizes</h1>
    <TextFieldSizes />
    <br /><br />
<h1>ValidationTextFields</h1>
    <ValidationTextFields />
    <br /><br />
</>
);
};

export default TextfieldsContainer;