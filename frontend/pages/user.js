import Layout from '../components/layout'
import { Container, Spacer, Divider, Button, Text, Modal, Input } from '@nextui-org/react'
import Link from 'next/link';

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";
import OwnedNFTs from "../components/ownedNFTs";
import SingleNFTs from '../components/singleNFTs';
import MintNFT from '../components/mintNFT';

export default function User() {

    const address = useAddress();

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
                        <OwnedNFTs />
                        <Spacer />
                        <Divider />
                        <Spacer />
                        {/*<SingleNFTs />*/}
                        <MintNFT />
                    </Container>
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