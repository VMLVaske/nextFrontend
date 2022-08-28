import { Button, Text, Spacer, Container, Row } from '@nextui-org/react'
import { useState } from "react";

import { useAddress, useDisconnect, useMetamask, } from '@thirdweb-dev/react';

export default function registerBuyer(props) {

    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();

    return (
        <div>
            <Row justify="center">
                <Text h3>
                    Register as Buyer
                </Text>
            </Row>

            <Spacer />
            <Container justify="center">
                <Text>
                    If you want to buy things on the marketplace, there is no registration needed. 
                </Text>
                <Text>
                    Make sure to connect your wallet tho!
                </Text>
            </Container>

            <Spacer />
            <Row justify="center">
                {address ? (
                    <Button
                        flat
                        onPress={disconnect}
                    >
                        Disconnect Wallet
                    </Button>
                ) : (
                    <Button
                        flat
                        onPress={connectWithMetamask}
                    >
                        Connect Wallet
                    </Button>
                )}
            </Row>

        </div>
    )
}
