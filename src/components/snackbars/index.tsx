import React from "react";
import ConsecutiveSnackbars from "./ConsecutiveSnackbars";
import DirectionSnackbar from "./DirectionSnackbar";
import FabIntegrationSnackbar from "./FabIntegrationSnackbar";
import LongTextSnackbar from "./LongTextSnackbar";
import PositionedSnackbar from "./PositionedSnackbar";
import SimpleSnackbar from "./SimpleSnackbar";
import TransitionsSnackbar from "./TransitionsSnackbar";

const SnackbarsContainer = () => {
return (
<>
<h1>ConsecutiveSnackbars</h1>
    <ConsecutiveSnackbars />
    <br /><br />
<h1>DirectionSnackbar</h1>
    <DirectionSnackbar />
    <br /><br />
<h1>FabIntegrationSnackbar</h1>
    <FabIntegrationSnackbar />
    <br /><br />
<h1>LongTextSnackbar</h1>
    <LongTextSnackbar />
    <br /><br />
<h1>PositionedSnackbar</h1>
    <PositionedSnackbar />
    <br /><br />
<h1>SimpleSnackbar</h1>
    <SimpleSnackbar />
    <br /><br />
<h1>TransitionsSnackbar</h1>
    <TransitionsSnackbar />
    <br /><br />
</>
);
};

export default SnackbarsContainer;