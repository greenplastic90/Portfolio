import { AspectRatio, Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

function ProjectImage({ image }) {
	return (
		<VStack w={'100%'}>
			<Image src={image} />
		</VStack>
	)
}

export default ProjectImage
