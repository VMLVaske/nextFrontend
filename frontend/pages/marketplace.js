import Layout from '../components/layout';
import { Container, Row, Col, Divider, Button, Spacer } from '@nextui-org/react';
import ActiveMarketListings from '../components/activeMarketListings';

export default function Marketplace() {

    return (

        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1>Marketplace </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button flat>Add new listing</Button>
                            </Col>
                        </Row>

                        <Spacer />
                        <Divider />
                        <ActiveMarketListings />
                        <Spacer />
                        <Divider />
                    </Container>
                </main>
            </div>
        </Layout>
    )
}