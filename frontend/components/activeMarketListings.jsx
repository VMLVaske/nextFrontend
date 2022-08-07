import Link from "next/link";
import { MediaRenderer, useActiveListings, useMarketplace } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading } from "@nextui-org/react";

const ActiveMarketListings = () => {

    const router = useRouter();

    const marketplace = useMarketplace("0xD3d4036F8BdA104bf7c7c483452267DEAF7640Ff",);

    const { data: listings, isLoading, error } = useActiveListings(marketplace);

    return (
        <div>
            <Container fluid>
                <h2>Active Market Listings</h2>
                {isLoading ? (
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Loading type="points" />
                        </Grid>
                    </Grid.Container>
                ) : (
                    <div>
                        Dinge

                        <Grid.Container gap={2} justify="center">
                            {listings.map((listing) => {
                                <Grid xs={6} sm={3}>
                                    <Card isPressable isHoverable>
                                        <Card.Header>
                                            <Text b>{listing.asset.name}</Text>
                                        </Card.Header>
                                        <Card.Body
                                            css={{ p: 0 }}
                                            key={listing.id}
                                            onPress={() => router.push(`/listing/${listing.asset.id}`)}
                                        >

                                            <h2 b>
                                                <Link href={`/listing/${listing.asset.id}`}>
                                                    {listing.asset.name}
                                                </Link>
                                            </h2>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row justify="flex-end">
                                                <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                                                {listing.buyoutCurrencyValuePerToken.symbol}
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                            })}
                        </Grid.Container>
                    </div>
                )}
            </Container >
        </div >
    );
};

export default ActiveMarketListings;