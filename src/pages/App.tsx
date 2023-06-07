import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from '../theme'
import MainPage from './PlayerWithDrawer'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainPage />
    </ChakraProvider>
  )
}
