import React from "react";
import ControlledTreeView from "./ControlledTreeView";
import FileSystemNavigator from "./FileSystemNavigator";
import GmailTreeView from "./GmailTreeView";
import MultiSelectTreeView from "./MultiSelectTreeView";
import RecursiveTreeView from "./RecursiveTreeView";

const TreeviewContainer = () => {
return (
<>
<h1>ControlledTreeView</h1>
    <ControlledTreeView />
    <br /><br />
<h1>FileSystemNavigator</h1>
    <FileSystemNavigator />
    <br /><br />
<h1>GmailTreeView</h1>
    <GmailTreeView />
    <br /><br />
<h1>MultiSelectTreeView</h1>
    <MultiSelectTreeView />
    <br /><br />
<h1>RecursiveTreeView</h1>
    <RecursiveTreeView />
    <br /><br />
</>
);
};

export default TreeviewContainer;