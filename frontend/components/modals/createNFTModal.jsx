import { Button, Text, Modal, Input, Grid } from '@nextui-org/react'
import { useState } from 'react';

import { useAddress, useContract, useMintNFT, useNFTCollection } from '@thirdweb-dev/react';

export default function CreateNFTModal() {

    const contract = useNFTCollection("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");
    const address = useAddress();

    // Modal
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    // Mint new NFT
    const [nftName, setNftName] = useState("TestName");
    const [nftDescription, setNftDescription] = useState("TestDescription");
    const [nftImage, setNftImage] = useState();

    const { mutate: minftNft, isLoading, error } = useMintNFT(contract?.nft);

    const mint = async () => {
        const metadata = {
            name: nftName,
            description: nftDescription,
        }
        console.log(metadata)
        try {
            await contract.mintTo(address, metadata)
            closeHandler();
        } catch (err) {
            console.log("Failed to mint NFT", err)
        }
    }

    return (
        <div>
            <Button onPress={handler}>
                Mint new NFT
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
                        label="NFT name"
                        aria-label='name'
                        type="text"
                        onChange={e => setNftName(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        color="default"
                        size="md"
                        label="NFT Description"
                        aria-label='description'
                        type="text"
                        onChange={e => setNftDescription(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        color="default"
                        size="md"
                        label="NFT image"
                        aria-label='image'
                        type="url"
                        helperText='Please provide IPFS URI or use ThirdWeb Dashboard Interface'
                        onChange={e => setNftImage(e.target.value)}
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
