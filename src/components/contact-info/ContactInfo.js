import { Heading, Link, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import SocialLinks from './components/SocialLinks'
import bg from '../../images/place-holder-3.jpg'

function ContactInfo({ bgAttachment }) {
	return (
		<VStack
			id='contact'
			w={'100%'}
			spacing={10}
			h={'100vh'}
			justify={'center'}
			color={'gray.50'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: bgAttachment,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<VStack spacing={10}>
				<Heading size={'4xl'}>Get in touch</Heading>
				<Link href={'mailto: basharothman.work@gmail.com'}>
					<Heading
						as={motion.div}
						whileHover={{ scale: [1, 1.2, 1.1] }}
						size={'md'}
						p={4}
						border={'3px solid'}
						borderRadius={10}>
						basharothman.work@gmail.com
					</Heading>
				</Link>
			</VStack>
			<SocialLinks />
		</VStack>
	)
}

export default ContactInfo
