import React from "react";
import BadgeMax from "./BadgeMax";
import BadgeOverlap from "./BadgeOverlap";
import BadgeVisibility from "./BadgeVisibility";
import DotBadge from "./DotBadge";
import ShowZeroBadge from "./ShowZeroBadge";
import SimpleBadge from "./SimpleBadge";

const BadgesContainer = () => {
return (
<>
<h1>BadgeMax</h1>
    <BadgeMax />
    <br /><br />
<h1>BadgeOverlap</h1>
    <BadgeOverlap />
    <br /><br />
<h1>BadgeVisibility</h1>
    <BadgeVisibility />
    <br /><br />
<h1>DotBadge</h1>
    <DotBadge />
    <br /><br />
<h1>ShowZeroBadge</h1>
    <ShowZeroBadge />
    <br /><br />
<h1>SimpleBadge</h1>
    <SimpleBadge />
    <br /><br />
</>
);
};

export default BadgesContainer;