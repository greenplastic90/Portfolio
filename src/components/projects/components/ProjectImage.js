import { AspectRatio, Box, Image } from '@chakra-ui/react'
import React from 'react'

function ProjectImage({ image }) {
	return (
		<Box w={'60%'}>
			<Image src={image} />
		</Box>
	)
}

export default ProjectImage
