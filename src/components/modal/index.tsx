import React from "react";
import ServerModal from "./ServerModal";
import SimpleModal from "./SimpleModal";
import TransitionsModal from "./TransitionsModal";

const ModalContainer = () => {
return (
<>
<h1>ServerModal</h1>
    <ServerModal />
    <br /><br />
<h1>SimpleModal</h1>
    <SimpleModal />
    <br /><br />
<h1>TransitionsModal</h1>
    <TransitionsModal />
    <br /><br />
</>
);
};

export default ModalContainer;