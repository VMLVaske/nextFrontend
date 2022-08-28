import { Button, Text, Spacer, Row, Container } from '@nextui-org/react'
import { useState } from "react";

import { useAddress } from '@thirdweb-dev/react';

export default function registerProducer(props) {

    return (
        <div>
            <Row justify="center">
                <Text h3>
                    Register as Producer
                </Text>
            </Row>
            <Spacer />
            <Container justify="center">
                <Text>
                    As a producer, you can buy items on the marketplace, but also produce your own items.
                </Text>
                <Text>
                    Buying items on the marketplace will allow you to refine them, i.e. making bread into beer.
                </Text>
            </Container>
            <Spacer />
            <Row justify="center">
                <Button>
                    Register
                </Button>
            </Row>
        </div>
    )
}
