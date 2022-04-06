import { Heading, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Interest from './components/Interest'
import { GiShuttlecock, GiFrisbee } from 'react-icons/gi'
import { CgGames } from 'react-icons/cg'
import { BsCameraFill } from 'react-icons/bs'

function Interests() {
	const interestsArr = useRef([
		{
			title: 'Badminton',
			description:
				'My favourite sport to engage in, I have met amazing people around the world by playing in Canada, Spain and Jordan.',
			icon: <GiShuttlecock />,
		},
		{
			title: 'Ultimate Frisbee',
			description:
				'Ranks 2nd on sports I enjoy, great community around it, which is what attracted me to it in the first place. I find it to be more physically demanding than badminton, but it adds to the enjoyment.',
			icon: <GiFrisbee />,
		},
		{
			title: 'Video Games',
			description:
				'What I love most about video games is the amount of options there are for whatever mood or headspace you’re in at the moment. Puzzle games like The Witness for when you want to challenge your mind, Rocket League or Overwatch for when you want to test your dexterity and reaction times against others, party games that bring all sorts of people together and even ones who don’t identify as being “gamers”, like Over Cooked and JackBox Games.',
			icon: <CgGames />,
		},
		{
			title: 'Photography',
			description:
				'I was obsessed with photography, digital photography in particular. Started taking photos with a small point and click sony camera, then upgraded to a Nikon DSLR setup with multiple detachable lenses. Part of what got me excited about photography was editing photos and creating something special from what could be a dull image. Some on the images I took over the years are on my ',
			icon: <BsCameraFill />,
		},
	])
	return (
		<VStack id='interests' w={'100%'} mb={40}>
			<Heading size={'2xl'} alignSelf={'self-start'} mb={50}>
				Some Interests
			</Heading>
			<VStack spacing={10}>
				{interestsArr.current.map((interest) => (
					<Interest key={interest.title} interest={interest} />
				))}
			</VStack>
		</VStack>
	)
}

export default Interests
