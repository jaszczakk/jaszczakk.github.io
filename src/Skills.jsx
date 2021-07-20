import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "./Experience";

const SkillsList = styled.ul`
  li {
    line-height: 30px;
  }
`;

const Skills = () => {
  return (
    <div>
      <Header>Umiejętności</Header>
      <SkillsList>
        <li>
          Język angielski – podstawowy (czytanie dokumentacji technicznej), w
          trakcie nauki
        </li>
        <li>
          Język niemiecki– komunikatywny / B2 (Goethe-Zertifikat, poziom B2,
          2017)
        </li>
        <li>Znajomość przepisów dot. ochrony danych osobowych</li>
        <li>
          Szkolenie MS Excel – Automatyzacja raportowania i analizy danych z
          użyciem VBA
        </li>
        <li>Kurs z js, react na udemy</li>
      </SkillsList>
    </div>
  );
};

export default Skills;
