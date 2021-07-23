import React, { Component } from "react";
import styled, { css } from "styled-components";

const linkCss = css`
  text-overflow: ellipsis;
  text-decoration: none;
  color: #9d6292;
  line-height: 25px;
  white-space: nowrap;
  font-style: italic;

  :hover {
    color: #deb4cb;
    font-style: normal;
  }
`;
const Description = styled.div`
  text-align: justify;
  font-family: "Courier New", monospace;
  margin-bottom: 50px;

  a {
    ${linkCss}
  }
  li a {
    width: 100%;
    overflow: hidden;
    display: block;
    :hover {
      font-size: 1.1em;
    }
  }
  ul {
    padding-left: 0px;
    list-style: none;
  }

  ul a:before {
    content: "•";
    font-size: 170%;
    padding-right: 5px;
    line-height: 1rem;
    vertical-align: middle;
    font-style: normal;
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
          <a href="https://recalibratedbodies.com/wizard">wizard</a> na
          recalibratedbodies.com - tę część napisałam samodzielnie w react i
          również ostylowałam według layoutu.
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
