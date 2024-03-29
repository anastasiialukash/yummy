import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App.jsx';
import CartState from "./context/CartState";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <CartState>
            <App/>
        </CartState>);
