import React from "react";
import TableComponent from "../Components/TableComponent";
import { FaSearch, FaEllipsisV } from "react-icons/fa";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
const HeadererData = [
  {
    tilteId: "#",
    tilte: "Title",
    tilteEmail: "Email",
    titleusername: "UserName"
  }
];
const Data = [
  {
    id: "01",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "02",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "03",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "04",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "05",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "06",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "07",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "08",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "09",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  },
  {
    id: "10",
    name: "Hassan",
    email: "abc@gmail.com",
    username: "Abc235"
  }
];

export default function Link1() {
  return (
    <>
      <h2>links</h2>
      <div className="box">
        <Row>
          <Col className="mb-4">
            <div className="d-md-flex align-items-center">
              <label className="mr-3 mt-4">Sort By</label>
              <div>
                <label className="d-block">From</label>
                <input type="date" className="dashboard-inputs mr-md-3" />
              </div>
              <div>
                <label className="d-block">To</label>
                <input type="date" className="dashboard-inputs" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-md-flex justify-content-between align-items-center">
          <select class="form-control" className="dashboard-inputs mb-4">
            <option>Default select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
          <div className="dashboard-input-box position-relative mb-4">
            <input
              type="search"
              placeholder="Search...."
              className="dashboard-inputs w-100"
            />
            <FaSearch className="primary-input-icon position-absolute" />
          </div>
        </div>
        {/* <TableComponent tableData={Data} tableDataHeaderer={HeadererData} /> */}
      </div>
    </>
  );
}
