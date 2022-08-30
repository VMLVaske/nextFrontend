import { Button, Text, Modal, Input, Grid, Spacer } from '@nextui-org/react'
import { useState } from 'react';

import { useAddress, useEditionDrop, useClaimNFT } from '@thirdweb-dev/react';

export default function ClaimNFtModal(props) {

    const editionDrop = useEditionDrop("0xedBBAFBfEf31D2bE63f10662F6CA5E197c617E3B");
    const address = useAddress();


    // Modal
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    // Claim
    const tokenId = props.NftId;

    const { mutate: claimNft, isLoading, error, } = useClaimNFT(editionDrop);

    if (error) {
        console.error("Failed to claim NFT", error)
    }


    return (
        <div>
            <Button auto flat color="secondary" onPress={handler}>
                Claim
            </Button>
            <Modal scroll
                width="600px"
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        Claim a NFT
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text i>
                        Claiming NFTs is only possible while their claim phase is active.
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Button auto flat bordered onPress={closeHandler}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid>
                            <Button auto onPress={() => claimNft({ to: address, quantity: 1, tokenId: props.NftId })}>
                                Claim
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
