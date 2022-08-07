import Link from "next/link";
import {
    useContract,
    useAddress,
    useNFTs,
    useMintNFT
} from "@thirdweb-dev/react";
import { Button} from "@nextui-org/react";

const MintNFT = () => {

    const address = useAddress();

    const { contract } = useContract("0x7f214B42f8B53008cc1e81A93a9C8307624E4B26");

    const { mutate: mintNft, isLoading, error, } = useMintNFT(contract?.nft);

    if (error) {
        console.error("failed to mint nft", error)
    }

    return (
        <div>
            <Button
                disabled={isLoading}
                onClick={() => mintNft({ name: "My awesome NFT!", to: address})}>
                Mint!
            </Button>

        </div>
    );
};

export default MintNFT;