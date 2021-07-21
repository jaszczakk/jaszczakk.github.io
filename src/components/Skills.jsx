import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "./Experience";

const SkillsList = styled.ul`
  li {
    line-height: 30px;
  }
`;

const skillsData = [
  "Język angielski – podstawowy (czytanie dokumentacji technicznej), w trakcie nauki",
  "Język niemiecki– komunikatywny / B2 (Goethe-Zertifikat, poziom B2, 2017)",
  "Znajomość przepisów dot. ochrony danych osobowych",
  "Szkolenie MS Excel – Automatyzacja raportowania i analizy danych z użyciem VBA",
  "Kurs z js, react na udemy",
];

const Skills = () => {
  return (
    <div>
      <Header>Umiejętności</Header>
      {skillsData.map((task) => (
        <SkillsList>
          <li>{task}</li>
        </SkillsList>
      ))}
    </div>
  );
};

export default Skills;
