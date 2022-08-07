import Layout from '../components/layout';
import { Container, Row, Col, Divider, Button, Spacer, Text } from '@nextui-org/react';
import ActiveMarketListings from '../components/activeMarketListings';

export default function Marketplace() {


    {/** Next To-Do's
        [] AddNewListing-Button does not have any functionality
        [] [] functionality of that button is not needed here. Would only be needed here if modal would display connected-wallets own nfts.
        [] Separate sections for active direct listings & active auctions
        [] figure out how to show *only* ended listings (without the still active listings displaying)
        [] [] make that into a nice component for displaying archived auctions :) 

     */}

    return (

        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Row justify="center">
                            <Text h1>Marketplace </Text>
                        </Row>
                        <Spacer />
                        <Row justify="center">
                            <Button flat>Add new listing</Button>
                        </Row>
                        <Spacer />
                        <Spacer />
                        <ActiveMarketListings />
                        <Spacer />
                        <Divider />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}