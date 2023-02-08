import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '../theme'
import Main from './Main'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
    </ChakraProvider>
  )
}
