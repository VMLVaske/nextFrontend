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
                <Button flat>
                    <Link href={{ pathname: "/marketplace" }}>
                        <Text>Market</Text>
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
                <ThemeChanger />
            </Grid>
            {/*
            <Grid>
                <Dropdown>
                    <Dropdown.Button flat>User</Dropdown.Button>
                    <Dropdown.Menu
                    aria-label="Static Actions"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                    >
                        <Dropdown.Item key="connect" onClick={connectWithMetamask} >Connect</Dropdown.Item>
                        <Dropdown.Item key="signIn">Sign in</Dropdown.Item>
                        <Dropdown.Item key="authenticate">Authenticate</Dropdown.Item>
                        <Dropdown.Item key="disconnect" color="error" onClick={disconnect} >Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            */}
            {/*address ? (
                    <Button onClick={disconnect}>Disconnect Wallet</Button>
                ) : (
                    <Button onClick={connectWithMetamask}>Connect Wallet</Button>
                )*/}
            {/** 
            <Grid>
                <Dropdown>
                    <Dropdown.Trigger>
                        User
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Text>Sign In</Text>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Text>Profile</Text>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            */}

            <Grid>
                <UserDropdown />
            </Grid>
        </Grid.Container >
    )
}


