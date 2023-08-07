import React from "react";
import DateAndTimePickers from "./DateAndTimePickers";
import DatePickers from "./DatePickers";
import MaterialUIPickers from "./MaterialUIPickers";
import TimePickers from "./TimePickers";

const PickersContainer = () => {
return (
<>
<h1>DateAndTimePickers</h1>
    <DateAndTimePickers />
    <br /><br />
<h1>DatePickers</h1>
    <DatePickers />
    <br /><br />
<h1>MaterialUIPickers</h1>
    <MaterialUIPickers />
    <br /><br />
<h1>TimePickers</h1>
    <TimePickers />
    <br /><br />
</>
);
};

export default PickersContainer;