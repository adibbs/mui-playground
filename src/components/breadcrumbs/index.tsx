import React from "react";
import ActiveLastBreadcrumb from "./ActiveLastBreadcrumb";
import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";
import CustomSeparator from "./CustomSeparator";
import IconBreadcrumbs from "./IconBreadcrumbs";
import RouterBreadcrumbs from "./RouterBreadcrumbs";
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";

const BreadcrumbsContainer = () => {
return (
<>
<h1>ActiveLastBreadcrumb</h1>
    <ActiveLastBreadcrumb />
    <br /><br />
<h1>CollapsedBreadcrumbs</h1>
    <CollapsedBreadcrumbs />
    <br /><br />
<h1>CustomSeparator</h1>
    <CustomSeparator />
    <br /><br />
<h1>IconBreadcrumbs</h1>
    <IconBreadcrumbs />
    <br /><br />
<h1>RouterBreadcrumbs</h1>
    <RouterBreadcrumbs />
    <br /><br />
<h1>SimpleBreadcrumbs</h1>
    <SimpleBreadcrumbs />
    <br /><br />
</>
);
};

export default BreadcrumbsContainer;