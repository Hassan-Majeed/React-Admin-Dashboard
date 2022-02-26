import React from "react";
import TableComponent from "../Components/TableComponent";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
const HeadererData = [
  {
    tilteId: "S.No.",
    tilte: "	User",
    tilteEmail: "	Email",
    titleusername: "	Registration"
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
  }
];

function users() {
  return (
    <>
      <div className="box">
        <div className="d-flex align-items-center mb-5">
          <FaArrowLeft className="back" />
          <h4 className="section-heading mb-0">User </h4>
        </div>
        <Row>
          <Col className="mb-5">
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
        <TableComponent tableData={Data} tableDataHeaderer={HeadererData} />
      </div>
    </>
  );
}

export default users;
