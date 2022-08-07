import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";
import OwnedNFTs from "../components/ownedNFTs";
import CreateNFTModal from '../components/modals/createNFTModal';

export default function Collection() {

    const address = useAddress();

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid >
                        <Row justify="center">
                            <Text h1>NFT Collection</Text>
                        </Row>
                        <Spacer />
                        <Row justify="center">
                            <CreateNFTModal />
                        </Row>
                        <Spacer />
                        <Row justify="center">
                            <OwnedNFTs />
                        </Row>
                        <Spacer />
                        <Divider />
                        <Spacer />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}