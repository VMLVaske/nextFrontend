import { Button, Text, Spacer, Row, Container } from '@nextui-org/react'
import { useState } from "react";

import { useAddress, useContract, useContractCall, useContractData } from '@thirdweb-dev/react';
import { ethers } from "ethers"

export default function registerProducer(props) {

    const address = useAddress();
    {/**
        Registering somebody with a "MINTER_ROLE" needs to be done by the admin wallet. Meaning for this to work, the admin wallet needs to be connected
        and the recipient address below will need to manually be changed to the address that shall receive minting privileges. 
        Also: worked once - then didn't anymore xD don't know why
        Since it also won't work as expected for the Hackathon submission demo, this will be left as is for now. 
     */}
    const recipient = "0xf9e7F43ac6C915d89c4BF9664fD048DE31B393D7";
    const { contract } = useContract("0xa98409ABB7048E672DCf0D2781B516835516BEF4");
    const { mutateAsync: grantRole, isLoading } = useContractCall(contract, "grantRole");

    const call = async () => {
        console.log("In call method")
        try {
            const role = "MINTER_ROLE";
            const data = await grantRole([role, recipient]);
            console.info("contract call success: ", data);
        } catch (e) {
            console.error("contract call failure", e)
        }
    }


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
            <Button onPress={call}>
                Register
            </Button>
        </Row>
    </div>
)
}
