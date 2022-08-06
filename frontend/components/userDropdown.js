import { useTheme } from 'next-themes';
import { Dropdown, Text, Button } from '@nextui-org/react';
import Link from 'next/link';

import useAuthenticate from "../hooks/useAuthenticate"
import {
    useAddress,
    useDisconnect,
    useMetamask,
    useNetworkMismatch,
    useNetwork,
    useChainId
} from '@thirdweb-dev/react';
import { useMemo, useState } from "react";

import truncateEthAddress from 'truncate-eth-address';

export const UserDropdown = () => {

    const address = useAddress();
    const disconnect = useDisconnect();
    const connectWithMetamask = useMetamask();
    const { login, authenticate, logout } = useAuthenticate();
    const chainId = useChainId();
    const isMitsmatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();
    //const {data: balance, isLoading, error} = useTokenBalance(address)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authMessage, setAuthMessage] = useState("N/A");

    const signInWithEthereum = async () => {
        console.log("inside Sign In Method")
        setAuthMessage("N/A");
        await connectWithMetamask();
        await login();
        setIsLoggedIn(true);
    }

    const authenticatedRequest = async () => {
        const res = await authenticate();
        if (res.ok) {
            const address = await res.json();
            setAuthMessage(`Succesfully authenticated to backend with address ${address}`);
        } else {
            setAuthMessage(`Failed to authenticate, backend responded with ${res.status} (${res.statusText})`);
        }
    }

    const logoutWallet = async () => {
        await logout();
        setIsLoggedIn(false);
        setAuthMessage("N/A");
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Button flat color="secondary">
                    User
                </Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Button onPress={signInWithEthereum}>
                        Connect
                    </Dropdown.Button>
                    <Dropdown.Item>
                        {chainId ? (<Text>{chainId}</Text>) : (<Text>No chainId found</Text>)}
                    </Dropdown.Item>
                    <Dropdown.Item>
                        TokenBalance: -
                    </Dropdown.Item>
                    <Dropdown.Item withDivider color="error" key="disconnect">
                        Disconnect
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}