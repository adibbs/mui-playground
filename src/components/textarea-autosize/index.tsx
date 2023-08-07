import React from "react";
import EmptyTextarea from "./EmptyTextarea";
import MaxHeightTextarea from "./MaxHeightTextarea";
import MinHeightTextarea from "./MinHeightTextarea";

const TextareaautosizeContainer = () => {
return (
<>
<h1>EmptyTextarea</h1>
    <EmptyTextarea />
    <br /><br />
<h1>MaxHeightTextarea</h1>
    <MaxHeightTextarea />
    <br /><br />
<h1>MinHeightTextarea</h1>
    <MinHeightTextarea />
    <br /><br />
</>
);
};

export default TextareaautosizeContainer;