import Link from "next/link";
import { MediaRenderer, useActiveListings, useEdition, useEditionDrop, useMarketplace, useNFTs } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Grid, Container, Card, Text, Row, Loading, Spacer, Button } from "@nextui-org/react";


// no idea why this isn't working
// code seems correct? 
// browser console logs the right data for the assets? 
const AllMintedNFTs = () => {

    const router = useRouter();

    const editionDrop = useEditionDrop("0xedBBAFBfEf31D2bE63f10662F6CA5E197c617E3B");
    const { data: nfts, isLoading, error } = useNFTs(editionDrop, { start: 0, count: 100 });

    return (
        <div>
            <Container fluid>
                <h2>All Minted NFTs</h2>
                {isLoading ? (
                    <Grid.Container gap={2} justify="center">
                        <Spacer />
                        <Grid>
                            <Loading type="points" />
                        </Grid>
                    </Grid.Container>
                ) : (
                    <div>
                        {(nfts.length == 0) ? (
                            <Grid.Container gap={2} justify="center">
                                <Grid>
                                    <Button disabled >Currently no listings. Check again later. </Button>
                                </Grid>
                            </Grid.Container>
                        ) : (
                            <Grid.Container gap={2} justify="center">
                                {
                                    nfts.map((index) => {
                                        <Grid>
                                            <Text>
                                                Header: {index.metadata.name}
                                                console.log("Header: ", index.metadata.name)
                                            </Text>
                                        </Grid>
                                    })

                                }
                            </Grid.Container>
                        )}
                    </div>
                )}
            </Container >
        </div >
    );
};

export default AllMintedNFTs;