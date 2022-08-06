import Layout from '../components/layout'
import { Container, Spacer, Grid, Button, Row, Text, Card, Modal, Input, Checkbox } from '@nextui-org/react'
import Link from 'next/link';

import useAuthenticate from "../hooks/useAuthenticate"
import { useAddress, useDisconnect, useMetamask, useNFTCollection, useNFT } from '@thirdweb-dev/react';
import { useState } from "react";
import  OwnedNFTs from "../components/ownedNFTs";

export default function User() {

    const address = useAddress();
    const contract = useNFTCollection("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");
    const { data: nft, isLoading } = useNFT(contract, 0);

    // Card Image List Stuff
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Advocato",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    // Modal Stuff
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <h1>User Page</h1>
                        <Spacer />
                        <p>Connected Address: {address || "N/A"}</p>
                        <h3> My NFT's</h3>
                        <Container fluid>
                            <Grid.Container gap={2}>
                                {list.map((item, index) => (
                                    <Grid xs={6} sm={3}>
                                        <Card isPressable isHoverable >
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image
                                                    src={"https://nextui.org" + item.img}
                                                    objectFit="cover"
                                                    width="100%"
                                                    height={140}
                                                    alt={item.title}
                                                />
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row justify="flex-end">
                                                    <Link href={'/user/'+index}>
                                                        <Button size="xs">
                                                            Sell
                                                        </Button>
                                                    </Link>
                                                    <Spacer />
                                                    <Button size="xs" flat>
                                                        Transfer
                                                    </Button>
                                                    <Spacer />
                                                    <Button size="xs" color="error" light>
                                                        Burn
                                                    </Button>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid.Container>
                        </Container>
                    </Container>
                    <OwnedNFTs />
                    <div>
                        <Modal
                            closeButton
                            aria-labelledby="modal-title"
                            open={visible}
                            onClose={closeHandler}
                        >
                            <Modal.Header>
                                <Text id="modal-title" size={18}>
                                    Sell your
                                    <Text b size={18}>
                                        NFT
                                    </Text>
                                </Text>
                            </Modal.Header>
                            <Modal.Body>
                                <Button>Sell to Marketplace</Button>
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    color="primary"
                                    size="lg"
                                    placeholder="Password"
                                    contentLeft="Stuff Right"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button auto bordered flat color="error" onClick={closeHandler}>
                                    Cancel
                                </Button>
                                <Button auto onClick={closeHandler}>
                                    Sell
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </main>
            </div>
        </Layout>
    )
}