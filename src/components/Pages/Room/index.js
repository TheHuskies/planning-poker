import React, { useState } from "react";
import { Button, Input, TimePicker, Statistic } from "antd";
import dayjs from "dayjs";
import { Container } from "./Room.styled";
import { Users } from "../../Users";
import Timer from "./../../../assets/icons/timer.svg";
import { copyTextLink } from "./../../Utils/clipBoard";
import { Cards } from "../../Cards";
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

export const Room = () => {
  const format = "HH:mm";
  const [btnStart, setBtnStart] = useState(false);
  const onFinish = () => {
    console.log("finished!");
  };

  return (
    <>
      <Container>
        <div>
          <div className="div-link">
            <p className="label-input-link">Compartilhe o link da sala: </p>
            <Input
              className="input-copy"
              placeholder="Link da sala"
              value={"https://tenor.com/bIgLu.gif"}
            />
            <div className="div-btn-copy">
              <Button
                className="copy"
                type="primary"
                shape="round"
                size="large"
                onClick={() => copyTextLink()}
              >
                Copiar
              </Button>
            </div>
          </div>
          <div className="div-game">
            {!btnStart ? (
              <>
                <p className="label-input-timer">Definir Timer: </p>
                <div>
                  <TimePicker
                    placeholder="Definir Timer"
                    defaultValue={dayjs("12:08", format)}
                    format={format}
                  />
                  <div className="div-btn-play">
                    <Button
                      type="primary"
                      shape="round"
                      size="large"
                      onClick={(e) => setBtnStart(true)}
                    >
                      Começar
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="btn-options">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <div style={{ margin: 10 }}>
                    <img src={Timer} alt="Timer" />
                  </div>
                  <div>
                    <Countdown
                      className="countdown"
                      value={deadline}
                      onFinish={onFinish}
                    />
                  </div>
                </div>
                <div>
                  <Button type="primary" shape="round" size="large">
                    Zerar timer
                  </Button>
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={() => setBtnStart(false)}
                  >
                    Reiniciar
                  </Button>
                </div>
                <div>
                  <Button type="primary" shape="round" size="large">
                    Finalizar
                  </Button>
                  <Button type="primary" shape="round" size="large">
                    Revelar Votos
                  </Button>
                </div>
              </div>
            )}
            <hr />
            <Users />
            <Users />
          </div>
        </div>
        <div>
          <div style={{ height: "fit-content" }}>
            <p className="title" style={{ width: "max-content" }}>
              Story: Modal de Cadastro de Usuário
            </p>
          </div>
          <Cards />
        </div>
      </Container>
    </>
  );
};
