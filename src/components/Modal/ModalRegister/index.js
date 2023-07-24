import React from "react";
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
  const [state, setState] = useState(false);
  // console.log(room);
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

  const handleCreateRoom = () => {
    if (!state) {
      CreateRoom(roomData)
        .then((response) => {
          console.log("Resposta da requisição:", response.data);
          // setRoom(response.data);
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
      setState(true);
    }
  };

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
            onClick={handleCreateRoom}
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
