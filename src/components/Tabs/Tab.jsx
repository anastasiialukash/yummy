import React from "react";
import {TabBtn} from './TabStyles.js';
import {useNavigate} from "react-router-dom";
// import {Menu} from "../Menu/Menu";
// import {mockDishes} from "../mockDishes";

export const Tab = ({background, key, type}) => {
    const navigate = useNavigate();
    return (
            <TabBtn background={background}
                    key={key}
                    onClick={() => navigate("menu")}
            >
                {type}
            </TabBtn>
    );
}