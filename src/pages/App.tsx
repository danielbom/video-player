import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useLayoutEffect } from 'react'
import SmoothScrollbar from 'smooth-scrollbar'
import MainPage from './PlayerWithDrawer'
import { theme } from '../theme'

export default function App() {
  useLayoutEffect(() => {
    SmoothScrollbar.initAll()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MainPage />
    </ChakraProvider>
  )
}
