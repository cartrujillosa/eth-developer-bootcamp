import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Symfoni } from "../hardhat/SymfoniContext";



function MyApp({ Component, pageProps }) {
  return (
    <Symfoni autoInit={true}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Symfoni>
  )
}

export default MyApp
