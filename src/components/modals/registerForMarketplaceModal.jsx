import { Button, Text, Modal, Input, Grid } from '@nextui-org/react'
import { useState } from "react";

import { useAddress } from '@thirdweb-dev/react';

export default function SellModal(props) {

    const address = useAddress();

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    return (
        <div>
            {address ?
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Text>Connected with address: {address} </Text>
                    </Grid>
                </Grid.Container>
                :
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Button flat onPress={handler}>
                            Connect wallet or register for Marketplace
                        </Button>
                    </Grid>
                </Grid.Container>

            }

            <Modal
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        Register for Marketplace
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    If you want to be eligible to list your own goods on this marketplace, please click "Register".
                </Modal.Body>
                <Modal.Footer>
                    <Grid.Container gap={2} justify="center">
                        <Grid>
                            <Button auto flat bordered onPress={closeHandler}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid>
                            <Button autoonPress={closeHandler} >
                                Register
                            </Button>
                        </Grid>
                    </Grid.Container>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
