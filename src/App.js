import "./App.css";
import myPhoto from "./myPhoto.jpg";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Experience from "./Experience";
import Start from "./Start";
import Education from "./Education";
import Skills from "./Skills";
import Other from "./Other";
import Contact from "./Contact";

const Body = styled.div`
  background-image: url("https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Courier New", monospace;
`;
const PageWrapper = styled.div`
  margin: 0px auto;
  max-width: 750px;
  padding: 40px 50px;
  height: 100%;
  background-color: #e2e1e1;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(255, 192, 203, 0.3) 0px 0px 0px 5px,
    rgba(255, 192, 203, 0.25) 0px 0px 0px 9px,
    rgba(255, 192, 203, 0.2) 0px 0px 0px 13px,
    rgba(255, 192, 203, 0.1) 0px 0px 0px 17px,
    rgba(255, 192, 203, 0.05) 0px 0px 0px 22px;
  /* box-shadow: rgba(255, 192, 203, 0.05) 0px 0px 0px 22px; */
`;

const Headers = styled.div`
  position: relative;
  overflow: hidden;
`;
const AnimatedHeader = styled.p`
  font-size: 1.8em;
  font-family: "Courier New", monospace;
  margin: 0 auto 0 30px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 3s steps(50, end) infinite 0s;
  position: absolute;

  @keyframes type {
    from {
      width: 0px;
    }
  }
`;

const SpacingHeader = styled(AnimatedHeader)`
  position: relative;
  visibility: hidden;
  animation: none;
`;

const Img = styled.img`
  border-radius: 100%;
  border: 2px solid #ffe9f4;
  padding: 10px;
  flex: 0 1 250px;
  height: auto;
  overflow: hidden;
  width: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  margin: 50px auto 60px;
  flex-wrap: wrap;
`;

const SLink = styled(Link)`
  flex: 1;
`;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-family: "Courier New", monospace;
  border: none;
  text-transform: uppercase;
  font-size: 13px;
  border-right: 1.5px solid #e0e0e0;
  border-top: 1.5px solid #e0e0e0;
  border-bottom: 1.5px solid #e0e0e0;
  &:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-left: 1.5px solid #e0e0e0;
  }
  &:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :hover {
    cursor: pointer;
    background-color: #fac6ce;
    font-weight: bold;
  }
`;

const App = () => {
  return (
    <Router>
      <Body>
        <PageWrapper>
          <HeaderWrapper>
            <Img src={myPhoto} alt="me" height="250px" />
            <Headers>
              <AnimatedHeader>Hi, I'm Klaudia Jaszczak</AnimatedHeader>
              <SpacingHeader>Hi, I'm Klaudia Jaszczak</SpacingHeader>
            </Headers>
          </HeaderWrapper>
          <Buttons>
            <SLink to="/">
              <Button>Start</Button>
            </SLink>
            <SLink to="/experience">
              <Button>Doświadczenie</Button>
            </SLink>
            <SLink to="/education">
              <Button>Edukacja</Button>
            </SLink>
            <SLink to="/skills">
              <Button>Umiejętności</Button>
            </SLink>
            <SLink to="/other">
              <Button>Inne</Button>
            </SLink>
            <SLink to="/contact">
              <Button>Kontakt</Button>
            </SLink>
          </Buttons>

          <Route path="/" exact component={Start} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/other" component={Other} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Body>
    </Router>
  );
};

export default App;
