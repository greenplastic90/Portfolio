import { Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import DividerDiv from '../../miscellaneous/DividerDiv'
import ProjectImage from './ProjectImage'
import ProjectInfo from './ProjectInfo'

function Project({ project, i }) {
	return (
		<VStack spacing={8}>
			<Stack w={'full'} direction={i % 2 === 0 ? 'row' : 'row-reverse'} align={'top'}>
				<ProjectImage image={project.image} />
				<ProjectInfo project={project} />
			</Stack>
			<Text>{project.description}</Text>
		</VStack>
	)
}

export default Project
