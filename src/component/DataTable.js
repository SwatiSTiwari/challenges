import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { title: "ID", field: "id" },
  { title: "Nname", field: "name", width: 200 },
  { title: "Email", field: "email", width: 400 },
  { title: "Gender", field: "gender", width: 200 },
  { title: "Status", field: "status", width: 200 }, // array of present column
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //  will take  call back function a first parameter

    fetch("https://gorest.co.in/public/v2/users") // public API
      .then((data) => data.json()) // data will convert in json

      .then((data) => setTableData(data));
  }, []); // empty dependency is a second parameter

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={10} />
    </div>
  );
};

export default DataTable;
