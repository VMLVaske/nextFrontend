import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { Container, Row, Col, Grid, Spacer, Loading, Button, Divider, Text } from '@nextui-org/react'

import { useAddress, useContract, MediaRenderer, useNFT, useCreateDirectListing, useMarketplace } from '@thirdweb-dev/react';
import { useState } from "react";

import BurnNFTModal from '../../components/modals/burnNFTModal';

const NFT = () => {

    const address = useAddress();
    const router = useRouter()
    const { pid } = router.query

    const { contract } = useContract("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");
    const { data: nft, isLoading } = useNFT(contract?.nft, pid)


    //const marketPlace = useMarketplace("0xD3d4036F8BdA104bf7c7c483452267DEAF7640Ff")
    //const { mutate: createDirectListing, error } = useCreateDirectListing(marketPlace);

    {/** 
    if (error) {
        console.error("failed to create direct listing", error);
    }
    */}

    return (
        <Layout>
            <div>
                <main>
                    <Container fluid>
                        <Spacer />
                        {isLoading ? (
                            <Grid.Container gap={2} justify="center">
                                <Grid>
                                    <Loading type="points" />
                                </Grid>
                            </Grid.Container>
                        ) : (
                            <Container Container >
                                <Row gap={2}>
                                    <Col>
                                        <Text h1 b>{nft.metadata.name}</Text>
                                    </Col>
                                    <Col>
                                        <Text blockquote>NFT Nr. {pid}</Text>
                                    </Col>
                                    <Col>
                                        {""}
                                    </Col>
                                    <Col>
                                        {""}
                                    </Col>
                                </Row>
                                <Spacer />
                                <Row gap={2}>
                                    <Col gap={2}>
                                        <MediaRenderer src={nft.metadata.image} />
                                    </Col>
                                    <Spacer />
                                    <Col gap={2}>
                                        <Grid.Container justify="center">
                                            <Grid xs={12}>
                                                <h2>Description</h2>
                                            </Grid>
                                            <Spacer />
                                            <Grid xs={12}>
                                                <p>{nft.metadata.description}</p>
                                            </Grid>
                                            <Spacer />
                                            <Divider />
                                            <Spacer />
                                            <Grid.Container gap={2} justify="center" >
                                                <Grid>
                                                    <Button onClick={() => createDirectListing("stuff")}>Sell</Button>
                                                </Grid>
                                                <Grid>
                                                    <Button bordered flat>Transfer</Button>
                                                </Grid>
                                                <Grid>
                                                    <BurnNFTModal
                                                        tokenId={pid}
                                                        NftContract={contract}
                                                    />
                                                </Grid>
                                            </Grid.Container>
                                        </Grid.Container>

                                    </Col>
                                </Row>
                            </Container>
                        )
                        }
                    </Container>
                </main>
            </div>
        </Layout >
    )
}

export default NFT;