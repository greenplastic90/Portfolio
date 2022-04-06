import { AspectRatio, Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { ImFlickr3 } from 'react-icons/im'
import { LockIcon } from '@chakra-ui/icons'

function Interest({ interest }) {
	return (
		<VStack w={'100%'} align={'flex-start'}>
			<HStack>
				<AspectRatio
					as={motion.div}
					ratio={1}
					w={14}
					whileHover={{ y: [0, -20, 0], x: [2, -2, 2, 0] }}
					whileTap={{ y: [0, -20, 0], x: [2, -2, 2, 0] }}>
					{interest.icon}
				</AspectRatio>
				<Heading>{interest.title}</Heading>
			</HStack>
			<HStack>
				<Text>
					{interest.description}{' '}
					{interest.title === 'Photography' && (
						<>
							<Link href='https://www.flickr.com/photos/bashar/' color={'orange'} isExternal>
								Flickr page.
							</Link>
						</>
					)}
				</Text>
			</HStack>
		</VStack>
	)
}

export default Interest
