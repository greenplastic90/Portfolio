import { HStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Logo from './components/Logo'
import Menu from './components/Menu'
import NavLinks from './components/NavLinks'

function Navbar() {
	const sections = useRef(['skills', 'about', 'projects', 'interests', 'contact'])
	return (
		<HStack
			w={'100%'}
			justify={'space-between'}
			py={2}
			position={'fixed'}
			bg={'white'}
			border={'1px solid'}
			color={'gray.700'}
			zIndex={'100'}>
			<Logo />
			<HStack spacing={[3, null, 5]} pr={4}>
				{sections.current.map((name) => (
					<NavLinks key={name} title={name} />
				))}
			</HStack>
		</HStack>
	)
}

export default Navbar
