import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import SkillCard from './SkillCard'

function SkillGrid({ skills }) {
	return (
		<SimpleGrid id='skills' w={'100%'} columns={[3, 4, 6]} rowGap={6} columnGap={6}>
			{skills.current.map(({ logo, title }, i) => {
				return <SkillCard key={title} logo={logo} title={title} i={i} />
			})}
		</SimpleGrid>
	)
}

export default SkillGrid
