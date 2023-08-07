import React from "react";
import BackToTop from "./BackToTop";
import BottomAppBar from "./BottomAppBar";
import ButtonAppBar from "./ButtonAppBar";
import DenseAppBar from "./DenseAppBar";
import ElevateAppBar from "./ElevateAppBar";
import HideAppBar from "./HideAppBar";
import MenuAppBar from "./MenuAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import ProminentAppBar from "./ProminentAppBar";
import SearchAppBar from "./SearchAppBar";

const AppbarContainer = () => {
return (
<>
<h1>BackToTop</h1>
    <BackToTop />
    <br /><br />
<h1>BottomAppBar</h1>
    <BottomAppBar />
    <br /><br />
<h1>ButtonAppBar</h1>
    <ButtonAppBar />
    <br /><br />
<h1>DenseAppBar</h1>
    <DenseAppBar />
    <br /><br />
<h1>ElevateAppBar</h1>
    <ElevateAppBar />
    <br /><br />
<h1>HideAppBar</h1>
    <HideAppBar />
    <br /><br />
<h1>MenuAppBar</h1>
    <MenuAppBar />
    <br /><br />
<h1>PrimarySearchAppBar</h1>
    <PrimarySearchAppBar />
    <br /><br />
<h1>ProminentAppBar</h1>
    <ProminentAppBar />
    <br /><br />
<h1>SearchAppBar</h1>
    <SearchAppBar />
    <br /><br />
</>
);
};

export default AppbarContainer;