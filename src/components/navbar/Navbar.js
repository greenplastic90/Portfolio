import { HStack } from '@chakra-ui/react'
import React from 'react'
import Logo from './components/Logo'
import Menu from './components/Menu'

function Navbar() {
	return (
		<HStack
			w={'100%'}
			justify={'space-between'}
			py={2}
			position={'fixed'}
			bg={'white'}
			color={'gray.700'}
			zIndex={'100'}
			backgroundColor={'transparent'}>
			<Logo />
			<Menu />
		</HStack>
	)
}

export default Navbar
