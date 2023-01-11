import React from "react";
import { Button, Input, TimePicker } from "antd";
import dayjs from "dayjs";
import { Container } from "./Room.styled";

export const Room = () => {
  const format = "HH:mm";
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
        <div className="div-card">
          <p>Story: </p>
          <div className="card-first">
            <p>1</p>
            <div className="card-second">
              <p>1</p>
            </div>
            <p>1</p>
          </div>
        </div>
      </Container>
    </>
  );
};
