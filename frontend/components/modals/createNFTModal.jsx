import { Button, Text, Modal, Input, Grid, Spacer } from "@nextui-org/react";
import { useState, useRef } from "react";

import { useAddress, useEdition } from "@thirdweb-dev/react";

export default function CreateNFTModal() {
  const edition = useEdition(process.env.NFT_COLLECTION_ADDRESS);
  const address = useAddress();

  // Modal
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  // Mint new NFT
  const [nftName, setNftName] = useState("TestName");
  const [nftDescription, setNftDescription] = useState("TestDescription");
  const [nftImage, setNftImage] = useState(null);
  const [supply, setSupply] = useState(10);

  //mint many nfts (batch mint)
  const metadataWithSupply = {
    supply: supply,
    metadata: {
      name: nftName || "Bread NFT",
      description: nftDescription || "This is a test nft",
      image: nftImage,
    },
  };

  const mint = async () => {
    console.log("mint");
    try {
      const tx = await edition.mintTo(address, metadataWithSupply);
      const receipt = tx[0].receipt;
      const firstTokenId = tx[0].id;
      const firstNft = await tx[0].data();
      console.log(receipt, firstTokenId);
    } catch (e) {
      console.log("failed to mint batch NFT", e);
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    //reader.readAsArrayBuffer(data);
    reader.readAsDataURL(data);
    reader.onloadend = () => {
      //console.log("Buffer data: ", Buffer(reader.result));
      setNftImage(reader.result);
    };

    e.preventDefault();
  };

  return (
    <div>
      <Button onPress={handler}>Mint new NFT</Button>
      <Modal
        scroll
        width="600px"
        fullScreen
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
            label="NFT name *"
            aria-label="name"
            type="text"
            onChange={(e) => setNftName(e.target.value)}
          />
          <Input
            clearable
            bordered
            color="default"
            size="md"
            label="NFT Description *"
            aria-label="description"
            type="text"
            onChange={(e) => setNftDescription(e.target.value)}
          />
          <Input
            clearable
            bordered
            color="default"
            size="md"
            label="NFT image"
            aria-label="image"
            type="url"
            helperText="Please provide IPFS URI or use ThirdWeb Dashboard Interface"
            onChange={(e) => setNftImage(e.target.value)}
          />
          <Spacer y={0.5} />
          <Input
            clearable
            bordered
            color="default"
            size="md"
            label="Supply Quantity *"
            aria-label="name"
            type="number"
            onChange={(e) => setSupply(e.target.value)}
          />
          <input name="file" type="file" onChange={retrieveFile} />
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
