import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { Container } from "./ModalRegister.styled";
import { useState } from "react";
import avatar from "../../../assets/icons/avatar-generic.png";
import CreateRoom from "../../../services/CreateRoom";

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
  const [number, setNumber] = useState({
    value: 2,
  });

  const [room, setRoom] = useState([]);
  console.log(room);
  const onNumberChange = (value) => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const roomData = {
    owner: "Ariane",
    participantsCount: 3,
    methodology: "Fibonacci",
  };

  useEffect(() => {
    console.log("Caiu aqui 1");
    try {
      console.log("Caiu aqui 2");
      CreateRoom(roomData).then((response) => {
        console.log(response);
        console.log("Caiu aqui 3");
        const rooms = response.data;
        setRoom(rooms);
        console.log(rooms);
      });
    } catch (error) {
      console.log(error.message);
    }
  });

  return (
    <>
      <Modal
        open={props.open}
        onCancel={props.close}
        footer={[
          <Button
            key={"index"}
            id="btn-next"
            type="primary"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#a980f8",
              border: "none",
              margin: 5,
            }}
            onClick={props.next}
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
                    showSearch
                    placeholder="Selecione a opção de que deseja..."
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "Fibonacci",
                        label: "Fibonacci",
                      },
                      {
                        value: "Scrumm",
                        label: "Scrumm",
                      },
                      {
                        value: "Sequencial",
                        label: "Sequencial",
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
};
