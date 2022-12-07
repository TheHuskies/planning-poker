import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  margin: 35px;
  height: 100vh;
  h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    color: #474787;
    margin-top: 30px;
  }
  p {
    font-size: 18px;
    line-height: 31px;
    color: #1e1e50;
    font-weight: 400;
  }
  button {
    font-weight: 700;
    font-size: 14px;
  }
  .btn-create-room {
    background-color: #a980f8;
    border: none;
    font-weight: 700;
    font-size: 14px;
    width: 150px;
    height: 50px;
  }
  .btn-enter-room {
    border-width: 2px;
    border-color: #a980f8;
    color: #474787;
    margin-left: 20px;
    width: 200px;
    height: 50px;
  }
`;
