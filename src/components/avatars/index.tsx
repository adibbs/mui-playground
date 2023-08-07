import React from "react";
import BadgeAvatars from "./BadgeAvatars";
import FallbackAvatars from "./FallbackAvatars";
import GroupAvatars from "./GroupAvatars";
import IconAvatars from "./IconAvatars";
import ImageAvatars from "./ImageAvatars";
import LetterAvatars from "./LetterAvatars";
import SizeAvatars from "./SizeAvatars";
import VariantAvatars from "./VariantAvatars";

const AvatarsContainer = () => {
return (
<>
<h1>BadgeAvatars</h1>
    <BadgeAvatars />
    <br /><br />
<h1>FallbackAvatars</h1>
    <FallbackAvatars />
    <br /><br />
<h1>GroupAvatars</h1>
    <GroupAvatars />
    <br /><br />
<h1>IconAvatars</h1>
    <IconAvatars />
    <br /><br />
<h1>ImageAvatars</h1>
    <ImageAvatars />
    <br /><br />
<h1>LetterAvatars</h1>
    <LetterAvatars />
    <br /><br />
<h1>SizeAvatars</h1>
    <SizeAvatars />
    <br /><br />
<h1>VariantAvatars</h1>
    <VariantAvatars />
    <br /><br />
</>
);
};

export default AvatarsContainer;