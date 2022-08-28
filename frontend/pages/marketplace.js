import Layout from '../components/layout';
import { Container, Row, Col, Divider, Button, Spacer, Text } from '@nextui-org/react';
import ActiveMarketListings from '../components/activeMarketListings';
import ClosedMarketListings from '../components/closedMarketListings';
import AllMintedNFTs from "../components/allMintedNFTs";

export default function Marketplace() {


    return (

        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Row justify="center">
                            <Text h1>Marketplace </Text>
                        </Row>
                        <Spacer />
                        <ActiveMarketListings />
                        <Spacer />
                        <Divider />
                        <Spacer />
                        {/*
                        <ClosedMarketListings />
                        */}
                        <AllMintedNFTs />
                        <Spacer />
                        <Divider />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}