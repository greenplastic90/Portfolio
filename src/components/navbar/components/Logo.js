import { Heading } from '@chakra-ui/react'
import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Logo() {
	return (
		<HashLink smooth to='/#top'>
			<Heading size={['sm', null, 'md']} pl={[5, null, 10]}>
				Bashar Othman
			</Heading>
		</HashLink>
	)
}

export default Logo
