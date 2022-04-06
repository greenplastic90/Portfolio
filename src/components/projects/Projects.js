import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import placeHolder from '../../images/place-holder.png'
import spaceGame from '../../images/space-game.png'
import itvdb from '../../images/ITVDB.png'
import metups from '../../images/metups.png'
import giveaway from '../../images/giveaway-bae.png'
import Project from './components/Project'
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiExpress,
	SiNodedotjs,
	SiMongodb,
	SiBootstrap,
	SiSass,
	SiChakraui,
	SiPython,
	SiDjango,
	SiPostgresql,
} from 'react-icons/si'

function Projects() {
	const projects = useRef([
		{
			id: 1,
			image: giveaway,
			duration: '1 Week',
			team: 'Pair Programing',
			title: 'Giveaway Bae',
			technologies: [<SiReact />, <SiPython />, <SiDjango />, <SiPostgresql />, <SiChakraui />],
			gitHubURL: 'https://github.com/greenplastic90/SEI-Project-4/blob/main/README.md',
			projectURL: 'http://sei-giveaway-site.herokuapp.com',
			description:
				"We built a full stack app using React and chakra for the frontend and Python, Django, PostgreSQL for the backend. The idea behind Giveaway Bae is to create a community around companies/Influencers, by creating giveaways on the site with links that lead back to their social media. Your average user can get on the site and search for an item they're looking for, put it on their watch list, follow creator accounts and leave comments on giveaways posted. Both of us worked on the backend, I mainly worked on the navigation bar, dashboard and profile pages, giveaway form and giveaway cards.",
		},
		{
			id: 2,
			image: metups,
			duration: '1 Week',
			team: 'Team of 3',
			title: 'MetUps',
			technologies: [<SiReact />, <SiExpress />, <SiMongodb />, <SiBootstrap />, <SiChakraui />],
			gitHubURL: 'https://github.com/greenplastic90/SEI-Project-3',
			projectURL: 'https://metups.herokuapp.com',
			description:
				"As a group, we had one week to build a full stack app with React, Node.js, Express and MongoDB. MetUps is a site for people to post events they're having and RSVP to events others have created. Our RESTful API in the backend was worked on as a group. On the frontend, I worked mainly on functionality, registration, event creation form and error handling. The biggest part I worked on would be maps and the system that gives demo events. I created random locations based on the user's current location, which then provides those locations with real street names. The idea is to give the illusion of a populated site and what it would look like if there were events near anyone who logs into the site.",
		},
		{
			id: 3,
			image: itvdb,
			duration: '2 days',
			team: 'Pair Programing',
			title: 'ITVDB',
			technologies: [<SiReact />, <SiExpress />, <SiNodedotjs />, <SiBootstrap />, <SiSass />],
			gitHubURL: 'https://github.com/greenplastic90/SEI-Project-2',
			projectURL: 'https://sei-project-itvdb.netlify.app',
			description:
				'A 48 hour pair coding project, built with React, Express and Node.js. We built the functionality to search a third party TV-shows API by genre and keywords. My main contribution to the project would be the favouriting functionality, built by taking advantage of local storage.',
		},
		{
			id: 4,
			image: spaceGame,
			duration: '1 Week',
			team: 'Solo',
			title: 'Space Game',
			technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
			gitHubURL: 'https://github.com/greenplastic90/SEI-Project-1',
			projectURL: 'https://greenplastic90.github.io/SEI-Project-1/',
			description:
				'A one week solo project, built using HTML, CSS and JavaScript. I started by deciding to build a PacMan game, but once I got the main functions of PacMan and the ghosts done, I decided to challenge myself by turning PacMan into a spaceship that shoots missiles in 4 different directions and is on a mission to collect all the orbs. I learned so much about JavaScript Classes and their methods.',
		},
	])
	return (
		<VStack spacing={'15vh'} mb={100} mt={100}>
			{projects.current.map((project, i) => {
				return <Project key={project.id} project={project} i={i} />
			})}
		</VStack>
	)
}

export default Projects
