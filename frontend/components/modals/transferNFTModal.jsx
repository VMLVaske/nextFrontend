import { Button, Text, Modal, Input, Grid } from "@nextui-org/react";
import { useState } from "react";

import { useAddress, useContract, useContractCall } from '@thirdweb-dev/react';

import { useRouter } from "next/router";
export default function TransferNFTModal(props) {

    const { contract } = useContract("0xa98409ABB7048E672DCf0D2781B516835516BEF4");

    const address = useAddress();

    // Modal
    const [visible, setVisible] = useState(false);
    const [recipientAddress, setRecipientAddress] = useState()

  const { contract } = useContract(contractAddress);

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
>>>>>>> Stashed changes
    }
  };

<<<<<<< Updated upstream
  return (
    <div>
      <Button bordered onPress={handler}>
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
=======
    return (
        <div>
            <Button auto flat onPress={handler}>
                Transfer
            </Button>

            <Modal
                closeButtons
                open={visible}
                onClose={closeHandler}
            >
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
                        label-placeholder="Send to 0x00..."
                        aria-label='recipient'
                        onChange={e => setRecipientAddress(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        color="default"
                        size="md"
                        label-placeholder="How many NFTs do you want to send?"
                        aria-label='recipient'
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
                            <Button auto onPress={transferNFT}>
                                Transfer
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    );
>>>>>>> Stashed changes
}
