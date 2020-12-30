import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"


export function ItemForm() {
    return <>
        <InputGroup>
            <InputLeftAddon children="Cost in wei" />
            <Input placeholder="1000000" />
        </InputGroup>
        <InputGroup>
            <InputLeftAddon children="ID" />
            <Input placeholder="item idenfitifier" />
        </InputGroup>
        <Button colorScheme="blue">ADD</Button>
    </>
}