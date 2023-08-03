import { Col, Row } from "antd";
import React from "react";
import { StyledLink } from "../Header/Header.styled";
import { NavLink } from "react-router-dom";
import { Users } from "../Users";
import { Header } from "../Header";

export const Menu = () => {
  return (
    <>
      <Col span={12}>
        <Row gutter={[8, 8]}>
          <StyledLink>
            <Col span={8}>
              <NavLink to="story">Minhas histórias</NavLink>
            </Col>
            <Col span={8}>
              <NavLink to="story">Histórico de Resultados</NavLink>
            </Col>
            <Col span={12}>
              <Users />
            </Col>
          </StyledLink>
        </Row>
      </Col>
      <hr
        style={{
          border: 0,
          height: 1.5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0)",
        }}
      />
    </>
  );
};
