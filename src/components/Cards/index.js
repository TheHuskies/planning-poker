/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { fibonacci } from "../Utils/sequences";

let fib = [1, 1];

export const Cards = () => {
  return (
    <div className="div-card">
      {fibonacci(fib, 20).map((fibb, index) => (
        <div
          key={index}
          style={{ display: "flex", margin: "22px 22px 0px 0px" }}
        >
          <a href="">
            <div className="card-first">
              <p>{fibb}</p>
              <div className="card-second">
                <p>{fibb}</p>
              </div>
              <p className="p-card-3">{fibb}</p>
            </div>
          </a>
        </div>
      ))}
      {/* // coment */}
      <div style={{ display: "flex", margin: "22px 22px 0px 0px" }}>
        <a href="">
          <div className="card-first">
            <p>?</p>
            <div className="card-second">
              <p>?</p>
            </div>
            <p className="p-card-3">?</p>
          </div>
        </a>
      </div>
    </div>
  );
};
