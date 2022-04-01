import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import SocialLinks from './components/SocialLinks'
import bg from '../../images/place-holder2.jpg'

function ContactInfo() {
	return (
		<VStack
			id='contact'
			w={'100%'}
			spacing={10}
			h={'70vh'}
			justify={'center'}
			color={'gray.50'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<VStack spacing={10}>
				<Heading size={'4xl'}>Get in touch</Heading>
				<Heading
					as={'a'}
					href={'mailto: basharothman.work@gmail.com'}
					size={'md'}
					p={4}
					border={'3px solid'}
					borderRadius={10}>
					basharothman.work@gmail.com
				</Heading>
			</VStack>
			<SocialLinks />
		</VStack>
	)
}

export default ContactInfo
