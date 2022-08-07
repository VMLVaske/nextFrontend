import { useTheme } from 'next-themes';
import { Dropdown, Text, Button } from '@nextui-org/react';

import { useNetworkMismatch, useNetwork, useChainId } from '@thirdweb-dev/react';
import { useState } from "react";

export const NetworkIndicator = () => {

    const chainId = useChainId();
    const isMismatched = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const [selectedColor, setSelectedColor] = useState("success");

    // I have not found a solution yet on how to solve this. Having a network indicator results in too many re-renders. Allowing the user to change the network is much code. xD 

    return (
        <div>
            <Dropdown>
                <Dropdown.Button auto flat color={selectedColor}>
                    Network
                </Dropdown.Button>
                <Dropdown.Menu
                    color={selectedColor}
                >
                    <Dropdown.Item
                        key="mumbai"
                    >
                        Mumbai
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}