import React from "react";
import ContinuousSlider from "./ContinuousSlider";
import DiscreteSlider from "./DiscreteSlider";
import DiscreteSliderLabel from "./DiscreteSliderLabel";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import DiscreteSliderSteps from "./DiscreteSliderSteps";
import DiscreteSliderValues from "./DiscreteSliderValues";
import InputSlider from "./InputSlider";
import NonLinearSlider from "./NonLinearSlider";
import RangeSlider from "./RangeSlider";
import TrackFalseSlider from "./TrackFalseSlider";
import TrackInvertedSlider from "./TrackInvertedSlider";
import VerticalSlider from "./VerticalSlider";

const SliderContainer = () => {
return (
<>
<h1>ContinuousSlider</h1>
    <ContinuousSlider />
    <br /><br />
<h1>DiscreteSlider</h1>
    <DiscreteSlider />
    <br /><br />
<h1>DiscreteSliderLabel</h1>
    <DiscreteSliderLabel />
    <br /><br />
<h1>DiscreteSliderMarks</h1>
    <DiscreteSliderMarks />
    <br /><br />
<h1>DiscreteSliderSteps</h1>
    <DiscreteSliderSteps />
    <br /><br />
<h1>DiscreteSliderValues</h1>
    <DiscreteSliderValues />
    <br /><br />
<h1>InputSlider</h1>
    <InputSlider />
    <br /><br />
<h1>NonLinearSlider</h1>
    <NonLinearSlider />
    <br /><br />
<h1>RangeSlider</h1>
    <RangeSlider />
    <br /><br />
<h1>TrackFalseSlider</h1>
    <TrackFalseSlider />
    <br /><br />
<h1>TrackInvertedSlider</h1>
    <TrackInvertedSlider />
    <br /><br />
<h1>VerticalSlider</h1>
    <VerticalSlider />
    <br /><br />
</>
);
};

export default SliderContainer;