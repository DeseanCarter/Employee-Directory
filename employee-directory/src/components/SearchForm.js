import React from 'react';
import "../styles/Search.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group" >
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-primary ml-1">
          Reset
        </button>
        {/* <br /> */}
      </div>
    </form>
  );
}

export default SearchForm;