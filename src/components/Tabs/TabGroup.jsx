import React, { useState } from 'react';
import pizzaTab from './img/pizzaTab.png';
import sushiTab from './img/sushiTab.png';
import dessertsTab from './img/dessertsTab.png';
import Tab from './Tab.jsx';
import ButtonGroup from '../Buttons/ButtonGroup.jsx';

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
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map((type) => (
        <Tab
          background={getTabImg(type)}
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
      ))}
    </ButtonGroup>
  );
}

export default TabGroup;
