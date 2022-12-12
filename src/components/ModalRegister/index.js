import React from "react";
import { Modal } from "antd";

export const ModalRegister = (props) => {
  return (
    <>
      <Modal open={props.open} onCancel={props.close}>
        <p>
          Preencha o formulário abaixo para prosseguir com a criação da sua
          sala:
        </p>
      </Modal>
    </>
  );
};
