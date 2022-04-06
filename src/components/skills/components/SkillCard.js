import { AspectRatio, VStack, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

function SkillCard({ logo, title, i }) {
	return (
		<VStack
			as={motion.div}
			whileHover={{ rotate: i % 2 === 0 ? 20 : -20 }}
			whileTap={{ scale: 0.9 }}
			border={'1px solid '}
			justify={'center'}
			align={'center'}
			w={['100%']}
			py={6}
			borderRadius={10}
			borderColor={'gray.300'}>
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
