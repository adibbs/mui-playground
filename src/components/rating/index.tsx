import React from "react";
import HalfRating from "./HalfRating";
import HoverRating from "./HoverRating";
import RatingSize from "./RatingSize";
import SimpleRating from "./SimpleRating";

const RatingContainer = () => {
return (
<>
<h1>HalfRating</h1>
    <HalfRating />
    <br /><br />
<h1>HoverRating</h1>
    <HoverRating />
    <br /><br />
<h1>RatingSize</h1>
    <RatingSize />
    <br /><br />
<h1>SimpleRating</h1>
    <SimpleRating />
    <br /><br />
</>
);
};

export default RatingContainer;