import { AspectRatio, HStack } from '@chakra-ui/react'
import React from 'react'

function ProjectTech({ technologies }) {
	return (
		<HStack>
			{technologies.map((tech, i) => {
				return (
					<AspectRatio key={i} ratio={1} w={10}>
						{tech}
					</AspectRatio>
				)
			})}
		</HStack>
	)
}

export default ProjectTech
