import React from "react";
import styled from "styled-components";
import { Header } from "./Experience";
import kosiarka from "../photos/kosiarka.jpg";
import aktywna from "../photos/aktywna.jpg";
import odwazna from "../photos/odwazna.jpg";
import kon from "../photos/kon.jpg";
import lunch from "../photos/lunch.jpg";
import zyrafa from "../photos/zyrafa.jpg";
import kawa from "../photos/kawa.jpg";

const Title = styled(Header)`
  @media (max-width: 992px) {
    text-align: center;
    margin-bottom: 0px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  @media (max-width: 992px) {
    margin: 20px auto;
  }
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
      <Title>Jaka jestem</Title>
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
