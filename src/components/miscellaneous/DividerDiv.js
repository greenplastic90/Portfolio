import { Box, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import bg from '../../images/place-holder3.jpg'

function DividerDiv({ vh, title }) {
	return (
		<VStack
			id='projects'
			w={'100%'}
			h={vh}
			justify={'center'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<Heading size={'3xl'}>{title}</Heading>
		</VStack>
	)
}

export default DividerDiv
