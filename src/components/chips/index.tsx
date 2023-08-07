import React from "react";
import Chips from "./Chips";
import ChipsArray from "./ChipsArray";
import OutlinedChips from "./OutlinedChips";
import SmallChips from "./SmallChips";
import SmallOutlinedChips from "./SmallOutlinedChips";

const ChipsContainer = () => {
return (
<>
<h1>Chips</h1>
    <Chips />
    <br /><br />
<h1>ChipsArray</h1>
    <ChipsArray />
    <br /><br />
<h1>OutlinedChips</h1>
    <OutlinedChips />
    <br /><br />
<h1>SmallChips</h1>
    <SmallChips />
    <br /><br />
<h1>SmallOutlinedChips</h1>
    <SmallOutlinedChips />
    <br /><br />
</>
);
};

export default ChipsContainer;