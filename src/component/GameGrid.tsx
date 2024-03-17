import { SimpleGrid,Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardCOntainer from './GameCardCOntainer';

const GameGrid = () => {
   const {data,error,isLoading} = useGames();
   const skeletons = [1,2,3,4,5,6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid 
            columns={{sm:1,md:2,lg:3,xl:5 }} 
            padding='10px' 
            spacing={10}>

            {isLoading && skeletons.map(skeleton => 
            <GameCardCOntainer>
              <GameCardSkeleton key={skeleton}/>
            </GameCardCOntainer> )}

            {data.map((game) => 
            <GameCardCOntainer>
                <GameCard key={game.id} game={game} name={''} />
            </GameCardCOntainer>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
