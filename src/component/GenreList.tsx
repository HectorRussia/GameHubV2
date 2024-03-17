import { HStack, List, ListItem,Image,Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const {data} = useGenres();
  return (
   <>
    <List >
        {data.map(genre => 
          <ListItem key={genre.id} padding='5px'>
            <HStack>
              <Image 
                boxSize='32px' 
                borderRadius={8} 
                src={genre.image_background}/>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>)}
    </List>
   </>
  )
}

export default GenreList