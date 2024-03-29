import React from "react";
import { Button, Form, Input, InputNumber, Modal, Select, Tooltip } from "antd";
import { Container } from "./ModalRegister.styled";
import { useState } from "react";
import avatar from "../../../assets/icons/avatar-generic.png";
import CreateRoom from "../../../services/CreateRoom";
import { RoomProvider, useRoom } from "./../../Context/RoomContext";

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
  const [state, setState] = useState(false);
  const [btnNext, setBtnNext] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState({
    value: 2,
  });
  const [methodology, setMethodology] = useState("");
  const { room, setRoom } = useRoom();

  const onNumberChange = (value) => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };

  const handleSelect = (value, option) => {
    setMethodology(value);
  };

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const handleCreateRoom = () => {
    if (!state) {
      const roomData = {
        owner: name,
        participantsCount: number.value,
        methodology: methodology,
      };
      CreateRoom(roomData)
        .then((response) => {
          const rooms = response.data;
          setRoom(rooms);
        })
        .catch((error) => {
          console.error("Erro na requisição:", error);
        });
      setState(true);
      setBtnNext(props.next);
    }
  };

  return (
    <>
      <RoomProvider>
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
                  <Form.Item label="Nome: ">
                    <Input
                      placeholder="Nome"
                      name="name"
                      value={name}
                      onChange={handleInputName}
                    />
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                    label="Número de participantes"
                    validateStatus={number.validateStatus}
                    help={number.errorMsg}
                    required
                  >
                    <Tooltip
                      title={
                        number.value === 20
                          ? "Atingiu o número máximo de participantes!"
                          : number.value === 2
                          ? "Atingiu o número mínimo de participantes!"
                          : ""
                      }
                      placement="right"
                    >
                      <InputNumber
                        min={2}
                        max={20}
                        value={number.value}
                        onChange={onNumberChange}
                      />
                    </Tooltip>
                  </Form.Item>
                  <Form.Item
                    name="methodology"
                    label="Tipo de metodologia / sequência"
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
                      onChange={handleSelect}
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
      </RoomProvider>
    </>
  );
};
