import { AspectRatio, Grid, GridItem, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import SkillCard from './components/SkillCard'
import {
	SiReact,
	SiJquery,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiSass,
	SiBootstrap,
	SiChakraui,
	SiMicrosoft,
	SiWordpress,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
	SiPython,
	SiDjango,
	SiPostgresql,
	SiPostman,
	SiInsomnia,
	SiYarn,
	SiNpm,
	SiHeroku,
	SiGithub,
} from 'react-icons/si'
import SkillGrid from './components/SkillGrid'

function Skills() {
	const skills = useRef([
		{ logo: <SiReact />, title: 'React' },
		{ logo: <SiJavascript />, title: 'JavaScript' },
		{ logo: <SiJquery />, title: 'jQuery' },
		{ logo: <SiHtml5 />, title: 'HTML5' },
		{ logo: <SiCss3 />, title: 'CSS3' },
		{ logo: <SiSass />, title: 'SASS' },
		{ logo: <SiBootstrap />, title: 'Bootstrap' },
		{ logo: <SiChakraui />, title: 'ChakaraUI' },
		{ logo: <SiMicrosoft />, title: 'Power Apps' },
		{ logo: <SiWordpress />, title: 'Wordpress' },
		{ logo: <SiNodedotjs />, title: 'NodeJS' },
		{ logo: <SiMongodb />, title: 'MongoDB' },
		{ logo: <SiExpress />, title: 'Express' },
		{ logo: <SiPython />, title: 'Python' },
		{ logo: <SiDjango />, title: 'Django' },
		{ logo: <SiPostgresql />, title: 'PostgreSQL' },
		{ logo: <SiMicrosoft />, title: 'Dataverse' },
		{ logo: <SiMicrosoft />, title: 'Power Automate' },
		{ logo: <SiPostman />, title: 'Postman' },
		{ logo: <SiInsomnia />, title: 'Insomnia' },
		{ logo: <SiYarn />, title: 'Yarn' },
		{ logo: <SiNpm />, title: 'npm' },
		{ logo: <SiHeroku />, title: 'Heroku' },
		{ logo: <SiGithub />, title: 'GitHub' },
	])
	return (
		<Stack id={'skills'} w={'100%'} h={'80vh'}>
			<VStack w={'100%'} mt={90} align={'center'}>
				<SkillGrid skills={skills} />
			</VStack>
		</Stack>
	)
}

export default Skills
