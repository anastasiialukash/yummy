import React from "react";
import styled from "styled-components";
import {products} from "../../data";
import ProductCard from "../../components/ProductCard/ProductCard";

const Menu = () => {
    return (
        <>
            <Heading>
                <h1>Our specials</h1>
                <p>Tasty food is waiting for you</p>
            </Heading>
            <ProductsContainer>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </ProductsContainer>
        </>
    );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export default Menu;