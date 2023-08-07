import React from "react";
import ControlledOpenSelect from "./ControlledOpenSelect";
import DialogSelect from "./DialogSelect";
import GroupedSelect from "./GroupedSelect";
import MultipleSelect from "./MultipleSelect";
import NativeSelects from "./NativeSelects";
import SimpleSelect from "./SimpleSelect";

const SelectsContainer = () => {
return (
<>
<h1>ControlledOpenSelect</h1>
    <ControlledOpenSelect />
    <br /><br />
<h1>DialogSelect</h1>
    <DialogSelect />
    <br /><br />
<h1>GroupedSelect</h1>
    <GroupedSelect />
    <br /><br />
<h1>MultipleSelect</h1>
    <MultipleSelect />
    <br /><br />
<h1>NativeSelects</h1>
    <NativeSelects />
    <br /><br />
<h1>SimpleSelect</h1>
    <SimpleSelect />
    <br /><br />
</>
);
};

export default SelectsContainer;