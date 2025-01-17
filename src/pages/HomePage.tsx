import { Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import GenreList from '../component/GenreList'
import GameHeading from '../component/GameHeading'
import PlatformSelector from '../component/PlatformSelector'
import SortSelector from '../component/SortSelector'
import GameGrid from '../component/GameGrid'

const HomePage = () => {
  return (
    <div>
      <Grid templateAreas={{
      base: ` "main" `,
      lg: `  "aside main" `
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr' 
    }}
    >
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Box paddingLeft={2}> 
          <GameHeading></GameHeading>
          <Flex  marginBottom={5}>
            <Box  marginRight={5}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
        </Box> 
        <GameGrid/>
      </GridItem>
    </Grid>
    </div>
  )
}
export default HomePage
