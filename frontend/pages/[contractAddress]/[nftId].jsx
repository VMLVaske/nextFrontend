import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import { Container, Row, Col, Grid, Spacer, Loading, Button, Divider, Text } from '@nextui-org/react'

import { useAddress, useContract, MediaRenderer, useNFT } from '@thirdweb-dev/react';

import BurnNFTModal from '../../components/modals/burnNFTModal';
import CreateListingModal from '../../components/modals/createListingModal';
import TransferNFTModal from '../../components/modals/transferNFTModal';

import truncateEthAddress from 'truncate-eth-address';

const NFT = () => {

    const address = useAddress();
    const router = useRouter()
    const { contractAddress } = router.query;
    const { nftId } = router.query;

    const { contract } = useContract(contractAddress);
    const { data: nft, isLoading } = useNFT(contract?.nft, nftId);

    {/* Next To-Do's: 
     [] 
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
                            <Container fluid >
                                <Row gap={2}>
                                    <Col>
                                        <Text h1 b>{nft.metadata.name}</Text>
                                    </Col>
                                </Row>
                                <Row gap={2}>
                                    <Col>
                                        <Text h6>Owner: {truncateEthAddress(nft.owner)}</Text>
                                    </Col>
                                    <Col xs={2}>
                                        <Text h6>NFT Nr. {nftId}</Text>
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
                                                <Text h2>Description</Text>
                                            </Grid>

                                            <Spacer />
                                            <Grid xs={12}>
                                                <Text>{nft.metadata.description}</Text>
                                            </Grid>
                                            <Spacer />

                                            <Divider />
                                            <Spacer />
                                            <Grid.Container gap={2} justify="center" >
                                                <Grid>
                                                    <CreateListingModal />
                                                </Grid>
                                                <Grid>
                                                    <TransferNFTModal />
                                                </Grid>
                                                <Grid>
                                                    <BurnNFTModal />
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