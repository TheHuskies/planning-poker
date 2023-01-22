/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Input, TimePicker, Statistic } from "antd";
import dayjs from "dayjs";
import { Container } from "./Room.styled";
import { Users } from "../../Users";
import Timer from "./../../../assets/icons/timer.svg";
import { useState } from "react";
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

export const Room = () => {
  const format = "HH:mm";
  const [btnStart, setBtnStart] = useState(false);

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

  const onFinish = () => {
    console.log("finished!");
  };

  function buttonClicked() {
    var copyTextareaBtn = document.querySelector(".copy");
    copyTextareaBtn.addEventListener("click", buttonClicked, true);
    var copyTextarea = document.querySelector(".input-copy");
    copyTextarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Oops, unable to copy");
    }
  }

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
                onClick={() => buttonClicked()}
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
          <a href="">
            <div className="div-card">
              {fibonacci(fib, 20).map((fibb, index) => (
                <div
                  key={index}
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
          </a>
        </div>
      </Container>
    </>
  );
};
