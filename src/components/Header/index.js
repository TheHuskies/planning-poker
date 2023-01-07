import React from "react";
import logo from "../../assets/icons/poker.svg";
import { Container } from "./Header.styled";

export const Header = () => {
  // const param = (e) => {
  //   console.log("PASSOU AQUI");
  //   if (window.location.pathname === "/") {
  //     console.log("PASSOU DE NOVO");
  //     e.preventDefault();
  //     return true;
  //   } else return false;
  // };

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
            borderTop: "1.6px solid #2f3640",
            color: "#2f3640",
            opacity: 0.1,
          }}
        />
      )}
    </>
  );
};
