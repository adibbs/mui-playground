import React from "react";
import ContextMenu from "./ContextMenu";
import FadeMenu from "./FadeMenu";
import LongMenu from "./LongMenu";
import MenuListComposition from "./MenuListComposition";
import SimpleListMenu from "./SimpleListMenu";
import SimpleMenu from "./SimpleMenu";
import TypographyMenu from "./TypographyMenu";

const MenusContainer = () => {
return (
<>
<h1>ContextMenu</h1>
    <ContextMenu />
    <br /><br />
<h1>FadeMenu</h1>
    <FadeMenu />
    <br /><br />
<h1>LongMenu</h1>
    <LongMenu />
    <br /><br />
<h1>MenuListComposition</h1>
    <MenuListComposition />
    <br /><br />
<h1>SimpleListMenu</h1>
    <SimpleListMenu />
    <br /><br />
<h1>SimpleMenu</h1>
    <SimpleMenu />
    <br /><br />
<h1>TypographyMenu</h1>
    <TypographyMenu />
    <br /><br />
</>
);
};

export default MenusContainer;