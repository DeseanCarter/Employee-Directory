//import React from "react";
import Table from "./Table";

function Search() {
  return (
    <div>
      <header>
        <h1 className="text-center">Employee Directory</h1>
        <h4>
        Click on carrots to filter by heading or use the search box to narrow your results
        </h4>
      </header>
      <Table />
    </div>
  );
}

export default Search;
