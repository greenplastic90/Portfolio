import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}
const fonts = {
	heading: 'Roboto, sans-serif',
	body: 'Roboto, sans-serif',
}

const theme = extendTheme({ config, fonts })

export default theme
