import React, {useState} from 'react';
import styled from 'styled-components';
import pizzaTab from './img/pizzaTab.png';
import sushiTab from './img/sushiTab.png';
import dessertsTab from './img/dessertsTab.png';

const Tab = styled.button`
  font-size: 50px;
  color: white;
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  padding: 10px 60px;
  opacity: 0.6;
  border: 0;
  outline: 0;
  align-items: flex-start;
  justify-content: left;
  display: flex;
  width: 100%;
  height: 300px;
  margin: 3.5rem auto 1.5rem;
  border-radius: 1rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
  ${({active}) =>
          active &&
          `border-bottom: 2px solid black;
          opacity: 1;
          `}`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Pizza', 'Sushi', 'Desserts'];
export const TabGroup = () => {
    const [active, setActive] = useState(types[0]);
    return (
        <>
            <ButtonGroup>
                {types.map(type => (
                    <Tab background={getTabImg(type)}
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}>
                        {type}
                    </Tab>
                ))}
            </ButtonGroup>
            <p/>
        </>
    );
}

const getTabImg = (tabName) => {
    switch (tabName) {
        case "Pizza":
            return pizzaTab;
        case "Sushi":
            return sushiTab;
        case "Desserts":
            return dessertsTab;
        default: return undefined;
    }
}
