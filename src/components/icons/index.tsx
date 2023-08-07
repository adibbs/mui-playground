import React from "react";
import Icons from "./Icons";
import SvgIconsColor from "./SvgIconsColor";
import SvgIconsSize from "./SvgIconsSize";
import SvgMaterialIcons from "./SvgMaterialIcons";

const IconsContainer = () => {
return (
<>
<h1>Icons</h1>
    <Icons />
    <br /><br />
<h1>SvgIconsColor</h1>
    <SvgIconsColor />
    <br /><br />
<h1>SvgIconsSize</h1>
    <SvgIconsSize />
    <br /><br />
<h1>SvgMaterialIcons</h1>
    <SvgMaterialIcons />
    <br /><br />
</>
);
};

export default IconsContainer;