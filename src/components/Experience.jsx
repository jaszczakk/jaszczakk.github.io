import React, { Component } from "react";
import styled from "styled-components";

export const Header = styled.header`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;
export const Section = styled.div`
  font-size: 15px;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none;
  }
`;
export const Wrapper = styled.div`
  margin-bottom: 40px;
`;
export const Period = styled.p`
  text-align: right;
  margin-top: 30px;
`;
export const Position = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`;
export const Place = styled.p`
  font-size: 14px;
  margin-top: 0px;
  font-style: italic;
`;
const Tasks = styled.ul`
  line-height: 23px;
`;

const experienceData = [
  {
    id: "1",
    period: "03/2021 – 06/2021",
    title: "Front-End Developer",
    place:
      "Samozatrudnienie - realizacja zleceń dla komercyjnego projektu recalibratedbodies.com",
    tasks: [
      "Realizowanie responsywnych componentow w React na podstawie dostarczonych przez grafika szablonów",
      "Pobieranie i wyświetlanie danych z systemu CMS przy użyciu graphQL",
      "Korzystanie z jira, slack",
    ],
  },
  {
    id: "2",
    period: "05/2018 – 03/2021",
    title: "Kontroler finansowy",
    place: "Wolf System, Siemianowice Śląskie",
    tasks: [
      "Wdrożenie i nadzór nad projektem KPI - opracowanie krytycznych czynników sukcesu, wybór KPI, monitorowanie wskaźników",
      "Organizowanie i prowadzenie spotkań produkcyjnych w zakresie optymalizacji kosztów i automatyzacji procesów",
      "Monitorowanie przestrzegania przepisów dot. ochrony danych osobowych (stworzenie procedur dot. ochrony danych osobowych dla wszystkich stanowisk, organizowanie oraz prowadzenie szkoleń z RODO, nadzór nad umowami powierzenia przetwarzania danych osobowych, stały kontakt z Inspektorem Ochrony Danych Osobowych)",
      "Przygotowywanie operacyjnych raportów w zakresie sprzedaży i rentowności poszczególnych produktów",
      "Przygotowywanie i wizualizacja danych na spotkania zarządu",
      "Analiza efektywności strategicznych projektów operacyjnych",
      "Obliczanie i analiza wskaźników ekonomicznych, planowanie płynności finansowej",
      "Sporządzanie miesięcznych raportów do Grupy oraz rocznych budżetów",
      "Wsparcie działu księgowości i współpraca przy zamknięciu roku obrotowego",
      "Proponowanie usprawnień w zakresie poprawy procesów biznesowych",
      "Opracowanie nowego sposobu rozliczania materiałów z magazynu",
      "Obsługa programu COMARCH ERP, DMS, wewnętrzny system controllingowy ProjektExplorer",
      "Korzystanie z języka niemieckiego w codziennej pracy (korespondencja z oddziałem z Austrii i Niemiec, spotkania z zarządem",
    ],
  },
  {
    id: "3",
    period: "03/2018 – 12/2018",
    title: "HR Rekruter",
    place: "JobMe, Katowice",
  },
  {
    id: "4",
    period: "02/2018 – 05/2018",
    title:
      "Młodszy specjalista ds. finansów w sekcji planowania i płynności finansowej",
    place: "Tauron Obsługa Klienta, Katowice",
  },
  {
    id: "5",
    period: "04/2017 – 02/2018",
    title: "Specjalista ds. rozliczeń",
    place: "Techem Services, Katowice",
  },
  {
    id: "5",
    period: "10/2015 – 03/2017",
    title: "Doradca handlowy",
    place: "Lenovo Moto, Jura, Nespresso, Bielsko-Biała",
  },
];

const Experience = () => {
  return (
    <div>
      <Header>Doświadczenie</Header>
      {experienceData.map((item) => (
        <Section>
          <Wrapper>
            <Period key={"period-" + item.id}>{item.period}</Period>
            <Position key={"title-" + item.id}>{item.title}</Position>
            <Place key={"place-" + item.id}>{item.place}</Place>
            <Tasks key={"tasks-" + item.id}>
              {item.tasks && item.tasks.map((task) => <li>{task}</li>)}
            </Tasks>
          </Wrapper>
        </Section>
      ))}
    </div>
  );
};

export default Experience;
