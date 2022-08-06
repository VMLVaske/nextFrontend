import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { Container, Spacer, Grid, Button, Row, Text, Card, Modal, Input, Checkbox } from '@nextui-org/react'

import useAuthenticate from "../../hooks/useAuthenticate"
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useState } from "react";

const NFT = () => {

    const address = useAddress();
    const router = useRouter()
    const { pid } = router.query

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <h1>My Page</h1>
                        <Spacer />
                        <p>Connected Address: {address || "N/A"}</p>
                        <p>Post: {pid}</p>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}

export default NFT;