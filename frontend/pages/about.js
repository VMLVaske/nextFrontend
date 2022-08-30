import Layout from '../components/layout'
import { Container, Spacer, Divider, Text, Row, Col, Image } from '@nextui-org/react'

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
                            <Text h1>About this project</Text>
                        </Row>
                        <Spacer />
                        <Row>
                            <Col>
                                <Image />
                            </Col>
                            <Col>
                                <Row>
                                    <Text h3>Hanover, Germany</Text>
                                </Row>
                                <Row>
                                    <Text> Lorem ipsum</Text>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Text h3>Hanover, Germany</Text>
                                </Row>
                                <Row>
                                    <Text> Lorem ipsum</Text>
                                </Row>
                            </Col>
                            <Col>
                                <Image />
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </Layout>
    )
}