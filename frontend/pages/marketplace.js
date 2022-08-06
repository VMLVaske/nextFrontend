import Layout from '../components/layout';
import { Container, Divider, Spacer, Row, Button } from '@nextui-org/react';
import { ThirdwebNftMedia, useNFTCollection, useNFT, MediaRenderer, useAddress, useListings, useActiveListings, useMarketplace } from "@thirdweb-dev/react";
import ActiveMarketListings from '../components/activeMarketListings';

export default function Marketplace() {

    return (

        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <h1>Marketplace </h1>
                        <Button flat>Add new listing</Button>
                        <h2>Active Market Listings</h2>
                        <ActiveMarketListings />
                        <Divider />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}