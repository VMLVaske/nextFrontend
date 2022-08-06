import { Table, Container, css } from '@nextui-org/react'


export default function Footer() {
    return (
        <Container>
            <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    maxWidth: "80%",
                    bottom: "20px",
                    position: "fixed"
                }}
            >
                <Table.Header>
                    <Table.Column>NAME</Table.Column>
                    <Table.Column>ROLE</Table.Column>
                    <Table.Column>STATUS</Table.Column>
                </Table.Header>
                <Table.Body>
                    <Table.Row key="1">
                        <Table.Cell>Tony Reichert</Table.Cell>
                        <Table.Cell>CEO</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row key="2">
                        <Table.Cell>Zoey Lang</Table.Cell>
                        <Table.Cell>Technical Lead</Table.Cell>
                        <Table.Cell>Paused</Table.Cell>
                    </Table.Row>
                </Table.Body>

            </Table>
        </Container>

    )
}