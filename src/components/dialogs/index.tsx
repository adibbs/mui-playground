import React from "react";
import AlertDialog from "./AlertDialog";
import AlertDialogSlide from "./AlertDialogSlide";
import ConfirmationDialog from "./ConfirmationDialog";
import FormDialog from "./FormDialog";
import FullScreenDialog from "./FullScreenDialog";
import MaxWidthDialog from "./MaxWidthDialog";
import ResponsiveDialog from "./ResponsiveDialog";
import ScrollDialog from "./ScrollDialog";
import SimpleDialog from "./SimpleDialog";

const DialogsContainer = () => {
return (
<>
<h1>AlertDialog</h1>
    <AlertDialog />
    <br /><br />
<h1>AlertDialogSlide</h1>
    <AlertDialogSlide />
    <br /><br />
<h1>ConfirmationDialog</h1>
    <ConfirmationDialog />
    <br /><br />
<h1>FormDialog</h1>
    <FormDialog />
    <br /><br />
<h1>FullScreenDialog</h1>
    <FullScreenDialog />
    <br /><br />
<h1>MaxWidthDialog</h1>
    <MaxWidthDialog />
    <br /><br />
<h1>ResponsiveDialog</h1>
    <ResponsiveDialog />
    <br /><br />
<h1>ScrollDialog</h1>
    <ScrollDialog />
    <br /><br />
<h1>SimpleDialog</h1>
    <SimpleDialog />
    <br /><br />
</>
);
};

export default DialogsContainer;