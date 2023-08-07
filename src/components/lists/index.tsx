import React from "react";
import AlignItemsList from "./AlignItemsList";
import CheckboxList from "./CheckboxList";
import CheckboxListSecondary from "./CheckboxListSecondary";
import FolderList from "./FolderList";
import InsetList from "./InsetList";
import InteractiveList from "./InteractiveList";
import NestedList from "./NestedList";
import PinnedSubheaderList from "./PinnedSubheaderList";
import SelectedListItem from "./SelectedListItem";
import SimpleList from "./SimpleList";
import SwitchListSecondary from "./SwitchListSecondary";

const ListsContainer = () => {
return (
<>
<h1>AlignItemsList</h1>
    <AlignItemsList />
    <br /><br />
<h1>CheckboxList</h1>
    <CheckboxList />
    <br /><br />
<h1>CheckboxListSecondary</h1>
    <CheckboxListSecondary />
    <br /><br />
<h1>FolderList</h1>
    <FolderList />
    <br /><br />
<h1>InsetList</h1>
    <InsetList />
    <br /><br />
<h1>InteractiveList</h1>
    <InteractiveList />
    <br /><br />
<h1>NestedList</h1>
    <NestedList />
    <br /><br />
<h1>PinnedSubheaderList</h1>
    <PinnedSubheaderList />
    <br /><br />
<h1>SelectedListItem</h1>
    <SelectedListItem />
    <br /><br />
<h1>SimpleList</h1>
    <SimpleList />
    <br /><br />
<h1>SwitchListSecondary</h1>
    <SwitchListSecondary />
    <br /><br />
</>
);
};

export default ListsContainer;