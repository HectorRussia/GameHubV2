import { HStack,Image} from '@chakra-ui/react'
import logo from '../assets/image0_0.jpg'
import ColorModeSwitch from './ColorModeSwitch'
const NavBar = () => {
  return (
   <HStack  justifyContent='space-between'>
        <Image src={logo} boxSize='60px' marginLeft='10px'></Image>
        <ColorModeSwitch/>
   </HStack>
  )
}

export default NavBar
