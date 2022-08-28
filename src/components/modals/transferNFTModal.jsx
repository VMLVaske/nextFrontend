import { Button, Text, Modal, Input, Grid } from '@nextui-org/react'
import { useState } from 'react';

import { useContract } from '@thirdweb-dev/react';

import { useRouter } from 'next/router'

export default function TransferNFTModal() {

    const router = useRouter()
    const { contractAddress } = router.query;
    const { nftId } = router.query;

    const [visible, setVisible] = useState(false);
    const [recipientAddress, setRecipientAddress] = useState("0x954184AD0Fbc67332Bab62a6c5958c4C5E2CFeC2")

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    const { contract } = useContract(contractAddress);

    const transferNFT = async () => {
        try {
            await contract.nft.transfer(recipientAddress, nftId)
            closeHandler();
        } catch (err) {
            console.log("NFT transfer failed", err)
        }
    }

    return (
        <div>
            <Button bordered onPress={handler}>
                Transfer
            </Button>
            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        Transfer your NFT
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text>Send your NFT here: </Text>
                    <Input
                        clearable
                        bordered
                        color="default"
                        size="md"
                        label-placeholder="Recipient Address..."
                        aria-label='recipient'
                        onChange={e => setRecipientAddress(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Button auto flat bordered onPress={closeHandler}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid>
                            <Button auto onPress={transferNFT}>
                                Transfer
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
