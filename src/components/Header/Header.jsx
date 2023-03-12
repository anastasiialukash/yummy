import React from "react";
import {Box, Column, Container, Button, Row, HeaderLink} from "./HeaderStyles";

export const Header = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <HeaderLink href="#">Menu</HeaderLink>
                    </Column>
                    <Column>
                        <HeaderLink href="#">Delivery</HeaderLink>
                    </Column>
                    <Column>
                        <Button>Sign in</Button>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}