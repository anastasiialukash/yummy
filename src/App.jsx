import React from 'react';
import pizzaImg from './pizzaBgd.png';
import './App.css';
import TabGroup from './components/Tabs/TabGroup.jsx';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${pizzaImg})`,
      width: '100%',
      height: '821px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
    >
      <h1 style={{
        margin: '0',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        height: '100px',
        width: '100%',
        fontSize: 'xxx-large',
        fontFamily: 'cursive',
      }}
      >
        Welcome to
        Yummy!
      </h1>
      <TabGroup />
    </div>
  );
}

export default App;
