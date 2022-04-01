import { Container, VStack } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AboutMe from './components/about-me/AboutMe'
import ContactInfo from './components/contact-info/ContactInfo'
import DividerDiv from './components/miscellaneous/DividerDiv'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<VStack w={'100%'}>
				<AboutMe />
				<Container maxW={'container.lg'}>
					<Skills />
				</Container>
				<DividerDiv vh={'30vh'} title={'Projects'} />
				<Container maxW={'container.lg'}>
					<Projects />
				</Container>
				<ContactInfo />
			</VStack>
		</BrowserRouter>
	)
}

export default App
