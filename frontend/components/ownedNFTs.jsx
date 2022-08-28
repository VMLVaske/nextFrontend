import Link from "next/link";
<<<<<<< Updated upstream
import {
  useNFTCollection,
  useAddress,
  useNFTs,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import {
  Grid,
  Container,
  Card,
  Text,
  Row,
  Loading,
  Button,
  Spacer,
} from "@nextui-org/react";
=======
import { useNFTCollection, useAddress, useNFTs, useContract, useOwnedNFTs, useEditionDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading, Button, Spacer, Divider } from "@nextui-org/react";

import SellModal from "./modals/sellModal";
import TransferNFTModal from "./modals/transferNFTModal";
import MintNFtModal from "./modals/mintNFTModal";
>>>>>>> Stashed changes

const OwnedNFTs = () => {
  const router = useRouter();

  const address = useAddress();
  //const testAddress = "0x954184AD0Fbc67332Bab62a6c5958c4C5E2CFeC2";

  const nftCollectionAddress = process.env.NFT_COLLECTION_ADDRESS;
  const nftCollection = useNFTCollection(nftCollectionAddress);

<<<<<<< Updated upstream
  //const contract = useContract(nftCollectionAddress);
  const { data: nfts, isLoading, error } = useNFTs(nftCollection, address);

  return (
    <Container fluid justify="center">
      <Text h3 justify="center">
        My NFTs
      </Text>
      {isLoading ? (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading type="points" />
          </Grid>
        </Grid.Container>
      ) : (
        <Grid.Container gap={2} justify="center">
          {nfts.map((listing) => (
            <Grid xs={6} sm={3}>
              <Card isPressable isHoverable>
                <Card.Header>
                  <Link href={`/user/${listing.metadata.id}`}>
                    <Text h3 b>
                      {listing.metadata.name}
                    </Text>
                  </Link>
                </Card.Header>
                <Card.Body
                  css={{ p: 0 }}
                  key={listing.metadata.id}
                  onClick={() =>
                    router.push(
                      `/${nftCollectionAddress}/${listing.metadata.id}`
                    )
                  }
                >
                  <Card.Image
                    src={listing.metadata.image}
                    height={192}
                    width={192}
                    alt={listing.metadata.name}
                  />
                  <Row justify="center">
                    <Spacer />
                    <Text>{listing.metadata.description}</Text>
                    <Spacer />
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Grid.Container gap={1}>
=======
    //const nftCollectionAddress = "0xa98409ABB7048E672DCf0D2781B516835516BEF4";
    //const nftCollection = useNFTCollection(nftCollectionAddress);
    //const contract = useContract(nftCollectionAddress);
    //const { data: nfts, isLoading, error } = useNFTs(nftCollection, address)

    // Contract address from Edition Drop Contract
    const editionDrop = useEditionDrop("0xedBBAFBfEf31D2bE63f10662F6CA5E197c617E3B");
    const { data: nfts, isLoading, error } = useNFTs(editionDrop, {start: 0, count: 100});

    return (
        <Container fluid justify="center">
            <Text h3 justify="center">My NFTs</Text>
            {isLoading ? (
                <Grid.Container gap={2} justify="center">
>>>>>>> Stashed changes
                    <Grid>
                      <Button auto flat>
                        Sell
                      </Button>
                    </Grid>
<<<<<<< Updated upstream
                    <Grid>
                      <Button auto color="error">
                        Burn
                      </Button>
                    </Grid>
                    <Grid>
                      <Button auto>Refine</Button>
                    </Grid>
                  </Grid.Container>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Container>
  );
=======
                </Grid.Container>
            ) : (
                <Grid.Container gap={2} justify="center">
                    {nfts.map((listing) => (
                        <Grid xs={6} sm={3}>
                            <Card isPressable isHoverable>
                                <Card.Header>
                                    <Link href={`/user/${listing.metadata.id}`}>
                                        <Text h3 b>{listing.metadata.name}</Text>
                                    </Link>
                                </Card.Header>
                                <Card.Body
                                    css={{ p: 0 }}
                                    key={listing.metadata.id}
                                    onClick={() => router.push(`/${nftCollectionAddress}/${listing.metadata.id}`)}
                                >
                                    <Card.Image
                                        src={listing.metadata.image}
                                        height={192}
                                        width={192}
                                        alt={listing.metadata.name}
                                    />
                                    <Row justify="center">
                                        <Spacer />
                                        <Text>{listing.metadata.description}</Text>
                                        <Spacer />
                                    </Row>

                                </Card.Body>
                                <Card.Footer>
                                    <Grid.Container gap={1} justify="center">
                                        <Divider />
                                        <Grid>
                                            <MintNFtModal  NftId={listing.metadata.id.toNumber()} />
                                        </Grid>
                                        <Grid>
                                            <Button auto color="warning">
                                                Refine
                                            </Button>
                                        </Grid>

                                        <Divider />
                                        <Grid>
                                            <Button auto flat color="success">
                                                Buy
                                            </Button>
                                        </Grid>

                                        <Grid>
                                            <SellModal NftId={listing.metadata.id.toNumber()} />
                                        </Grid>
                                        <Divider />
                                        <Grid>
                                            <TransferNFTModal NftId={listing.metadata.id.toNumber()} />
                                        </Grid>
                                        <Grid>
                                            <Button auto color="error">
                                                Burn
                                            </Button>

                                        </Grid>
                                    </Grid.Container>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>
            )}
        </Container>
    );
>>>>>>> Stashed changes
};

export default OwnedNFTs;
