import { Button, Text, Modal, Input, Grid } from '@nextui-org/react'
import { useState } from 'react';

import { useMarketplace, useSDK } from '@thirdweb-dev/react';
import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk';

import { useRouter } from 'next/router'

export default function CreateListingModal() {

    const router = useRouter()
    const { contractAddress } = router.query;
    const { nftId } = router.query;

    const [visible, setVisible] = useState(false);
    const [contract, setContract] = useState(contractAddress);
    const [id, setId] = useState(nftId);

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    const sdk = useSDK();

    const marketplace = useMarketplace(contract)

    const createDirectListing = async () => {

        const directListing = {
            assetContractaddress: contract,
            tokenId: id,
            startTimestamp: new Date(),
            listingDurationInSeconds: 86400,
            quantity: 1,
            currencyContractAddres: NATIVE_TOKEN_ADDRESS,
            buyoutPricePerToken: "10",
            reservePricePerToken: "1.5"
        }

        console.log(directListing)

        try {
            const tx = await marketplace.auction.createListing(directListing);
            const receipt = tx.receipt;
            console.log(receipt)
            const listingId = tx.id;
            console.log(listingId)
        } catch (e) {
            console.log("Creation of Listing failed", e)
        }



        closeHandler();
    }

    return (
        <div>
            <Button onPress={handler}>
                Sell
            </Button>
            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        Sell your NFT
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="Sell your NFT for what price..."
                        aria-label='listing-price'
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
                            <Button auto onPress={createDirectListing}>
                                Sell
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
