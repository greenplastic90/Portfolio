import { Button, Center, Divider, Heading, HStack, Tag, VStack } from '@chakra-ui/react'
import React from 'react'
import ProjectTech from './ProjectTech'
import { SiGithub } from 'react-icons/si'
import { BsLink45Deg } from 'react-icons/bs'

function ProjectInfo({ project }) {
	return (
		<VStack w={'100%'} spacing={14} pt={'2%'}>
			<VStack spacing={10}>
				<Heading size={'2xl'}>{project.title}</Heading>
				<ProjectTech technologies={project.technologies} />
			</VStack>

			<VStack w={'100%'}>
				<Tag borderRadius='full' size={'sm'} variant={'outline'} mb={2}>
					{project.duration} - {project.team}
				</Tag>

				<Button
					as={'a'}
					href={project.projectURL}
					target={'_blank'}
					leftIcon={<BsLink45Deg />}
					minW={'200px'}
					w={'40%'}
					variant='outline'
					colorScheme='orange'>
					Open project
				</Button>
				<Button
					as={'a'}
					href={project.gitHubURL}
					target={'_blank'}
					leftIcon={<SiGithub />}
					minW={'200px'}
					w={'40%'}
					variant='outline'
					colorScheme='orange'>
					View on GitHub
				</Button>
			</VStack>
		</VStack>
	)
}

export default ProjectInfo
