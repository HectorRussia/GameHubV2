import  Game  from "../entities/Game"
import { Card,CardBody,HStack,Heading,Image } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
    game: Game
    name: string
}

const GameCard = ({game}:Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
              <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformiconList>    
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'>
              <Link to={'/games/'+game.slug}>{game.name}</Link>
              <Emoji rating={game.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
