import React from "react";
import BasicPagination from "./BasicPagination";
import PaginationButtons from "./PaginationButtons";
import PaginationControlled from "./PaginationControlled";
import PaginationLink from "./PaginationLink";
import PaginationOutlined from "./PaginationOutlined";
import PaginationRanges from "./PaginationRanges";
import PaginationRounded from "./PaginationRounded";
import PaginationSize from "./PaginationSize";
import TablePagination from "./TablePagination";
import UsePagination from "./UsePagination";

const PaginationContainer = () => {
return (
<>
<h1>BasicPagination</h1>
    <BasicPagination />
    <br /><br />
<h1>PaginationButtons</h1>
    <PaginationButtons />
    <br /><br />
<h1>PaginationControlled</h1>
    <PaginationControlled />
    <br /><br />
<h1>PaginationLink</h1>
    <PaginationLink />
    <br /><br />
<h1>PaginationOutlined</h1>
    <PaginationOutlined />
    <br /><br />
<h1>PaginationRanges</h1>
    <PaginationRanges />
    <br /><br />
<h1>PaginationRounded</h1>
    <PaginationRounded />
    <br /><br />
<h1>PaginationSize</h1>
    <PaginationSize />
    <br /><br />
<h1>TablePagination</h1>
    <TablePagination />
    <br /><br />
<h1>UsePagination</h1>
    <UsePagination />
    <br /><br />
</>
);
};

export default PaginationContainer;