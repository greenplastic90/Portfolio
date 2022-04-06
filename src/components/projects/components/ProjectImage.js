import { AspectRatio, Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

function ProjectImage({ image }) {
	return (
		<VStack
			w={'100%'}
			boxShadow={'dark-lg'}
			borderRadius='full'
			justify={'center'}
			bgColor={'orange.600'}>
			<Image src={image} borderRadius={20} />
		</VStack>
	)
}

export default ProjectImage
