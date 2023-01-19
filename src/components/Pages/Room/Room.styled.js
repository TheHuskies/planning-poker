import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  .div-link {
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 160px;
    width: 362px;
    margin: 40px 90px 20px 40px;
  }
  Button {
    background: #5151c4;
    border: none;
    margin-top: 15px;
    font-size: 14px;
    font-family: "Roboto";
    color: white;
    width: 140px;
    &:focus {
      background: white;
      border: 3px solid #5151c4;
      color: #1e1e1e;
    }
  }
  .div-btn-copy,
  .div-btn-play {
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .div-timer {
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 541px;
    width: 362px;
    margin: 0px 90px 20px 40px;
  }
  .div-link,
  .div-timer {
    padding: 15px;
    .label-input-timer,
    .label-input-link {
      color: #1e1e1e;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    hr {
      width: 316px;
      border: 0.5px solid rgba(0, 0, 0, 0.25);
      margin: 20px 0px 20px 0px;
    }
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    margin-top: 40px;
  }
  .div-card {
    margin: 10px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    p {
      color: #1e1e1e;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
  }
  .card-first {
    width: 122px;
    height: 187px;
    border: 1px solid rgba(0, 0, 0, 0.34);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    &:hover,
    &:after {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      box-shadow: 0px 4px 4px rgba(84, 160, 255, 0.8);
    }
    p {
      margin: auto;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 19px;
      padding: 8px;
    }
  }
  .card-second {
    width: 69px;
    height: 115px;
    border: 0.7px solid rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    vertical-align: baseline;
    margin: auto;
    p {
      vertical-align: baseline;
      margin: auto;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
    }
  }
  .p-card-3 {
    transform: rotate(0.5turn);
  }

  .btn-options {
    align-items: center;
    display: grid;
    justify-content: center;
    Button {
      margin: 10px;
    }
    .countdown {
      margin: 20px 0px 20px 0px;
    }
  }
`;
