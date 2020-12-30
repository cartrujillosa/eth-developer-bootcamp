import { Heading, Divider, Stack, Flex, List, ListItem } from "@chakra-ui/react"
import { ItemForm } from "./components/ItemForm"
import { BigNumber } from "ethers";
import useSWR from "swr";
import { ItemManagerContext } from "../hardhat/SymfoniContext";
import React, { useContext, useEffect, useState } from 'react';




export interface Item {
    step: number;
    id: string;
    price: BigNumber;
}

export interface ItemsProps {
    items: Item[]
}

// TODO launch metamask
export function Items({ items }: ItemsProps) {
    //   const {data} = useSWR('/comments', { initialData: items});
    const itemManager = useContext(ItemManagerContext)
    // const [message, setMessage] = useState("");
    // const [inputGreeting, setInputGreeting] = useState("");
    useEffect(() => {
        const doAsync = async () => {
            if (!itemManager.instance) return
            console.log("itemManager is deployed at ", itemManager.instance.address)
            // setMessage(await itemManager.instance.greet())
        };
        doAsync();
    }, [itemManager])

    return (
        <Stack as="main" align="center">
            <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                >
                Items
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
                    <ItemForm />
                </Flex>

            </Flex>
            <Divider />
            <List spacing={3}>
                {items?.map((item, index) => (
                    <ListItem>
                        {index}: {item.id}
                    </ListItem>
                ))}
            </List>
        </Stack>
    )
}

Items.getInitialProps = async ctx => {
    const items: Item[] = [];
    return { items: items };
};
