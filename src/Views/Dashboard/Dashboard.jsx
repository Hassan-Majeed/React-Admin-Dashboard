import React from 'react'
import { FaArrowLeft, FaUserFriends,FaShopify,FaDollarSign,FaShoppingBag } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
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
          <FaArrowLeft className="back" />
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


    </>
  )
}

export default Dashboard