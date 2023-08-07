import React from "react";
import Animations from "./Animations";
import Facebook from "./Facebook";
import SkeletonChildren from "./SkeletonChildren";
import SkeletonTypography from "./SkeletonTypography";
import Variants from "./Variants";
import YouTube from "./YouTube";

const SkeletonContainer = () => {
return (
<>
<h1>Animations</h1>
    <Animations />
    <br /><br />
<h1>Facebook</h1>
    <Facebook />
    <br /><br />
<h1>SkeletonChildren</h1>
    <SkeletonChildren />
    <br /><br />
<h1>SkeletonTypography</h1>
    <SkeletonTypography />
    <br /><br />
<h1>Variants</h1>
    <Variants />
    <br /><br />
<h1>YouTube</h1>
    <YouTube />
    <br /><br />
</>
);
};

export default SkeletonContainer;