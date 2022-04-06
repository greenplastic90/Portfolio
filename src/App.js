import { Container, VStack } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/hero/Hero'
import ContactInfo from './components/contact-info/ContactInfo'
import DividerDiv from './components/miscellaneous/DividerDiv'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import AboutMe from './components/about-me/AboutMe'
import { useEffect, useState } from 'react'

function App() {
	const [bgAttachment, setBgAttachment] = useState('fixed')
	function iOS() {
		return (
			['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
				navigator.platform
			) ||
			// iPad on iOS 13 detection
			(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
		)
	}

	useEffect(() => {
		if (iOS()) setBgAttachment('')
	}, [])
	return (
		<BrowserRouter>
			<Navbar />
			<VStack id='top' w={'100%'}>
				<Hero bgAttachment={bgAttachment} />
				<Container maxW={'container.lg'}>
					<Skills />
					<AboutMe />
				</Container>
				<DividerDiv bgAttachment={bgAttachment} vh={150} title={'Projects'} />
				<Container maxW={'container.lg'}>
					<Projects />
				</Container>
				<ContactInfo bgAttachment={bgAttachment} />
			</VStack>
		</BrowserRouter>
	)
}

export default App
