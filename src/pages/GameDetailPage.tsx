import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../component/ExpandableText";
import GameAttribute from "../component/GameAttribute";
import GameTrailer from "../component/GameTrailer";
import GameScreenshots from "../component/GameScreenshots";

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data:game,isLoading,error} = useGame(slug!);// we tell compiler ts this const never be undefined or null
  if(isLoading) return <Spinner/>
  if(error || !game ) throw error; //game' is possibly 'undefined
  return (
    <SimpleGrid columns={{base:1,md:2}} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttribute game={game}></GameAttribute>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage
