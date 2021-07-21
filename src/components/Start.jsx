import React, { Component } from "react";
import styled from "styled-components";

const Description = styled.div`
  text-align: justify;
  font-family: "Courier New", monospace;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: black;
    font-style: italic;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Start = () => {
  return (
    <div>
      <Description>
        <p>
          Od 01.2021r. uczę się programowania jako front-end developer. Mam
          opanowany css, html, znam podstawowe metody i struktury js. Potrafię
          stworzyć komponenty w react. Znam podstawy git, graphQL. Ukończyłam
          kurs na udemy z react i js, część zadań z tego kursu umieściłam na
          github.
        </p>
        <p>
          W repozytorium umieściłam również kod do strony{" "}
          <a href="https://recalibratedbodies.com/wizard">
            recalibratedbodies.com/wizard
          </a>{" "}
          - tę część napisałam samodzielnie w react i również ostylowałam według
          layoutu.
        </p>
        <p>
          Dla recalibratedbodies.com stworzyłam również wizualną część w react
          wg projektu m.in. dla stron (które są responsywne):
          <ul>
            <li>
              <a href="https://recalibratedbodies.com/about">
                recalibratedbodies.com/about
              </a>
            </li>
            <li>
              <a href="https://recalibratedbodies.com/order/cart">
                recalibratedbodies.com/order/cart
              </a>
            </li>
            <li>
              <a href="https://recalibratedbodies.com/order/billing">
                recalibratedbodies.com/order/billing
              </a>
            </li>
          </ul>
        </p>
      </Description>
    </div>
  );
};

export default Start;
