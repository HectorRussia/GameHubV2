import { Box,Flex,Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './component/NavBar'
import GameGrid from './component/GameGrid'
import GenreList from './component/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './component/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './component/SortSelector'
import GameHeading from './component/GameHeading'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery,setGamequery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid templateAreas={{
      base: ` "nav" "main" `,
      lg: ` "nav nav"  "aside main" `
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr' 
    }}
    >
      <GridItem area='nav'>
        <NavBar onSearch={(searchText) => setGamequery({...gameQuery,searchText})}></NavBar>
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGamequery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Box paddingLeft={2}> 
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex  marginBottom={5}>
            <Box  marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGamequery({...gameQuery,platform})}></PlatformSelector>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGamequery({...gameQuery,sortOrder})}></SortSelector>
          </Flex>
        </Box> 
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
