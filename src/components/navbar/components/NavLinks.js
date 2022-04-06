import { Text } from '@chakra-ui/react'
import React from 'react'
import { HashLink } from 'react-router-hash-link'

function NavLinks({ title }) {
	return (
		<HashLink smooth to={`/#${title}`}>
			<Text>{title}</Text>
		</HashLink>
	)
}

export default NavLinks
