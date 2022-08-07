import { Button, Text, Modal, Input, Grid } from '@nextui-org/react'
import { useState } from 'react';

import { useNFTCollection } from '@thirdweb-dev/react';

import { useRouter } from 'next/router'

export default function BurnNFTModal() {

    const router = useRouter()
    const { contractAddress } = router.query;
    const { nftId } = router.query;

    const [visible, setVisible] = useState(false);
    const [contract, setContract] = useState(contractAddress);
    const [id, setId] = useState(nftId);

    const handler = () => setVisible(true);

    const burnNft = async () => {
        const nftCollection = useNFTCollection(contract);
        const result = await nftCollection.burn(id);
        setVisible(false);
    }

    const closeHandler = () => {
        setVisible(false);
    }

    function handleContractChange(NFTContract) {
        setContract(NFTContract);
    }

    function handleIdChange(nftId) {
        setId(nftId);
    }

    return (
        <div>
            <Button auto color="error" flat onPress={handler}>
                Burn NFT
            </Button>
            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18} color="error">
                        Are you sure?
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text>This action is irreversible - after burning, the NFT is destroyed. </Text>
                </Modal.Body>
                <Modal.Footer>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Button auto flat bordered onPress={closeHandler}>
                                No, take me back
                            </Button>
                        </Grid>
                        <Grid>
                            <Button auto onPress={burnNft} color="error">
                                Yes, burn NFT forever
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
