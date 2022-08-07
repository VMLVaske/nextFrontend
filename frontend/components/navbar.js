import { ThemeChanger } from './themeChanger';
import { Button, Grid, Spacer, Text, Image } from '@nextui-org/react';
import Link from 'next/link';
import Logo from '../public/events_solidity_03.png';

import { useState } from "react";
import { UserDropdown } from './userDropDown';

export default function Navbar() {

    return (
        <Grid.Container gap={4} justify="center">
            <Spacer />
            <Grid>
                <Image src={Logo}
                    alt="Logo"
                    objectFit="cover"
                />
            </Grid>
            <Grid>
                <Button flat>
                    <Link href={{ pathname: "/" }} color="text">
                        <Text>Home</Text>
                    </Link>
                </Button>
            </Grid>
            <Grid>
                <Button flat >
                    <Link href={{ pathname: "/user" }}>
                        <Text>User</Text>
                    </Link>
                </Button>
            </Grid>
            <Grid>
                <Button flat>
                    <Link href={{ pathname: "/marketplace" }}>
                        <Text>Market</Text>
                    </Link>
                </Button>
            </Grid>
            <Grid>
                <ThemeChanger />
            </Grid>
            <Grid>
                <UserDropdown />
            </Grid>
        </Grid.Container >
    )
}


