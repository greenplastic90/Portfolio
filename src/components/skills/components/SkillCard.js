import { AspectRatio, Text, VStack, Box, Heading } from '@chakra-ui/react'
import React from 'react'

function SkillCard({ logo, title }) {
	return (
		<VStack
			border={'1px solid '}
			justify={'center'}
			align={'center'}
			w={['100%']}
			py={6}
			borderRadius={10}>
			<AspectRatio ratio={1} w={[8, 10]}>
				{logo}
			</AspectRatio>
			<Heading size={['xs', null, 'md']} align={'center'} px={1}>
				{title}
			</Heading>
		</VStack>
	)
}

export default SkillCard
