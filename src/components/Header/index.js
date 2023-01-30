import { Col, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/poker.svg";
import { Container, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <Row>
      <Col>
        <Container>
          <div>
            <img src={logo} alt="logo" style={{ width: 40 }} />
          </div>
          <div style={{ marginLeft: 7 }}>
            <p>PlanningPoker</p>
          </div>
        </Container>
      </Col>
      {window.location.pathname !== "/" && (
        <Col>
          <StyledLink>
            <NavLink to="/story">Minhas histórias</NavLink>
            <NavLink to="/story">Histórico de Resultados</NavLink>
          </StyledLink>
          <hr
            style={{
              border: 0,
              height: 1.5,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0)",
            }}
          />
        </Col>
      )}
    </Row>
  );
};
