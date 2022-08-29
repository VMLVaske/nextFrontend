import { Button, Text, Modal, Input, Grid } from "@nextui-org/react";
import { useState } from "react";

import { useAddress, useContract, useContractCall } from '@thirdweb-dev/react';

import { useRouter } from "next/router";

export default function TransferNFTModal(props) {

  const { contract } = useContract(process.env.NFT_COLLECTION_ADDRESS);

  const address = useAddress();

  // Modal
  const [visible, setVisible] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState()
  
  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const transferNFT = async () => {
    console.log("Recipient Address: ", recipientAddress)
    console.log("Address: ", address)
    console.log("Recipient: ", recipientAddress);
    console.log("NftId: ", nftId)
    console.log("amount: ", amount)
    try {
      const data = await safeTransferFrom([address, recipientAddress, nftId, amount]);
      console.info("contract call success", data)
      closeHandler();
    } catch (err) {
      console.error("NFT transfer failed", err)
    }
  }

  return (
    <div>
      <Button flat onPress={handler} auto color="warning">
        Transfer
      </Button>
      <Modal closeButton open={visible} onClose={closeHandler}>
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
            aria-label="recipient"
            onChange={(e) => setRecipientAddress(e.target.value)}
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
