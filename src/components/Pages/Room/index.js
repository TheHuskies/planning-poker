import React from "react";
import { Button, Input, TimePicker } from "antd";
import dayjs from "dayjs";

export const Room = () => {
  const format = "HH:mm";
  return (
    <>
      <div>
        <div>
          <p>Compartilhe o link da sala: </p>
          <Input
            placeholder="Link da sala"
            value={"https://tenor.com/bIgLu.gif"}
          />
          <Button>Copiar</Button>
        </div>
        <div>
          <p>Definir Timer: </p>
          <TimePicker
            placeholder="Definir Timer"
            defaultValue={dayjs("12:08", format)}
            format={format}
          />
          <hr />
        </div>
      </div>
      <div>
        <p>Story: </p>
      </div>
    </>
  );
};
