import React from "react";
import logo from "../../assets/icons/poker.svg";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="logo" style={{ width: 40 }} />
        </div>
        <div style={{ marginLeft: 7 }}>
          <p>PlanningPoker</p>
        </div>
      </Container>
      {window.location.pathname !== "/" && (
        <hr
          style={{
            border: 0,
            height: 1.5,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0)",
          }}
        />
      )}
    </>
  );
};
