import Layout from '../components/layout';
import { Container, Row, Col, Divider, Button, Spacer, Text } from '@nextui-org/react';
import ActiveMarketListings from '../components/activeMarketListings';
import ClosedMarketListings from '../components/closedMarketListings';
import RegisterForMarketplaceModal from '../components/modals/registerForMarketplaceModal';

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
                        <RegisterForMarketplaceModal />
                        <Spacer />
                        <Spacer />
                        <ActiveMarketListings />
                        <Spacer />
                        <Divider />
                        <Spacer />
                        <ClosedMarketListings />
                        <Spacer />
                        <Divider />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}