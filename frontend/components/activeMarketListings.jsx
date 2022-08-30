import Link from "next/link";
import {
  MediaRenderer,
  useListings,
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
  Divider
} from "@nextui-org/react";

import NftCardButtons from "./buttons/nftCardButtons";

const ActiveMarketListings = () => {
  const router = useRouter();

  const marketplace = useMarketplace("0x26c350043E7147c12ee37D67f562ecee1909f1Ab");

  const { data: listings, isLoading, error } = useListings(marketplace, { start: 0, count: 100 });

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
            {
              (listings == 'undefined') ? (
                <Grid.Container gap={2} justify="center">
                  {console.log("Listings1: ", listings)}
                  <Grid>
                    <Button disabled>
                      Currently no listings. Check again later.{" "}
                    </Button>
                  </Grid>
                </Grid.Container>
              ) : (
                <Grid.Container gap={2} justify="center">
                  {console.log("Listings2: ", listings)}
                  {listings.map((index) => (
                    <Grid xs={6} sm={3}>
                      <Card isPressable isHoverable>
                        <Card.Header>
                          <Text b>{index.asset.name}</Text>
                          {console.log(index.asset.name)}
                        </Card.Header>
                        <Card.Body
                          css={{ p: 0 }}
                          key={index.asset.id}
                          onPress={() =>
                            router.push(`/listing/${index.asset.id}`)
                          }
                        >
                          <Card.Image
                            src={index.asset.image}
                            alt={index.asset.name}
                            width={128}
                            height={128}
                          />
                          <Spacer />
                          <Row fluid>
                            <Text b>{index.asset.description}</Text>
                          </Row>

                        </Card.Body>

                        <Card.Footer>
                          <NftCardButtons NftId={index.asset.id.toNumber()} />
                        </Card.Footer>
                      </Card>
                    </Grid>
                  ))}
                </Grid.Container>
              )
            }
          </div>
        )}
      </Container>
    </div>
  );
};

export default ActiveMarketListings;
