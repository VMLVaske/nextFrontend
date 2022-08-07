import Link from "next/link";
import {
    useNFTCollection,
    useAddress,
    useNFTs
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading } from "@nextui-org/react";

const SingleNFTs = () => {

    const router = useRouter();

    const address = useAddress();

    const contract = useNFTCollection("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");

    const { data: nfts, isLoading, error } = useNFTs(nftCollection, address);

    return (
        <Container fluid>
            <h3>Single NFTs</h3>
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
                                <Card.Body css={{ p: 0 }} key={listing.metadata.id} onClick={() => router.push(`/user/${listing.metadata.id}`)} >
                                    <Card.Image
                                        src={listing.metadata.image}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={listing.metadata.name}
                                    />
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify="flex-end">
                                        <Text>{listing.metadata.description}</Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>
            )
            }
        </Container>
    );
};

export default SingleNFTs;