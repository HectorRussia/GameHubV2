import { HStack,Image,Text } from '@chakra-ui/react'
import logo from '../assets/image0_0.jpg'
const NavBar = () => {
  return (
   <HStack>
        <Image src={logo} boxSize='60px' marginLeft='10px'></Image>
        <Text>NavBar</Text>
   </HStack>
  )
}

export default NavBar
