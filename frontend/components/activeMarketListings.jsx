import Link from "next/link";
import { MediaRenderer, useActiveListings, useMarketplace, useContract, useNFT } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row } from "@nextui-org/react";

const ActiveMarketListings = () => {

    const router = useRouter();

    const marketplace = useMarketplace("0xD3d4036F8BdA104bf7c7c483452267DEAF7640Ff", );

    const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

    console.log(loadingListings);
    console.log(listings)

    return (
        <div>
            <Container fluid>
                <Grid.Container gap={2} justify="flex-start">
                    <Grid xs={6} sm={3}>
                        <Card isPressable isHoverable>
                            {loadingListings ? (
                                <Text>Loading listings...</Text>
                            ) : (
                                // Otherwise, show the listings
                                <div>
                                    {listings?.map((listing) => (
                                        <div>
                                            <Card.Body css={{ p: 0 }} key={listing.id} onClick={() => router.push(`/listing/${listing.id}`)} >
                                                <MediaRenderer src={listing.asset.image} />
                                                <h2 b>
                                                    <Link href={`/listing/${listing.id}`}>
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
                                        </div>
                                    ))}
                                </div>
                            )
                            }
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    );
};

export default ActiveMarketListings;