import { HStack,Image} from '@chakra-ui/react'
import logo from '../assets/image0_0.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
   <HStack padding='10px'>
        <Image src={logo} boxSize='60px' marginLeft='10px'></Image>
        <SearchInput/>
        <ColorModeSwitch/>
   </HStack>
  )
}

export default NavBar
