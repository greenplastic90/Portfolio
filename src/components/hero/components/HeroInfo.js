import { Box, Heading, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const titles = [
	'Web',
	'Software',
	'React',
	'JavaScript',
	'NodeJS',
	'MongoDB',
	'Python',
	'Django',
	'PostgreSQL',
]

function HeroInfo() {
	const [newTitle, setNewTitle] = useState('Web')
	const index = useRef(0)

	useEffect(() => {
		const changeTitle = () => {
			index.current = index.current + 1
			if (index.current > titles.length - 1) {
				index.current = 0
				setNewTitle(titles[index.current])
			} else {
				setNewTitle(titles[index.current])
			}
		}
		const intervalID = setInterval(changeTitle, 3000)
		return () => clearInterval(intervalID)
	}, [])

	return (
		<VStack w={'100%'} textAlign={['center', null, 'start']} align={['center', null, 'flex-start']}>
			<Heading textAlign={['center', 'flex-start']} size={'2xl'}>
				My name is Bashar.
			</Heading>
			<Heading size={['2xl']}>
				I'm a Junior{' '}
				<Heading
					size={['2xl']}
					as={motion.div}
					key={newTitle}
					animate={{ scale: [0.4, 1], x: [-300, 100, 0] }}
					textColor={'black'}>
					{newTitle}
				</Heading>
			</Heading>
			<Heading size={['2xl']}>Developer.</Heading>
		</VStack>
	)
}

export default HeroInfo
