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

    {/**
        Ok well - this works... kinda. Next To-Do's: 
        [x] make the input from the Input components work -> should work, but not tested ;P 
        [] figure out how to upload a image for the NFT, coz NFT's without images kind of break the system coz the cards cannot display shit then :D 
        [] [] a workaround is instead of uploading the file, submit a IPFS URI - however, if that is required, the app should also allow for IPFS file upload, no? 
        [] if Loading is finished and no collections have been loaded (coz the user does not have any): display info that user has no collections
        [] generally: createNFTModal only makes sense, if user already has collection - if user has no collection, they need to createCollection first before creating NFT
     */}

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
