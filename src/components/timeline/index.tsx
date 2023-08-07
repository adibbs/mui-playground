import React from "react";
import AlternateTimeline from "./AlternateTimeline";
import BasicTimeline from "./BasicTimeline";
import ColorsTimeline from "./ColorsTimeline";
import OppositeContentTimeline from "./OppositeContentTimeline";
import OutlinedTimeline from "./OutlinedTimeline";
import RightAlignedTimeline from "./RightAlignedTimeline";

const TimelineContainer = () => {
return (
<>
<h1>AlternateTimeline</h1>
    <AlternateTimeline />
    <br /><br />
<h1>BasicTimeline</h1>
    <BasicTimeline />
    <br /><br />
<h1>ColorsTimeline</h1>
    <ColorsTimeline />
    <br /><br />
<h1>OppositeContentTimeline</h1>
    <OppositeContentTimeline />
    <br /><br />
<h1>OutlinedTimeline</h1>
    <OutlinedTimeline />
    <br /><br />
<h1>RightAlignedTimeline</h1>
    <RightAlignedTimeline />
    <br /><br />
</>
);
};

export default TimelineContainer;