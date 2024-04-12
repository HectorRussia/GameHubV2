import useTrailers from '../hooks/useTrailers'

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const {data,error,isLoading} = useTrailers(gameId);
    console.log(data);
    if(isLoading) return null;
    if(error) throw error;
    if(!data) return "No Vdio"
    const first = data?.results[0];
    return first ? (
        <video  src={data?.results[0]?.data[480]}
                poster={first?.preview}
                controls
        />
    ) : null; 
}

export default GameTrailer
