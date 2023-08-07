import React from "react";
import ClippedDrawer from "./ClippedDrawer";
import MiniDrawer from "./MiniDrawer";

const DrawersContainer = () => {
return (
<>
<h1>ClippedDrawer</h1>
    <ClippedDrawer />
    <br /><br />
<h1>MiniDrawer</h1>
    <MiniDrawer />
    <br /><br />
</>
);
};

export default DrawersContainer;