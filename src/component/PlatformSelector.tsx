import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';
import usePlatforms from '../hooks/usePlatforms';


const PlatformSelector = () => {
  const {data,error} = usePlatforms();
  const setselectedPlatformId = useGameQueryStore(s=> s.setPlatformId);
  const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if(error) return null;
  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name || 'Platforms'}
    </MenuButton>
    <MenuList>
       {data?.results.map(platform=> <MenuItem onClick={()=> 
        setselectedPlatformId(platform.id)} 
        key={platform.id}>
          {platform.name}</MenuItem>)}
    </MenuList>
   </Menu>
  )
}

export default PlatformSelector
