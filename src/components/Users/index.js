import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { Container } from "./Users.styled";

export const Users = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Avatar
            size={55}
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Col>
        <Col>
          <Row>
            <Col>
              <p className="title">Ariane Sousa</p>
              <p className="subtitle">Front-End</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
