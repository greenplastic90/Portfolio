import { AspectRatio, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

function ProjectTech({ technologies }) {
	return (
		<HStack>
			{technologies.map((tech, i) => {
				return (
					<AspectRatio
						as={motion.div}
						whileHover={{ scale: [1, 1.2, 1.2, 1] }}
						whileInView={{ rotateZ: [0, 20, -20, 0] }}
						key={i}
						ratio={1}
						w={10}>
						{tech}
					</AspectRatio>
				)
			})}
		</HStack>
	)
}

export default ProjectTech
