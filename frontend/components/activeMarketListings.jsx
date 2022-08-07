import Link from "next/link";
import { MediaRenderer, useActiveListings, useMarketplace } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading, Spacer } from "@nextui-org/react";

const ActiveMarketListings = () => {

    const router = useRouter();

    const marketplace = useMarketplace("0xD3d4036F8BdA104bf7c7c483452267DEAF7640Ff");

    const { data: listings, isLoading, error } = useActiveListings(marketplace);
    console.log("Error: ", error);
    console.log("Listing: ", listings)


    {/** Next To-Do's: 
    [] the cards need to have an option for buying the listed nft's 
    [] [] best case: differentiate between direct listing & auction - in modal? - in Button behaviour? unclear
     */}
    return (
        <div>
            <Container fluid>
                <h2>Active Market Listings</h2>
                {isLoading ? (
                    <Grid.Container gap={2} justify="center">
                        <Spacer />
                        <Grid>
                            <Loading type="points" />
                        </Grid>
                    </Grid.Container>
                ) : (
                    <div>
                        {listings = 'undefined' ? (
                            <Grid.Container gap={2} justify="center">
                                <Text>Currently no listings. Check again later. </Text>
                            </Grid.Container>
                        ) : (
                            <Grid.Container gap={2} justify="center">
                                {listings.map((index) => {
                                    <Grid xs={6} sm={3}>
                                        <Card isPressable isHoverable>
                                            <Card.Header>
                                                <Text b>{index.asset.name}</Text>
                                                {console.log(index.asset.name)}
                                            </Card.Header>
                                            <Card.Body
                                                css={{ p: 0 }}
                                                key={index.asset.id}
                                                onPress={() => router.push(`/listing/${index.asset.id}`)}
                                            >
                                                <Text b>
                                                    {index.asset.description}
                                                </Text>
                                            </Card.Body>
                                        </Card>
                                    </Grid>
                                })}
                            </Grid.Container>
                        )
                        }
                    </div>
                )}
            </Container >
        </div >
    );
};

export default ActiveMarketListings;