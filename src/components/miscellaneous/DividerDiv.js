import { Box, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import bg from '../../images/place-holder-3.jpg'

function DividerDiv({ vh, title, bgAttachment }) {
	return (
		<VStack
			id='projects'
			w={'100%'}
			h={vh}
			justify={'center'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: bgAttachment,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<Heading size={'3xl'} color={'gray.50'}>
				{title}
			</Heading>
		</VStack>
	)
}

export default DividerDiv
