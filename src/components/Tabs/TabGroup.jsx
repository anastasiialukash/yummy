import React from 'react';
import {Tab} from './Tab.jsx';
import ButtonGroup from '../Buttons/ButtonGroup.jsx';
// import {Menu} from "../Menu/Menu";
// import {mockDishes} from "../mockDishes";

const pizzaTab = '/assets/pizzaTab.png';
const sushiTab = '/assets/sushiTab.png';
const dessertsTab = '/assets/dessertsTab.png';

const getTabImg = (tabName) => {
    switch (tabName) {
        case 'Pizza':
            return pizzaTab;
        case 'Sushi':
            return sushiTab;
        case 'Desserts':
            return dessertsTab;
        default:
            return undefined;
    }
};

const types = ['Pizza', 'Sushi', 'Desserts'];
export const TabGroup = () => {
    return (
        <ButtonGroup>
            {types.map((type) => (
                <Tab background={getTabImg(type)}
                     key={type}
                     type={type}
                >
                </Tab>
            ))}
        </ButtonGroup>
    );
}

