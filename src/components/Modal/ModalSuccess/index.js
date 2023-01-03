import React from "react";
import { Modal } from "antd";
import rocket from "../../../assets/icons/rocket.png";
import { Container } from "./ModalSuccess.styled";

export const ModalSuccess = (props) => {
  return (
    <Modal open={props.open} onCancel={props.close} footer={(null, null)}>
      <Container>
        <h1>Sala criada com sucesso!</h1>
        <p>
          Aguarde, <br />
          estamos te redirecionando...
        </p>
        <img src={rocket} alt="Foguete" />
      </Container>
    </Modal>
  );
};
