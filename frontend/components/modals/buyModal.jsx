import { Button, Text, Modal, Input } from '@nextui-org/react'
import { useState } from "react";
import { useMarketplace } from '@thirdweb-dev/react'

export default function BuyModal(props) {

    // Marketplace 
    const marketplace = useMarketplace("0x26c350043E7147c12ee37D67f562ecee1909f1Ab")

    // Modal
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    // Direct Listing data

    const assetContractAddress = "0xa98409ABB7048E672DCf0D2781B516835516BEF4";
    // Bread = 0, Beer = 1
    const [tokenId, setTokenId] = useState(props.NftId)

    const [quantity, setQuantity] = useState();
    const [buyoutPricePerToken, setBuyoutPricePerToken] = useState();

    // Data of the listing you want to create
    const listing = {
        // address of the NFT contract the asset you want to list is on
        assetContractAddress,
        // token ID of the asset you want to list
        tokenId,
        // when should the listing open up for offers
        startTimestamp: new Date(),
        // how long the listing will be open for
        listingDurationInSeconds: 86400,
        // how many of the asset you want to list
        quantity,
        // address of the currency contract that will be used to pay for the listing
        currencyContractAddress: "0xec23daeab1deeb3587eeb3453d4e95db128b0e62",
        // how much the asset will be sold for
        buyoutPricePerToken,
    }

    const buy = async () => {
        try {
            console.log("inside buy method of BuyModal component - code needs to be added here")
            closeHandler();
        } catch (e) {
            console.log("failed to create direct listing for NFT", e)
        }
    };

    return (
        <div>
            <Button auto flat onPress={handler}>
                Buy
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" b size={18}>
                        Buy more NFTs
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        size="md"
                        placeholder="How many do you want to buy?"
                        aria-label='selling-quantity'
                        type="number"
                        onChange={e => setQuantity(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Cancel
                    </Button>
                    <Button auto onPress={buy}>
                        Buy
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
