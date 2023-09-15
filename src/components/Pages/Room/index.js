import React, { useState } from "react";
import { Button, Input, TimePicker, Statistic } from "antd";
import dayjs from "dayjs";
import { Container } from "./Room.styled";
import { Users } from "../../Users";
import Timer from "./../../../assets/icons/timer.svg";
import { copyTextLink } from "./../../Utils/clipBoard";
import { Cards } from "../../Cards";
import { Chart } from "../../Chart";
import arrow from "./../../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
//
export const Room = () => {
  const format = "HH:mm";
  const [btnStart, setBtnStart] = useState(false);
  const [btnFinish, setBtnFinish] = useState(false);

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
                    onClick={() => {
                      setBtnStart(false);
                      setBtnFinish(false);
                    }}
                  >
                    Reiniciar
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={() => setBtnFinish(true)}
                  >
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
            <p className="title" style={{ margin: "max-content" }}>
              Story: Modal de Cadastro de Usuário
            </p>
          </div>
          {!btnFinish ? (
            <>
              <Cards />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "50px 0px 50px 0px",
                }}
              >
                <div>
                  <p
                    className="title"
                    style={{ width: "auto", margin: "auto" }}
                  >
                    Resultado dos Votos
                  </p>
                </div>
                <Link to={"/story"}>
                  <div
                    style={{ marginRight: 50, fontSize: 16, color: "#3535A1" }}
                  >
                    <img
                      src={arrow}
                      alt=""
                      style={{ minWidth: 25, marginRight: 5 }}
                    />
                    Ver outras stories...
                  </div>
                </Link>
              </div>

              <Chart />
            </>
          )}
        </div>
      </Container>
    </>
  );
};
