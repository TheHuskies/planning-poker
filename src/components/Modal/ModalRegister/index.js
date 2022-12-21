import React from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { Container } from "./ModalRegister.styled";
import { useState } from "react";
import { Option } from "antd/lib/mentions";
import avatar from "../../../assets/icons/avatar-generic.png";
import { ModalSucess } from "../ModalSuccess";

const validatePrimeNumber = (number) => {
  if (number >= 2 && number <= 20) {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
  return {
    validateStatus: "error",
    errorMsg: "O número de participantes deve ser entre 2 e 20!",
  };
};
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};

export const ModalRegister = (props) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [number, setNumber] = useState({
    value: 2,
  });
  const onNumberChange = (value) => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };

  return (
    <>
      <Modal
        open={props.open}
        onCancel={props.close}
        footer={[
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#a980f8",
              border: "none",
              margin: 5,
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Próximo
          </Button>,
        ]}
      >
        <Container>
          <p className="title">
            Preencha o formulário abaixo para prosseguir com a criação da sua
            sala:
          </p>
          <div style={{ display: "flex", marginTop: 50 }}>
            <div>
              <img src={avatar} alt="Avatar" />
            </div>
            <div>
              <Form layout="vertical" form={form}>
                <Form.Item label="Seu nome: " required>
                  <Input placeholder="Seu nome" />
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Número de participantes"
                  validateStatus={number.validateStatus}
                  help={number.errorMsg}
                  required
                >
                  <InputNumber
                    min={2}
                    max={20}
                    value={number.value}
                    onChange={onNumberChange}
                  />
                </Form.Item>
                <Form.Item
                  name="metodologia"
                  label="Tipo de sequência / Metodologia"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Selecione a opção de que deseja..."
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="Fibonacci">Fibonacci</Option>
                    <Option value="Scrumm">Scrumm</Option>
                    <Option value="Sequencial">Sequencial</Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container>
      </Modal>
      <ModalSucess open={isModalOpen} close={() => setIsModalOpen(false)} />
    </>
  );
};
