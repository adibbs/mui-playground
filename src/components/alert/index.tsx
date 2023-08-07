import React from "react";
import ActionAlerts from "./ActionAlerts";
import ColorAlerts from "./ColorAlerts";
import DescriptionAlerts from "./DescriptionAlerts";
import FilledAlerts from "./FilledAlerts";
import IconAlerts from "./IconAlerts";
import OutlinedAlerts from "./OutlinedAlerts";
import SimpleAlerts from "./SimpleAlerts";
import TransitionAlerts from "./TransitionAlerts";

const AlertContainer = () => {
return (
<>
<h1>ActionAlerts</h1>
    <ActionAlerts />
    <br /><br />
<h1>ColorAlerts</h1>
    <ColorAlerts />
    <br /><br />
<h1>DescriptionAlerts</h1>
    <DescriptionAlerts />
    <br /><br />
<h1>FilledAlerts</h1>
    <FilledAlerts />
    <br /><br />
<h1>IconAlerts</h1>
    <IconAlerts />
    <br /><br />
<h1>OutlinedAlerts</h1>
    <OutlinedAlerts />
    <br /><br />
<h1>SimpleAlerts</h1>
    <SimpleAlerts />
    <br /><br />
<h1>TransitionAlerts</h1>
    <TransitionAlerts />
    <br /><br />
</>
);
};

export default AlertContainer;