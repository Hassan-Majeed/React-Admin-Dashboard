import React from 'react'
import { FaUserFriends, FaShopify, FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import chart from "../../images/chart.png";
import chart2 from "../../images/chart2.svg";
import chart3 from "../../images/chart3.png";
import GoBack from '../../Components/GoBack';
const analytics = [
  {
    title: "USER",
    Icon: <FaUserFriends className="icons" />,
    detail: "22",
  },
  {
    title: "ORDERS",
    Icon: <FaShopify className="icons" />,
    detail: "313",
  },
  {
    title: "EARNINGS",
    Icon: <FaDollarSign className="icons" />,
    detail: "$6040",
  },
  {
    title: "PRODUCTS",
    Icon: <FaShoppingBag className="icons" />,
    detail: "500",
  },
];
function Dashboard() {
  return (
    <>
      <div className="box">
        <div className="d-flex align-items-center mb-5">
          <GoBack />
          <h4 className="section-heading mb-0">Dashboard</h4>
        </div>
        <Row>
          {
            analytics.map((item, index) => {
              return (
                <>
                  <Col xl={3} lg={6} md={6} className="mb-2">
                    <div key={index} className="dashboard-anatlytics d-flex align-items-center justify-content-between flex-wrap">
                      <h3>{item.title}</h3>
                      <div>
                        <span>
                          {item.Icon}
                        </span>
                        <h4>{item.detail}</h4>
                      </div>
                    </div>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </div>
      <div className="box">
        <div className="d-md-flex align-items-center justify-content-between mt-5">
          <h4 className="section-heading mb-2">Earnings</h4>
          <form action="#">
            <select className="dashboard-inputs mb-2">
              <option>Monthly</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </form>
        </div>
        <div className="charts-wrap mt-5">
          <img src={chart} alt="chart" className="img-fluid" />
        </div>
        <div className="d-md-flex align-items-center justify-content-between mt-5">
          <h4 className="section-heading mb-2">ORDERS</h4>
          <form action="#">
            <select className=" dashboard-inputs mb-2">
              <option>Monthly</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </form>
        </div>
        <div className="charts-wrap mt-5">
          <img src={chart2} alt="chart" className="img-fluid" />
        </div>
        <div className="d-md-flex align-items-center justify-content-between mt-5">
          <h4 className="section-heading mb-2">EARNINGS</h4>
          <form action="#">
            <select className="dashboard-inputs mb-2">
              <option>Monthly</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </form>
        </div>
        <div className="charts-wrap mt-5">
          <img src={chart3} alt="chart" className="img-fluid" />
        </div>
      </div>
    </>
  )
}

export default Dashboard