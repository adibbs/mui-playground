import React from "react";
import FixedContainer from "./FixedContainer";
import SimpleContainer from "./SimpleContainer";

const ContainerContainer = () => {
return (
<>
<h1>FixedContainer</h1>
    <FixedContainer />
    <br /><br />
<h1>SimpleContainer</h1>
    <SimpleContainer />
    <br /><br />
</>
);
};

export default ContainerContainer;