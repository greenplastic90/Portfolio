import { Stack, Text, VStack, Divider } from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import ProjectImage from './ProjectImage'
import ProjectInfo from './ProjectInfo'

const squareVariants = {
	visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
	hidden: { opacity: 0, scale: 0.9 },
}

function Project({ project, i }) {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])
	return (
		<>
			<VStack
				spacing={8}
				as={motion.div}
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariants}>
				<Stack
					w={'full'}
					direction={['column', null, i % 2 === 0 ? 'row' : 'row-reverse']}
					justify={'center'}
					align={'top'}>
					<ProjectImage image={project.image} />
					<ProjectInfo project={project} />
				</Stack>
				<Text>{project.description}</Text>
				<Divider />
			</VStack>
		</>
	)
}

export default Project
