import React from "react";
import logo from "../../assets/icons/poker.svg";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" style={{ width: 40 }} />
      </div>
      <div style={{ marginLeft: 7 }}>
        <p>PlannerPoker</p>
      </div>
    </Container>
  );
};
