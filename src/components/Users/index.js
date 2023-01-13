import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Container } from "./Users.styled";

export const Users = () => {
  return (
    <Container>
      <div>
        <Avatar
          size={55}
          style={{
            backgroundColor: "#87d068",
            margin: 20,
          }}
          icon={<UserOutlined />}
        />
      </div>
      <div className="user-info">
        <p className="title">Ariane Sousa</p>
        <p className="subtitle">Front-End</p>
      </div>
    </Container>
  );
};
