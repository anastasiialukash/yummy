import React from 'react';
import styled from 'styled-components';
import {TabGroup} from './components/Tabs/TabGroup.jsx';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";

const Container = styled.div`
  width: 100%;
  height: 821px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/assests/pizzaBgd.png');
`;

const Title = styled.h1`
  margin: 17px;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  font-size: xxx-large;
  font-family: cursive;
  padding-top: 30px;
`;

export const App = () => {
    return (
        <Container>
            <Header/>
            <Title>Welcome to Yummy!</Title>
            <TabGroup/>
            <Footer/>
        </Container>
    );
}

