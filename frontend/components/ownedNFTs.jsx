import Link from "next/link";
import { useNFTCollection, useAddress, useNFTs, useContract, useOwnedNFTs, useEditionDrop } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading, Button, Spacer, Divider } from "@nextui-org/react";

import SellModal from "./modals/sellModal";
import TransferNFTModal from "./modals/transferNFTModal";
import MintNFtModal from "./modals/mintNFTModal";

const OwnedNFTs = () => {
    const router = useRouter();

    const address = useAddress();

    //const nftCollectionAddress = process.env.NFT_COLLECTION_ADDRESS;
    //const nftCollection = useNFTCollection(nftCollectionAddress);
    //const { data: nfts, isLoading, error } = useNFTs(nftCollection, address);

    // Contract address from Edition Drop Contract
    //const editionDropContract = useEditionDrop(process.env.EDITION_DROP);
    const editionDropContract = useEditionDrop("0xedBBAFBfEf31D2bE63f10662F6CA5E197c617E3B");
    const { data: nfts, isLoading, error } = useNFTs(editionDropContract, {start: 0, count: 100});

    return (
        <Container fluid justify="center">
            <Text h3 justify="center">My NFTs</Text>
            {isLoading ? (
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Loading type="points" />
                    </Grid>
                </Grid.Container>
            ) : (
                <Grid.Container gap={2} justify="center">
                    {console.log("is Loading: ", isLoading)}
                    {console.log("nfts: ", nfts)}
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
                                        <Button auto flat>
                                            Sell
                                        </Button>
                                        </Grid>
                                        <Grid>
                                        <Button auto color="error">
                                            Burn
                                        </Button>
                                        </Grid>

                                        <Divider />
                                        <Grid>
                                        <Button auto>
                                            Refine
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
};
export default OwnedNFTs;
