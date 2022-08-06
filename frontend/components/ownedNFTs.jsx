import Link from "next/link";
import {
    MediaRenderer,
    useNFTCollection,
    useContract,
    useOwnedNFTs,
    useAddress,
    useNFTs
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row } from "@nextui-org/react";

const OwnedNFTs = () => {

    const router = useRouter();

    const address = useAddress();

    const nftCollection = useNFTCollection("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");
    const contract = useContract("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");

    //const { data: nfts, isLoading, error } = useOwnedNFTs(contract?.nft, {start: 0, count: 100})
    //const { data: nft, isLoading, error } = useNFT(contract?.nft, "0x0284fB823f1469e3fc688adf5203E5a1174ed2A0");
    const { data: nfts, isLoading, error } = useNFTs(nftCollection, 0x0284fB823f1469e3fc688adf5203E5a1174ed2A0);

    return (
        <div>
            <Container fluid>
                <Grid.Container gap={2} justify="flex-start">
                    <Grid xs={6} sm={3}>
                        <Card isPressable isHoverable>
                            {isLoading ? (
                                <Text>Loading NFTs...</Text>
                            ) : (
                                <div>
                                    {nfts?.map((listing) => (
                                        <div>

                                            <Card.Body css={{ p: 0 }} key={listing.id} onClick={() => router.push(`/user/${listing.metadata.id}`)} >
                                                <MediaRenderer src={listing.metadata.image} />
                                                <Text b>
                                                    <Link href={`/user/${listing.metadata.id}`}>
                                                        <a>{listing.metadata.name}</a>
                                                    </Link>
                                                </Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row justify="flex-end">
                                                    <p>{listing.metadata.description}</p>
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
            {/**
             * {isLoading ? (
                                <Text>Loading NFTs...</Text>
                            ) : (
                                * // Otherwise, show the listings
                                <div>
                                    {nft?.map((listing) => (
                                        <div>
                                            <Card.Body css={{ p: 0 }} key={listing.id} onClick={() => router.push(`/user/${listing.id}`)} >
                                                <MediaRenderer src={listing.asset.image} />
                                                <Text b>
                                                    <Link href={`/listing/${listing.id}`}>
                                                        <a>{listing.asset.name}</a>
                                                    </Link>
                                                </Text>
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
                                */}
        </div>
    );
};

export default OwnedNFTs;