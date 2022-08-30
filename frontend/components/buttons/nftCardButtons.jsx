import { Grid, Divider } from '@nextui-org/react'

import SellModal from "../modals/sellModal";
import BuyModal from "../modals/buyModal";
import TransferNFTModal from "../modals/transferNFTModal";
import MintNFtModal from "../modals/mintNFTModal";
import ClaimNFtModal from '../modals/claimNFTModal';
import BurnNFTModal from "../modals/burnNFTModal";
import UseNFTModal from "../modals/useNFTModal";

export default function NftCardButtons(props) {

    return (
        <Grid.Container gap={1} justify="center">
            <Grid.Container gap={1} justify="space-evenly">
                <Grid>
                    <BuyModal NftId={props.NftId} />
                </Grid>
                <Grid>
                    <TransferNFTModal NftId={props.NftId}/>
                </Grid>
                <Grid>
                    <SellModal NftId={props.NftId} />
                </Grid>
            </Grid.Container>

            <Divider />

            <Grid.Container gap={1} justify="space-evenly">
                <Grid>
                    <ClaimNFtModal NftId={props.NftId} />
                </Grid>
                <Grid>
                    <UseNFTModal NftId={props.NftId} />
                </Grid>
                <Grid>
                    <BurnNFTModal NftId={props.NftId} />
                </Grid>
            </Grid.Container>

        </Grid.Container>
    )
}
