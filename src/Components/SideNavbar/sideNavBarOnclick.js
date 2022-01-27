import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Accordion, Card, Row, Col } from "react-bootstrap";
const SideNavBarOnclick = () => {
  const [menuEvent, setMenuEvent] = useState(false);
  //const [sideMenuData, setSideMenuData] = useState();
  const handleClick = (index) => {
    if (menuEvent === index) {
      setMenuEvent(null);
    } else {
      setMenuEvent(index);
    }
  };
  const sideMenuData =[
    {
      name: "tab1",
      link: "/",
      unOpenedCases: 234,
      pendingorder: 234,
      items: [
        {
          name: "subTab",
          link: "SubTab1",
          unOpenedCases: 234,
          pendingorder: 234,
        },
      ],
    },
    {
        name: "tab2",
        link: "/",
        unOpenedCases: 234,
        pendingorder: 234,
        items: [
          {
            name: "subTab",
            link: "SubTab2",
            unOpenedCases: 234,
            pendingorder: 234,
          },
        ],
      },
  ]
  return (
    <div className="scrollbar" id="scrollStyle">
      <div className="sideMenu">
          dfdsf
        <Accordion defaultActiveKey={"0"}>
          {sideMenuData &&
            sideMenuData.map((item, index) => (
              <Card className="menuCard" key={index + 1}>
                <Card.Header className="CarHeader">
                  <Row>
                    <Col md={1} className="paddingLess">
                      <Accordion.Toggle
                        className="accordinaBtn"
                        eventKey={index + 1}
                        onClick={() => handleClick(index + 1)}
                      >
                        {" "}
                        0
                      </Accordion.Toggle>
                    </Col>
                    <Col md={10} className="paddingLess">
                      <NavLink
                        exact
                        className="Nav_link"
                        activeStyle="activeStyle"
                        to={item.link}
                      >
                        {item.name}
                      </NavLink>
                      ({item.unOpenedCases}/ {item.pendingOrder})
                    </Col>
                    <Col md={1} className="paddingLess">
                      {menuEvent === index + 1 ? "+" : " + "}
                    </Col>
                  </Row>
                </Card.Header>
                <Accordion.Collapse evenKey={index + 1}>
                  <Card.Body className="menu-carBody">
                    {item.items.map((sub, index) => (
                      <sapn key={index}>
                        <NavLink
                          exact
                          className="Nav-Link"
                          activeStyle="activeStyle"
                          to={sub.link}
                        >
                          @{sub.link}
                        </NavLink>
                        ({sub.unOpenedCases}/{sub.pendingOrder})
                      </sapn>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SideNavBarOnclick;
