import { Button, Text, Modal, Input } from '@nextui-org/react'
import { useState } from "react";

export default function TransferNFTModal(props) {

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    return (
        <div>
                <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            Sell your
                            <Text b size={18}>
                                NFT
                            </Text>
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                            contentLeft="Stuff Left"
                        />
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Password"
                            contentLeft="Stuff Right"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                            Cancel
                        </Button>
                        <Button auto bordered onClick={closeHandler}>
                            Sell
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
)
}
