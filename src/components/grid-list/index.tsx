import React from "react";
import AdvancedGridList from "./AdvancedGridList";
import ImageGridList from "./ImageGridList";
import SingleLineGridList from "./SingleLineGridList";
import TitlebarGridList from "./TitlebarGridList";

const GridlistContainer = () => {
return (
<>
<h1>AdvancedGridList</h1>
    <AdvancedGridList />
    <br /><br />
<h1>ImageGridList</h1>
    <ImageGridList />
    <br /><br />
<h1>SingleLineGridList</h1>
    <SingleLineGridList />
    <br /><br />
<h1>TitlebarGridList</h1>
    <TitlebarGridList />
    <br /><br />
</>
);
};

export default GridlistContainer;