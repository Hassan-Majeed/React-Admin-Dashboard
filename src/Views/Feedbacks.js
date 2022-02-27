import { Row, Col } from "react-bootstrap";
import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { FaSearch, FaArrowLeft } from "react-icons/fa";
export const productsGenerator = quantity => {
  const items = [
    {
      "id": 1,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 2,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 3,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 4,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 5,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 6,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 7,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 8,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 9,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 10,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 11,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 12,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 13,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 14,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 15,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 16,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 17,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 18,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 19,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
    {
      "id": 20,
      "name": "Jorden",
      "email": "email@gmail.com",
      "date": "mm/dd/yy",
      "action": "view"
    },
  ];
  return items;
};
const products = productsGenerator(100);
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "name",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "date",
    text: "Date Posted",
  },
  {
    dataField: "action",
    text: "Actions",
  },
];
const pagination = paginationFactory(
  {
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: 'Next',
    prePageText: 'Previous',
    showTotal: true,
    alwaysShowAllBtns: false,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  }
);
const defaultSorted = [
  {
    dataField: 'id',
    order: 'asc'
  }
];
const { SearchBar, ClearSearchButton } = Search;
export default function Feedbacks() {
  return (
    <>
      <div className="box">
        <div className="d-flex align-items-center mb-5">
          <FaArrowLeft className="back" />
          <h4 className="section-heading mb-0">Feedbacks</h4>
        </div>
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
        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={products}
          columns={columns}
          search
        >
          {
            props => (
              <div>
                <div className="d-md-flex justify-content-between align-items-center">
                  <select className=" dashboard-inputs mb-4">
                    <option>Default select</option>
                    <option>select</option>
                    <option>select</option>
                    <option>select</option>
                  </select>
                  <div className="d-flex align-items-center mb-4">
                    <div className="position-relative mr-1">
                      <SearchBar {...props.searchProps} className="dashboard-inputs w-100" />
                      <FaSearch className="primary-input-icon position-absolute" />
                    </div>
                    {/* <ClearSearchButton {...props.searchProps} /> */}
                  </div>
                </div>
                <BootstrapTable
                  defaultSorted={defaultSorted}
                  pagination={pagination}
                  {...props.baseProps}
                />
              </div>
            )
          }
        </ToolkitProvider>
      </div>
    </>
  );
}

