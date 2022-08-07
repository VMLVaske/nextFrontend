import { useTheme } from 'next-themes';
import { Form, Input, Button } from '@nextui-org/react';
// got instructions from here: https://portal.thirdweb.com/guides/nft-marketplace-with-typescript-next 

export const createListingModal = () => {

    return (
        <Form onSubmit={(e) => handleCreateListing(e)}>
            <div>
                {/* Form Section */}
                <div>
                    <h1>Upload your NFT to the marketplace:</h1>

                    {/* Toggle between direct listing and auction listing */}
                    <div>
                        <Input
                            type="radio"
                            name="listingType"
                            id="directListing"
                            value="directListing"
                            defaultChecked
                        />
                        <Input
                            type="radio"
                            name="listingType"
                            id="auctionListing"
                            value="auctionListing"
                        />
                    </div>

                    {/* NFT Contract Address Field */}
                    <Input
                        type="text"
                        name="contractAddress"
                        placeholder="NFT Contract Address"
                    />

                    {/* NFT Token ID Field */}
                    <Input type="text" name="tokenId" placeholder="NFT Token ID" />

                    {/* Sale Price For Listing Field */}
                    <Input type="text" name="price" placeholder="Sale Price" />

                    <Button type="submit">Create Listing</Button>
                </div>
            </div>
        </Form>
    )
}