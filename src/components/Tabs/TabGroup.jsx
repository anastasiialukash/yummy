import React, {useState} from 'react';
import {Tab} from './Tab.jsx';
import ButtonGroup from '../Buttons/ButtonGroup.jsx';

const pizzaTab = '/assests/pizzaTab.png';
const sushiTab = '/assests/sushiTab.png';
const dessertsTab = '/assests/dessertsTab.png';

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
    const [active, setActive] = useState(types[0]);
    return (
        <ButtonGroup>
            {types.map((type) => (
                <Tab background={getTabImg(type)}
                     key={type}
                     active={active === type}
                     onClick={() => setActive(type)}
                     onTabClick
                >
                    {type}
                </Tab>
            ))}
        </ButtonGroup>
    );
}

