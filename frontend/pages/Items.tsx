import { Heading, StackDivider, Stack, Flex, Table, Thead, Tr, Td, Th, Tbody, Button, Input, InputGroup, InputLeftAddon, Divider } from "@chakra-ui/react"
import { BigNumber } from "ethers";
import useSWR from "swr";
import { ItemManagerContext } from "../hardhat/SymfoniContext";
import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router'


export interface Item {
    step: number;
    id: string;
    price: number;
}

export interface ItemsProps {
    items: Item[]
}

export function Items() {
    //   const {data} = useSWR('/comments', { initialData: items});
    const itemManager = useContext(ItemManagerContext)
    const [items, setItems] = useState([]);
    const [itemPrice, setItemPrice] = useState(0);
    const [itemId, setItemId] = useState("");
    useEffect(() => {
        const doAsync = async () => {
            if (!itemManager.instance) return
            console.log(itemManager.instance)
            const nitems = await itemManager.instance.index()
            let itemsFromContract: Item[] = []
            for (let n = 1; n < nitems.toNumber(); n++) {
                const i = await itemManager.instance.items(n)
                const item: Item = {
                    id: i._id,
                    step: i._step,
                    price: i._priceInWei.toNumber(),
                }
                itemsFromContract.push(item)
            }
            setItems(itemsFromContract)
        };
        doAsync();
    }, [itemManager])

    const handleAddItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!itemManager.instance) throw Error("Item manager instance not ready")
        if (itemManager.instance) {
            await itemManager.instance.createItem(itemId, itemPrice)
            const newItem : Item = {
                id: itemId,
                price: itemPrice,
                step: 0,
            }
        }
    }

    return (
        <Stack as="main" align="center">
            <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                padding="50px"
            >
                Items shop
        </Heading>
            <Heading
                as="h3"
                size="md"
            >
                Contract: {itemManager.instance?.address}
            </Heading>
            <Flex
                flexDirection="column"
                maxWidth="700px"
            >
                <Flex
                    direction="row"
                    w="700px"
                    pt={4}
                    justify="space-between"
                >
                    <InputGroup>
                        <InputLeftAddon children="Cost in wei" />
                        <Input placeholder="1000000" onChange={(e) => setItemPrice(+e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children="ID" />
                        <Input placeholder="item idenfitifier" onChange={(e) => setItemId(e.target.value)} />
                    </InputGroup>
                    <Button colorScheme="blue" onClick={handleAddItem}>ADD</Button>
                </Flex>
            </Flex>
            <Divider />
            <Stack paddingTop="50px" maxWidth="1000px">
                <Table variant="striped" size="sm">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Price (wei)</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {items?.map((item, index) => (
                            <Tr>
                                <Td>{item.id}</Td>
                                <Td>{item.price}</Td>
                                <Td>{item.step}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Stack>

        </Stack>
    )
}

Items.getInitialProps = async ctx => {
    const items: Item[] = [];
    return { items: items };
};
