import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import {
  Grid,
  Container,
  Card,
  Text,
  Row,
  Loading,
  Spacer,
  Button,
} from "@nextui-org/react";

const ActiveMarketListings = () => {
  const router = useRouter();

  const marketplace = useMarketplace(process.env.MARKETPLACE_ADDRESS);
  //console.log("Marketplace address: ", process.env.MARKETPLACE_ADDRESS)

  const { data: listings, isLoading, error } = useActiveListings(marketplace);

  return (
    <div>
      <Container fluid>
        <h2>Closed Market Listings</h2>
        {/*** 
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
                 */}
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Button disabled> Feature not implemented yet. </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default ActiveMarketListings;
