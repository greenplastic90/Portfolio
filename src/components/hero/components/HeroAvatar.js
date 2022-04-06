import { AspectRatio, Image, VStack } from '@chakra-ui/react'
import myPhoto from '../../../images/me1.jpeg'
import React from 'react'

function HeroAvatar() {
	return (
		<VStack w={'100%'} justifyContent={'center'} zIndex={'50'}>
			<AspectRatio ratio={1} w={[220, 250, 350]}>
				<Image src={myPhoto} borderRadius='full' border={'4px solid'} p={3} />
			</AspectRatio>
		</VStack>
	)
}

export default HeroAvatar
