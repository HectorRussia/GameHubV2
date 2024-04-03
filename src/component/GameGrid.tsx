import { Box, Button, SimpleGrid,Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardCOntainer from './GameCardCOntainer';
import { GameQuery } from '../App';
import React from 'react';
interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const {data,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage} = useGames(gameQuery);
  const skeletons = [1,2,3,4,5,6];
  if(error) return <Text>{error.message}</Text>;
  return (
    <Box padding='10px'>
    <SimpleGrid 
        columns={{sm:1,md:2,lg:3,xl:4 }} 
        spacing={6}>

        {isLoading && skeletons.map(skeleton => 
        <GameCardCOntainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardCOntainer> )}
        {data?.pages.map((page,index) => (
          <React.Fragment key={index}>
            {page.results.map((game)=>(
              <GameCardCOntainer key={game.id}>
                <GameCard game={game} name={'game'} />
              </GameCardCOntainer>
            ))}
          </React.Fragment>
        ))}
    </SimpleGrid>
    {hasNextPage && <Button onClick={()=> fetchNextPage()} marginY={5}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </Box>
  )
}
export default GameGrid
