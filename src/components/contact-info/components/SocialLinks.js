import { AspectRatio, HStack, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

function SocialLinks() {
	const socialLinks = useRef([
		{
			title: 'LinkedIn',
			URL: 'https://www.linkedin.com/in/bashar-othman',
			icon: <SiLinkedin />,
		},
		{ title: 'GitHub', URL: 'https://github.com/greenplastic90', icon: <SiGithub /> },
	])

	return (
		<HStack spacing={4}>
			{socialLinks.current.map(({ title, URL, icon }) => {
				return (
					<Link
						key={title}
						href={URL}
						target={'_blank'}
						as={motion.a}
						whileHover={{ scale: [1, 1.2, 1.1] }}>
						<AspectRatio ratio={1} w={10}>
							{icon}
						</AspectRatio>
					</Link>
				)
			})}
		</HStack>
	)
}

export default SocialLinks
