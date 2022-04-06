import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function AboutMe() {
	return (
		<VStack id='about' mb={90}>
			<Heading mt={90} size={'2xl'} alignSelf={'self-start'} mb={50}>
				I love programing
			</Heading>
			<Text>
				The “why” and “how” behind how things work have always been important to me. The logic and
				reason behind why something happens is as fascinating if not more fascinating than the thing
				itself.
			</Text>
			<Text>
				From a young age I’ve been interested in technology, programming and computer games but
				never thought I’d make the switch to a new career. However, after observing the state of the
				world during the pandemic, I decided to look into it further. I self-studied and got an
				internship at a software development company to get guidance and to know for sure if this
				field was right for me, and I honestly can say I couldn’t have imagined how much I would
				fall in love with programming. I love how everything is wrapped around logic, problem or
				‘puzzle’ solving and the feeling of accomplishment I get when a piece of code runs as
				expected! This led me to take a full time bootcamp.
			</Text>
		</VStack>
	)
}

export default AboutMe
