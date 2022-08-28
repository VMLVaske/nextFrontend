import { Button, Text, Modal, Input, Grid, Spacer } from '@nextui-org/react'
import { useState, useRef } from 'react';

import { useContract, useContractCall, useContractData } from '@thirdweb-dev/react';

export default function MintNFtModal(props) {

    const { contract } = useContract("0xa98409ABB7048E672DCf0D2781B516835516BEF4");
    const { mutateAsync: mintWithSignature, isLoading } = useContractCall(contract, "mintWithSignature")


    // Modal
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    // Mint
    const [amount, setAmount] = useState();
    const [recipient, setRecipient] = useState("0xB9Ba81bBb406d893bF6E0B6ad9F830c82BFCe029");
    const tokenId = props.NftId;

    const mint = async () => {
        console.log("inside mint function")
        try {
            console.info("contract call successs", data);
            closeHandler();
        } catch (err) {
            console.error("contract call failure", err);
        }
    };


    return (
        <div>
            <Button auto flat color="secondary" onPress={handler}>
                Mint
            </Button>
            <Modal scroll
                width="600px"
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        Mint a new NFT
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        color="default"
                        size="md"
                        label="How many would you like to mint?"
                        aria-label='amount'
                        type="number"
                        onChange={e => setAmount(e.target.value)}
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
                            <Button auto onPress={mint}>
                                Mint
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
