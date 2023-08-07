import React from "react";
import InsetDividers from "./InsetDividers";
import ListDividers from "./ListDividers";
import MiddleDividers from "./MiddleDividers";
import SubheaderDividers from "./SubheaderDividers";
import VerticalDividers from "./VerticalDividers";

const DividersContainer = () => {
return (
<>
<h1>InsetDividers</h1>
    <InsetDividers />
    <br /><br />
<h1>ListDividers</h1>
    <ListDividers />
    <br /><br />
<h1>MiddleDividers</h1>
    <MiddleDividers />
    <br /><br />
<h1>SubheaderDividers</h1>
    <SubheaderDividers />
    <br /><br />
<h1>VerticalDividers</h1>
    <VerticalDividers />
    <br /><br />
</>
);
};

export default DividersContainer;