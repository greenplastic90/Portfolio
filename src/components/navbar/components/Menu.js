import React, { useRef, useState } from 'react'
import { Button, ButtonGroup, useColorMode, HStack, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HashLink } from 'react-router-hash-link'
function Menu() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<HStack spacing={[3, null, 5]} pr={4}>
			{/* <Button onClick={toggleColorMode}>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button> */}
			<HashLink smooth to='/#skills'>
				<Text>skills</Text>
			</HashLink>
			<HashLink smooth to='/#about'>
				<Text>about</Text>
			</HashLink>
			<HashLink smooth to='/#projects'>
				<Text>projects</Text>
			</HashLink>
			<HashLink smooth to='/#contact'>
				<Text>contact</Text>
			</HashLink>
		</HStack>
		// <ButtonGroup spacing={-5} variant='ghost'>
		// 	<Button onClick={toggleColorMode}>
		// 		{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
		// 	</Button>
		// 	<HashLink smooth to='/#about'>
		// 		<Button>about</Button>
		// 	</HashLink>
		// 	<HashLink smooth to='/#skills'>
		// 		<Button>skills</Button>
		// 	</HashLink>
		// 	<HashLink smooth to='/#projects'>
		// 		<Button>projects</Button>
		// 	</HashLink>
		// 	<HashLink smooth to='/#contact'>
		// 		<Button>contact</Button>
		// 	</HashLink>
		// </ButtonGroup>
	)
}

export default Menu
