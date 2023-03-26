import React from "react";
import {Box, Column, Container, Button, Row, HeaderLink} from "./HeaderStyles";

//import {CartPage} from "../../pages/CartPage/CartPage";
//import {Cart} from "../Cart/Cart";

export const Header = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <HeaderLink href="#">Delivery</HeaderLink>
                    </Column>
                    <Column>
                        <HeaderLink href="cart">Cart</HeaderLink>
                    </Column>
                    <Column>
                        <Button>Sign in</Button>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}