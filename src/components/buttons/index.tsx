import React from "react";
import ButtonBase from "./ButtonBase";
import ButtonSizes from "./ButtonSizes";
import ContainedButtons from "./ContainedButtons";
import DisableElevation from "./DisableElevation";
import IconButtons from "./IconButtons";
import IconLabelButtons from "./IconLabelButtons";
import OutlinedButtons from "./OutlinedButtons";
import TextButtons from "./TextButtons";
import UploadButtons from "./UploadButtons";

const ButtonsContainer = () => {
return (
<>
<h1>ButtonBase</h1>
    <ButtonBase />
    <br /><br />
<h1>ButtonSizes</h1>
    <ButtonSizes />
    <br /><br />
<h1>ContainedButtons</h1>
    <ContainedButtons />
    <br /><br />
<h1>DisableElevation</h1>
    <DisableElevation />
    <br /><br />
<h1>IconButtons</h1>
    <IconButtons />
    <br /><br />
<h1>IconLabelButtons</h1>
    <IconLabelButtons />
    <br /><br />
<h1>OutlinedButtons</h1>
    <OutlinedButtons />
    <br /><br />
<h1>TextButtons</h1>
    <TextButtons />
    <br /><br />
<h1>UploadButtons</h1>
    <UploadButtons />
    <br /><br />
</>
);
};

export default ButtonsContainer;