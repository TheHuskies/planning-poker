import { Col, Row } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/poker.svg";
import { Container } from "./Header.styled";
import { Menu } from "../Menu";

export const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header>
      <Container>
        <Row gutter={[48, 16]}>
          <Col span={12}>
            <Link to="/">
              <Row gutter={[8, 8]}>
                <Col>
                  <img src={logo} alt="logo" style={{ width: 40 }} />
                </Col>
                <Col>
                  <p>PlanningPoker</p>
                </Col>
              </Row>
            </Link>
          </Col>
          {!isHomePage && <Menu />}
        </Row>
      </Container>
    </header>
  );
};
