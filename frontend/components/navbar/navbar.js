import { ThemeChanger } from "../navbar/themeChanger";
import {
  Button,
  Grid,
  Spacer,
  Text,
  Container,
  Row,
  Col,
  Avatar,
} from "@nextui-org/react";
import Logo from "../../public/agronomy.png";
import Image from 'next/image'

import { useState } from "react";
import { useRouter } from "next/router";
import {
  useAddress,
  useDisconnect,
  useMetamask,
  useNetworkMismatch,
  useNetwork,
} from "@thirdweb-dev/react";

import useAuthenticate from "../../hooks/useAuthenticate";
import truncateEthAddress from "truncate-eth-address";

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
    <Grid.Container gap={2} justify="center" alignItems="center">
      <Spacer />
      <Grid>
        <Image
          src={Logo}
          alt="bread>beer>bread"
          objectFit="cover"
          width={64}
          height={64}
        />
      </Grid>
      <Grid>
        <Button onPress={() => router.push("/")}>Home</Button>
      </Grid>
      <Grid>
        <Button onPress={() => router.push("/marketplace")}>Market</Button>
      </Grid>
      <Grid>
        <Button onPress={() => router.push("/collection")}>Collection</Button>
      </Grid>

      <Grid>
        <ThemeChanger />
      </Grid>
      <Grid>
        {address ? (
          <Container>
            <Row>
              <Button flat auto onPress={disconnect}>
                Disconnect Wallet
              </Button>
            </Row>
            <Row>
              <Text>Address: {truncateEthAddress(address)}</Text>
            </Row>
          </Container>
        ) : (
          <Button flat auto onPress={connectWithMetamask}>
            Connect Wallet
          </Button>
        )}
      </Grid>

    </Grid.Container>
  );
}
