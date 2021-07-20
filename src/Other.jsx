import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "./Experience";
import kosiarka from "./kosiarka.jpg";
import aktywna from "./aktywna.jpg";
import odwazna from "./odwazna.jpg";
import kon from "./kon.jpg";
import lunch from "./lunch.jpg";
import zyrafa from "./zyrafa.jpg";
import kawa from "./kawa.jpg";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 30px;
`;

const MyImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

const Describe = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Other = () => {
  return (
    <>
      <Header>Jaka jestem</Header>
      <Cards>
        <Box>
          <MyImage src={kosiarka} alt="koszenie trawy" />
          <Describe>pracowita</Describe>
        </Box>
        <Box>
          <MyImage src={aktywna} alt="skok na wydmach" />
          <Describe>aktywna</Describe>
        </Box>
        <Box>
          <MyImage src={odwazna} alt="ja z papuga" />
          <Describe>lubię wyzwania</Describe>
        </Box>
        <Box>
          <MyImage src={kon} alt="konno przez dżunglę" />
          <Describe>dążę do celu</Describe>
        </Box>
        <Box>
          <MyImage src={lunch} alt="na obiedzie" />
          <Describe>próbuję nowych rzeczy</Describe>
        </Box>
        <Box>
          <MyImage src={zyrafa} alt="karmienie zyrafy" />
          <Describe>szybko nawiązuję kontakty</Describe>
        </Box>
        <Box>
          <MyImage src={kawa} alt="na kawie" />
          <Describe>chętnie się uczę</Describe>
        </Box>
      </Cards>
    </>
  );
};

export default Other;
