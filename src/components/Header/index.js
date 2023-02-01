import { Col, Row } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/poker.svg";
import { Users } from "../Users";
import { Container, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <>
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
          {window.location.pathname !== "/" && (
            <Col span={12}>
              <Row gutter={[8, 8]}>
                <StyledLink>
                  <Col span={8}>
                    <NavLink to="/story">Minhas histórias</NavLink>
                  </Col>
                  <Col span={8}>
                    <NavLink to="/story">Histórico de Resultados</NavLink>
                  </Col>
                  <Col span={12}>
                    <Users />
                  </Col>
                </StyledLink>
              </Row>
            </Col>
          )}
        </Row>
      </Container>
      {window.location.pathname !== "/" && (
        <>
          <hr
            style={{
              border: 0,
              height: 1.5,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0)",
            }}
          />
        </>
      )}
    </>
  );
};
