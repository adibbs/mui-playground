import React from "react";
import AutoGrid from "./AutoGrid";
import AutoGridNoWrap from "./AutoGridNoWrap";
import CSSGrid from "./CSSGrid";
import CenteredGrid from "./CenteredGrid";
import ComplexGrid from "./ComplexGrid";
import FullWidthGrid from "./FullWidthGrid";
import InteractiveGrid from "./InteractiveGrid";
import NestedGrid from "./NestedGrid";
import SpacingGrid from "./SpacingGrid";

const GridContainer = () => {
return (
<>
<h1>AutoGrid</h1>
    <AutoGrid />
    <br /><br />
<h1>AutoGridNoWrap</h1>
    <AutoGridNoWrap />
    <br /><br />
<h1>CSSGrid</h1>
    <CSSGrid />
    <br /><br />
<h1>CenteredGrid</h1>
    <CenteredGrid />
    <br /><br />
<h1>ComplexGrid</h1>
    <ComplexGrid />
    <br /><br />
<h1>FullWidthGrid</h1>
    <FullWidthGrid />
    <br /><br />
<h1>InteractiveGrid</h1>
    <InteractiveGrid />
    <br /><br />
<h1>NestedGrid</h1>
    <NestedGrid />
    <br /><br />
<h1>SpacingGrid</h1>
    <SpacingGrid />
    <br /><br />
</>
);
};

export default GridContainer;