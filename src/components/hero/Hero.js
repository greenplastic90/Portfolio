import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import bg from '../../images/place-holder-3.jpg'
import HeroAvatar from './components/HeroAvatar'
import HeroInfo from './components/HeroInfo'

function Hero({ bgAttachment }) {
	return (
		<Stack
			className='fix-for-iphone'
			w={'100%'}
			h={'100vh'}
			spacing={[10, null, 0]}
			direction={['column', null, 'row']}
			justify={'center'}
			align={'center'}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: bgAttachment,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
			color={'gray.100'}>
			<HeroAvatar />
			<HeroInfo />
		</Stack>
	)
}

export default Hero
