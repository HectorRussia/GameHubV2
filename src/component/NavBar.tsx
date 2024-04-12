import { HStack,Image} from '@chakra-ui/react'
import logo from '../assets/image0_0.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <HStack padding='10px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px' marginLeft='10px' objectFit='cover'></Image>
      </Link>
      <SearchInput/>
      <ColorModeSwitch/>
   </HStack>
  )
}

export default NavBar
