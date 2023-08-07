import React from "react";
import DotsMobileStepper from "./DotsMobileStepper";
import HorizontalLinearAlternativeLabelStepper from "./HorizontalLinearAlternativeLabelStepper";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import HorizontalNonLinearAlternativeLabelStepper from "./HorizontalNonLinearAlternativeLabelStepper";
import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";
import HorizontalNonLinearStepperWithError from "./HorizontalNonLinearStepperWithError";
import ProgressMobileStepper from "./ProgressMobileStepper";
import TextMobileStepper from "./TextMobileStepper";
import VerticalLinearStepper from "./VerticalLinearStepper";

const SteppersContainer = () => {
return (
<>
<h1>DotsMobileStepper</h1>
    <DotsMobileStepper />
    <br /><br />
<h1>HorizontalLinearAlternativeLabelStepper</h1>
    <HorizontalLinearAlternativeLabelStepper />
    <br /><br />
<h1>HorizontalLinearStepper</h1>
    <HorizontalLinearStepper />
    <br /><br />
<h1>HorizontalNonLinearAlternativeLabelStepper</h1>
    <HorizontalNonLinearAlternativeLabelStepper />
    <br /><br />
<h1>HorizontalNonLinearStepper</h1>
    <HorizontalNonLinearStepper />
    <br /><br />
<h1>HorizontalNonLinearStepperWithError</h1>
    <HorizontalNonLinearStepperWithError />
    <br /><br />
<h1>ProgressMobileStepper</h1>
    <ProgressMobileStepper />
    <br /><br />
<h1>TextMobileStepper</h1>
    <TextMobileStepper />
    <br /><br />
<h1>VerticalLinearStepper</h1>
    <VerticalLinearStepper />
    <br /><br />
</>
);
};

export default SteppersContainer;