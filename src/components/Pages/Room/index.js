import React from "react";
import { Button, Col, Input, Row, TimePicker } from "antd";
import dayjs from "dayjs";
import { Container } from "./Room.styled";

export const Room = () => {
  const format = "HH:mm";

  let fib = [1, 1];
  let limit = 8;
  function fibonacci(nums, breakLimit) {
    let data = [1, 1];

    for (let i = 2; i < limit; i++) {
      nums[i] = nums[i - 1] + nums[i - 2];
      if (nums[i] > breakLimit) {
        data.push(nums[i]);
        break;
      } else {
        data.push(nums[i]);
      }
    }
    return data;
  }
  console.log(fibonacci(fib, 20));

  return (
    <>
      <Container>
        <div>
          <div className="div-link">
            <p>Compartilhe o link da sala: </p>
            <Input
              placeholder="Link da sala"
              value={"https://tenor.com/bIgLu.gif"}
            />
            <div className="div-btn-copy">
              <Button type="primary" shape="round" size="large">
                Copiar
              </Button>
            </div>
          </div>
          <div className="div-timer">
            <p>Definir Timer: </p>
            <TimePicker
              placeholder="Definir Timer"
              defaultValue={dayjs("12:08", format)}
              format={format}
            />
            <div className="div-btn-play">
              <Button type="primary" shape="round" size="large">
                Começar
              </Button>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <div style={{ height: "fit-content" }}>
            <p className="title" style={{ width: "max-content" }}>
              Story: Modal de Cadastro de Usuário
            </p>
          </div>
          <div className="div-card">
            {fibonacci(fib, 20).map((fibb) => (
              <div
                key={fibb}
                style={{ display: "flex", margin: "22px 22px 0px 0px" }}
              >
                <div className="card-first">
                  <p>{fibb}</p>
                  <div className="card-second">
                    <p>{fibb}</p>
                  </div>
                  <p className="p-card-3">{fibb}</p>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", margin: "22px 22px 0px 0px" }}>
              <div className="card-first">
                <p>?</p>
                <div className="card-second">
                  <p>?</p>
                </div>
                <p className="p-card-3">?</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
