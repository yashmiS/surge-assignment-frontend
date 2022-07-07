import { Table } from "antd";
import React, { useState, useEffect } from "react";

const fixedColumns = [
  {
    title: "Title",
    dataIndex: "title",
    fixed: true,
    width: 100,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];

export default function NoteDetails() {
  const [notes, setNotes] = useState([]);

  useEffect(function () {
    const endpoint = `http://localhost:8080/allnotes`;

    fetch(endpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Table
        columns={fixedColumns}
        dataSource={notes}
        pagination={false}
        scroll={{
          x: 2000,
          y: 500,
        }}
      />
    </>
  );
}
