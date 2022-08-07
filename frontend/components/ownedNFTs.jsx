import Link from "next/link";
import { useNFTCollection, useAddress, useNFTs, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading } from "@nextui-org/react";

const OwnedNFTs = () => {

    const router = useRouter();

    const address = useAddress();
    //const testAddress = "0x954184AD0Fbc67332Bab62a6c5958c4C5E2CFeC2";

    const nftCollectionAddress = "0x7f214B42f8B53008cc1e81A93a9C8307624E4B26";
    const nftCollection = useNFTCollection(nftCollectionAddress);

    //const contract = useContract(nftCollectionAddress);
    const { data: nfts, isLoading, error } = useNFTs(nftCollection, address)

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
                    {nfts.map((listing) => (
                        <Grid xs={6} sm={3}>
                            <Card isPressable isHoverable>
                                <Card.Header>
                                    <Link href={`/user/${listing.metadata.id}`}>
                                        <Text b>{listing.metadata.name}</Text>
                                    </Link>
                                </Card.Header>
                                <Card.Body
                                    css={{ p: 0 }}
                                    key={listing.metadata.id}
                                    onClick={() => router.push(`/${nftCollectionAddress}/${listing.metadata.id}`)}
                                >
                                    <Card.Image
                                        src={listing.metadata.image}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={listing.metadata.name}
                                    />
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify="flex-start">
                                        <Text>{listing.metadata.description}</Text>
                                    </Row>
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