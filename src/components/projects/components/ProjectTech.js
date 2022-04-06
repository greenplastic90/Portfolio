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
						animate={{ scale: [1, 1.2, 1.2, 1] }}
						whileHover={{ rotateY: 180, scale: 1.2 }}
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
