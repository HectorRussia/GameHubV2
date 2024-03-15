import { useEffect, useState } from "react";
import apiCilent from "../services/api-cilent";

export interface Platform {
    id:number;
    name:string;
    slug:string
    
}
export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms:{platform:Platform}[]
}

interface FetcchGamesResponse {
    count:number;
    results: Game[]
}

const useGames = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        apiCilent
        .get<FetcchGamesResponse>('/games',{signal:controller.signal})
        .then(res=> setGames(res.data.results))
        .catch(err => setError(err.message));
        return () => controller.abort();
    },[]);

    return {games,error};
}

export default useGames;