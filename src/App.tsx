import { Box,Flex,Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './component/NavBar'
import GameGrid from './component/GameGrid'
import GenreList from './component/GenreList'
import { useState } from 'react'
import PlatformSelector from './component/PlatformSelector'
import SortSelector from './component/SortSelector'
import GameHeading from './component/GameHeading'

// undefined: the absence of a value
// null : the intenational absence of a value
export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
          <GenreList 
            selectedGenreId={gameQuery.genreId} 
            onSelectGenre={(genre)=> setGamequery({...gameQuery,genreId: genre.id})}/>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Box paddingLeft={2}> 
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex  marginBottom={5}>
            <Box  marginRight={5}>
              <PlatformSelector 
                selectedPlatformId={gameQuery.platformId} 
                onSelectPlatform={(platform)=>setGamequery({...gameQuery,platformId: platform.id})}>
                  
                </PlatformSelector>
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
