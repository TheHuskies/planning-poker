import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import playCards from "../../../assets/images/play_card.jpg";
import { ModalRegister } from "../../Modal/ModalRegister";
import { ModalSucess } from "../../Modal/ModalSuccess";
import { Container } from "./Home.styled";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleClick = (event) => {
    console.log("Button clicked");

    const element = document.getElementById("overlayBtn");
    if (element) {
      element.addEventListener("click", setIsFeedbackOpen(true));
    }
    element.addEventListener("click", setIsModalOpen(false));
    return () => {
      element.removeEventListener("click", handleClick);
    };
  };

  return (
    <Container>
      <Row>
        <Col xs={24} lg={12}>
          <div style={{ marginRight: 65, width: "fit-content" }}>
            <h2>
              Uma nova forma de tomar <strong>decisões</strong> na sua reunião
              de
              <strong> planejamento de Sprint</strong>{" "}
            </h2>
            <p>
              Com o planning poker você estima melhor o esforço das tarefas
              junto com a sua equipe de uma forma justa
            </p>
            <div style={{ display: "flex", margin: "50px 0px 60px 0px" }}>
              <div>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="btn-create-room"
                  onClick={() => setIsModalOpen(true)}
                >
                  Criar sala
                </Button>
                <ModalRegister
                  open={isModalOpen}
                  close={() => setIsModalOpen(false)}
                  next={handleClick}
                />
                <ModalSucess
                  open={isFeedbackOpen}
                  close={() => setIsFeedbackOpen(false)}
                />
              </div>
              <div>
                <Button
                  type="default"
                  shape="round"
                  size="large"
                  className="btn-enter-room"
                >
                  Entrar em uma sala
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div>
            <img src={playCards} alt="logo" style={{ width: 550 }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
