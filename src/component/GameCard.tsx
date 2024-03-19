import { Game } from '../hooks/useGames'
import { Card,CardBody,HStack,Heading,Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    game: Game
    name: string
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformiconList>    
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
