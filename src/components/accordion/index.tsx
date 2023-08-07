import React from "react";
import ActionsInAccordionSummary from "./ActionsInAccordionSummary";
import ControlledAccordions from "./ControlledAccordions";
import DetailedAccordion from "./DetailedAccordion";
import SimpleAccordion from "./SimpleAccordion";

const AccordionContainer = () => {
return (
<>
<h1>ActionsInAccordionSummary</h1>
    <ActionsInAccordionSummary />
    <br /><br />
<h1>ControlledAccordions</h1>
    <ControlledAccordions />
    <br /><br />
<h1>DetailedAccordion</h1>
    <DetailedAccordion />
    <br /><br />
<h1>SimpleAccordion</h1>
    <SimpleAccordion />
    <br /><br />
</>
);
};

export default AccordionContainer;