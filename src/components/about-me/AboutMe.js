import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import bg from '../../images/place-holder2.jpg'

function AboutMe() {
	return (
		<VStack
			id='about'
			w={'100%'}
			h={'100vh'}
			justify={'center'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
			color={'gray.50'}>
			<Heading size={'lg'}>Hi, I'm</Heading>
			<Heading size={'3xl'}>Bashar</Heading>
			<Heading size={'3xl'}>Othman</Heading>
			<Heading size={'lg'}>I'm a Full Stack Web Developer</Heading>
		</VStack>
	)
}

export default AboutMe
