import { ThemeChanger } from '../navbar/themeChanger'
import { Button, Grid, Spacer, Text, Image, Container, Row, Col } from '@nextui-org/react';
//import Logo from "../../icons/HeartIcon"

import { useState } from "react";
import { NetworkIndicator } from './NetworkIndicator';
import { useRouter } from "next/router";
import { useAddress, useDisconnect, useMetamask, useNetworkMismatch, useNetwork } from '@thirdweb-dev/react';

import useAuthenticate from "../../hooks/useAuthenticate";
import truncateEthAddress from 'truncate-eth-address';

export default function Navbar() {

    const router = useRouter();

    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();
    const { login, authenticate, logout } = useAuthenticate();
    const isMitsmatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authMessage, setAuthMessage] = useState("N/A");

    return (
        <Grid.Container gap={4} justify="center" alignItems="stretch">
            <Spacer />
            <Grid>
                <Image/>
            </Grid>
            <Grid>
                <Button onPress={() => router.push("/")}>
                    Home
                </Button>
            </Grid>
            <Grid>
                <Button onPress={() => router.push("/collection")} >
                    Collection
                </Button>
            </Grid>
            <Grid>
                <Button onPress={() => router.push("/marketplace")}>
                    Market
                </Button>
            </Grid>
            <Grid>
                <ThemeChanger />
            </Grid>
            <Grid>
                {address ? (
                    <Container>
                        <Row>
                            <Button
                                flat
                                auto
                                onPress={disconnect}
                            >
                                Disconnect Wallet
                            </Button>
                        </Row>
                        <Row>
                            <Text>
                                Address: {truncateEthAddress(address)}
                            </Text>
                        </Row>
                    </Container>
                ) : (
                    <Button
                        flat
                        auto
                        onPress={connectWithMetamask}
                    >
                        Connect Wallet
                    </Button>
                )}
            </Grid>
            <Grid>
                <NetworkIndicator />
            </Grid>
        </Grid.Container >
    )
}


