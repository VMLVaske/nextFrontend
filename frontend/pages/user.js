import Layout from '../components/layout'
import { Container, Spacer, Divider, Button, Text, Modal, Input } from '@nextui-org/react'

import { useAddress } from '@thirdweb-dev/react';
import { useState } from "react";
import OwnedNFTs from "../components/ownedNFTs";
import SingleNFTs from '../components/singleNFTs';
import CreateNFTModal from '../components/modals/createNFTModal';

export default function User() {

    const address = useAddress();

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <h1>User Page</h1>
                        <CreateNFTModal />
                        <Spacer />
                        <OwnedNFTs />
                        <Spacer />
                        <Divider />
                        <Spacer />

                    </Container>
                </main>
            </div>
        </Layout>
    )
}