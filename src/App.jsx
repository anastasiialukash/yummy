import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import {Menu} from "./components/Menu/Menu";
//import {MenuCategoryPage} from "./pages/MenuCategoryPage/MenuCategoryPage";
// import {dishes} from "./dishes";
// import Cart from "./components/Cart/Cart";

import Navbar from "./components/Navbar/Navbar";
import Menu from "./pages/RestaurantPage/RestaurantPage";
import About from "./pages/About/About";
import CartPage from "./pages/CartPage/CartPage";
import {Footer} from "./components/Footer/Footer";
import "./style.css"
export const App = () => {
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //              <Route path="/" element={<MenuCategoryPage />}/>
    //             <Provider />
    //             {/*<Route path="menu" element={<Menu menu={dishes}/>}/>*/}
    //             {/*<Route path="cart" element={<Cart />}/>*/}
    //         </Routes>
    //     </BrowserRouter>
    // );
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/cart" element={<CartPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

