import React from "react";
import Card from "../components/Card"
//import "./style.css";

function Table(props) {
  return (
    <tbody>
        <tr>
            <th>Image</th>
            <th>Name </th>
            <th>Phone</th>
            <th>Email </th>
            <th>City </th>
        </tr>
        <Card data={props.data} />
    </tbody>
  );
  
}

export default Table;