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

const Education = () => {
  return (
    <div>
      <Header>Edukacja</Header>
      <Section>
        <Wrapper>
          <Period>10/2018 – 10/2020</Period>
          <Position>
            Studia magisterskie, Finanse i Rachunkowość, Specjalność:
            Controlling
          </Position>
          <Place>Uniwersytet Ekonomiczny, Katowice</Place>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>10/2013 – 06/2017</Period>
          <Position>Studia inżynierskie, Budownictwo</Position>
          <Place>Akademia Techniczno-Humanistyczna, Bielsko-Biała</Place>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>10/2019 – 10/2020</Period>
          <Position>
            Studia podyplomowe, Ochrona informacji niejawnych i administracja
            bezpieczeństwa informacji
          </Position>
          <Place>Uniwersytet Śląski, Sosnowiec</Place>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>03/2018 – 03/2019</Period>
          <Position>
            Studia podyplomowe, Rachunkowość finansowa z warsztatami
            komputerowymi
          </Position>
          <Place>Uniwersytet Ekonomiczny, Katowice</Place>
        </Wrapper>
      </Section>
    </div>
  );
};

export default Education;
