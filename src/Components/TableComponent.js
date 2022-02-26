import React from "react";
import { Table } from "react-bootstrap";

export default function TableComponent(props) {
  return (
    <>
      <Table responsive className="mt-5">
        <thead>
          {props.tableDataHeaderer.map((value, index) => {
            return (
              <>
                <tr key={index}>
                  <th>{value.tilteId ? value.tilteId : "-"}</th>
                  <th>{value.tilte ? value.tilte : "-"}</th>
                  <th>{value.tilteEmail ? value.tilteEmail : "-"}</th>
                  <th>{value.titleusername ? value.titleusername : "-"}</th>
                </tr>
              </>
            );
          })}
        </thead>
        <tbody>
          {props.tableData.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id ? index.id : "-"}</td>
                  <td>{item.name ? item.name : "-"}</td>
                  <td>{item.email ? item.email : "-"}</td>
                  <td>{item.username ? item.username : "-"}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
