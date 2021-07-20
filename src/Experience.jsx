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
const Tasks = styled.ul``;

const Experience = () => {
  return (
    <div>
      <Header>Doświadczenie</Header>
      <Section>
        <Wrapper>
          <Period>03/2021 – 06/2021</Period>
          <Position>Front-End Developer</Position>
          <Place>
            Samozatrudnienie - realizacja zleceń dla komercyjnego projektu
            recalibratedbodies.com
          </Place>
          <Tasks>
            <li>
              Realizowanie responsywnych componentow w React na podstawie
              dostarczonych przez grafika szablonów
            </li>
            <li>
              Pobieranie i wyświetlanie danych z systemu CMS przy użyciu graphQL
            </li>
            <li>Korzystanie z jira, slack</li>
          </Tasks>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>05/2018 – 03/2021</Period>
          <Position>Kontroler finansowy</Position>
          <Place>Wolf System, Siemianowice Śląskie</Place>
          <Tasks>
            <li>
              Wdrożenie i nadzór nad projektem KPI - opracowanie krytycznych
              czynników sukcesu, wybór KPI, monitorowanie wskaźników
            </li>
            <li>
              Organizowanie i prowadzenie spotkań produkcyjnych w zakresie
              optymalizacji kosztów i automatyzacji procesów
            </li>
            <li>
              Monitorowanie przestrzegania przepisów dot. ochrony danych
              osobowych (stworzenie procedur dot. ochrony danych osobowych dla
              wszystkich stanowisk, organizowanie oraz prowadzenie szkoleń z
              RODO, nadzór nad umowami powierzenia przetwarzania danych
              osobowych, stały kontakt z Inspektorem Ochrony Danych Osobowych)
            </li>
            <li>
              Przygotowywanie operacyjnych raportów w zakresie sprzedaży i
              rentowności poszczególnych produktów
            </li>
            <li>Przygotowywanie i wizualizacja danych na spotkania zarządu</li>
            <li>Analiza efektywności strategicznych projektów operacyjnych</li>
            <li>
              Obliczanie i analiza wskaźników ekonomicznych, planowanie
              płynności finansowej
            </li>
            <li>
              Sporządzanie miesięcznych raportów do Grupy oraz rocznych budżetów
            </li>
            <li>
              Wsparcie działu księgowości i współpraca przy zamknięciu roku
              obrotowego
            </li>
            <li>
              Proponowanie usprawnień w zakresie poprawy procesów biznesowych
            </li>
            <li>
              Opracowanie nowego sposobu rozliczania materiałów z magazynu
            </li>
            <li>
              Obsługa programu COMARCH ERP, DMS, wewnętrzny system
              controllingowy ProjektExplorer
            </li>
            <li>
              Korzystanie z języka niemieckiego w codziennej pracy
              (korespondencja z oddziałem z Austrii i Niemiec, spotkania z
              zarządem
            </li>
          </Tasks>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>03/2018 – 12/2018</Period>
          <Position>HR Rekruter</Position>
          <Place>JobMe, Katowice</Place>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>02/2018 – 05/2018</Period>
          <Position>
            Młodszy specjalista ds. finansów w sekcji planowania i płynności
            finansowej
          </Position>
          <Place>Tauron Obsługa Klienta, Katowice</Place>
        </Wrapper>{" "}
      </Section>
      <Section>
        <Wrapper>
          <Period>04/2017 – 02/2018</Period>
          <Position>Specjalista ds. rozliczeń</Position>
          <Place>Techem Services, Katowice</Place>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Period>10/2015 – 03/2017</Period>
          <Position>Doradca handlowy</Position>
          <Place>Lenovo Moto, Jura, Nespresso, Bielsko-Biała</Place>
        </Wrapper>{" "}
      </Section>
    </div>
  );
};

export default Experience;
