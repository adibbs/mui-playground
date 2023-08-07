import React from "react";
import AcccessibleTable from "./AcccessibleTable";
import BasicTable from "./BasicTable";
import CollapsibleTable from "./CollapsibleTable";
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";
import DenseTable from "./DenseTable";
import EnhancedTable from "./EnhancedTable";
import SpanningTable from "./SpanningTable";
import StickyHeadTable from "./StickyHeadTable";

const TablesContainer = () => {
return (
<>
<h1>AcccessibleTable</h1>
    <AcccessibleTable />
    <br /><br />
<h1>BasicTable</h1>
    <BasicTable />
    <br /><br />
<h1>CollapsibleTable</h1>
    <CollapsibleTable />
    <br /><br />
<h1>CustomPaginationActionsTable</h1>
    <CustomPaginationActionsTable />
    <br /><br />
<h1>DenseTable</h1>
    <DenseTable />
    <br /><br />
<h1>EnhancedTable</h1>
    <EnhancedTable />
    <br /><br />
<h1>SpanningTable</h1>
    <SpanningTable />
    <br /><br />
<h1>StickyHeadTable</h1>
    <StickyHeadTable />
    <br /><br />
</>
);
};

export default TablesContainer;