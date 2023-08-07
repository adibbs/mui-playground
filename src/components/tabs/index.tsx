import React from "react";
import AccessibleTabs from "./AccessibleTabs";
import CenteredTabs from "./CenteredTabs";
import DisabledTabs from "./DisabledTabs";
import FullWidthTabs from "./FullWidthTabs";
import IconLabelTabs from "./IconLabelTabs";
import IconTabs from "./IconTabs";
import LabTabs from "./LabTabs";
import NavTabs from "./NavTabs";
import ScrollableTabsButtonAuto from "./ScrollableTabsButtonAuto";
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import ScrollableTabsButtonPrevent from "./ScrollableTabsButtonPrevent";
import SimpleTabs from "./SimpleTabs";
import TabsWrappedLabel from "./TabsWrappedLabel";
import VerticalTabs from "./VerticalTabs";

const TabsContainer = () => {
return (
<>
<h1>AccessibleTabs</h1>
    <AccessibleTabs />
    <br /><br />
<h1>CenteredTabs</h1>
    <CenteredTabs />
    <br /><br />
<h1>DisabledTabs</h1>
    <DisabledTabs />
    <br /><br />
<h1>FullWidthTabs</h1>
    <FullWidthTabs />
    <br /><br />
<h1>IconLabelTabs</h1>
    <IconLabelTabs />
    <br /><br />
<h1>IconTabs</h1>
    <IconTabs />
    <br /><br />
<h1>LabTabs</h1>
    <LabTabs />
    <br /><br />
<h1>NavTabs</h1>
    <NavTabs />
    <br /><br />
<h1>ScrollableTabsButtonAuto</h1>
    <ScrollableTabsButtonAuto />
    <br /><br />
<h1>ScrollableTabsButtonForce</h1>
    <ScrollableTabsButtonForce />
    <br /><br />
<h1>ScrollableTabsButtonPrevent</h1>
    <ScrollableTabsButtonPrevent />
    <br /><br />
<h1>SimpleTabs</h1>
    <SimpleTabs />
    <br /><br />
<h1>TabsWrappedLabel</h1>
    <TabsWrappedLabel />
    <br /><br />
<h1>VerticalTabs</h1>
    <VerticalTabs />
    <br /><br />
</>
);
};

export default TabsContainer;