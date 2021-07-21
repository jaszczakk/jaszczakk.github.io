import React, { Component } from "react";
import styled from "styled-components";
import {
  Header,
  Period,
  Place,
  Position,
  Section,
  Wrapper,
} from "./Experience";

const educationData = [
  {
    id: "1",
    period: "10/2018 – 10/2020",
    title:
      "Studia magisterskie, Finanse i Rachunkowość, Specjalność: Controlling",
    place: "Uniwersytet Ekonomiczny, Katowice",
  },
  {
    id: "2",
    period: "10/2013 – 06/2017",
    title: "Studia inżynierskie, Budownictwo",
    place: "Akademia Techniczno-Humanistyczna, Bielsko-Biała",
  },
  {
    id: "3",
    period: "10/2019 – 10/2020",
    title:
      "Studia podyplomowe, Ochrona informacji niejawnych i administracja bezpieczeństwa informacji",
    place: "Uniwersytet Śląski, Sosnowiec",
  },
  {
    id: "4",
    period: "03/2018 – 03/2019",
    title:
      "Studia podyplomowe, Rachunkowość finansowa z warsztatami komputerowymi",
    place: "Uniwersytet Ekonomiczny, Katowice",
  },
];

const Education = () => {
  return (
    <div>
      <Header>Edukacja</Header>

      {educationData.map((item) => (
        <Section>
          <Wrapper>
            <Period key={"period-" + item.id}>{item.period}</Period>
            <Position key={"title-" + item.id}>{item.title}</Position>
            <Place key={"place-" + item.id}>{item.place}</Place>
          </Wrapper>
        </Section>
      ))}
    </div>
  );
};

export default Education;
