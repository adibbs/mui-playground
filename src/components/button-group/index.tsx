import React from "react";
import BasicButtonGroup from "./BasicButtonGroup";
import DisableElevation from "./DisableElevation";
import GroupOrientation from "./GroupOrientation";
import GroupSizesColors from "./GroupSizesColors";
import SplitButton from "./SplitButton";

const ButtongroupContainer = () => {
return (
<>
<h1>BasicButtonGroup</h1>
    <BasicButtonGroup />
    <br /><br />
<h1>DisableElevation</h1>
    <DisableElevation />
    <br /><br />
<h1>GroupOrientation</h1>
    <GroupOrientation />
    <br /><br />
<h1>GroupSizesColors</h1>
    <GroupSizesColors />
    <br /><br />
<h1>SplitButton</h1>
    <SplitButton />
    <br /><br />
</>
);
};

export default ButtongroupContainer;