import React from "react";
import ImgMediaCard from "./ImgMediaCard";
import MediaCard from "./MediaCard";
import MediaControlCard from "./MediaControlCard";
import OutlinedCard from "./OutlinedCard";
import RecipeReviewCard from "./RecipeReviewCard";
import SimpleCard from "./SimpleCard";

const CardsContainer = () => {
return (
<>
<h1>ImgMediaCard</h1>
    <ImgMediaCard />
    <br /><br />
<h1>MediaCard</h1>
    <MediaCard />
    <br /><br />
<h1>MediaControlCard</h1>
    <MediaControlCard />
    <br /><br />
<h1>OutlinedCard</h1>
    <OutlinedCard />
    <br /><br />
<h1>RecipeReviewCard</h1>
    <RecipeReviewCard />
    <br /><br />
<h1>SimpleCard</h1>
    <SimpleCard />
    <br /><br />
</>
);
};

export default CardsContainer;