//import useData from "./useData";
import genres from "../data/genres";
import APIClient from "../services/api-cilent";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';

const apiCilent = new APIClient<Genre>('/genres');
export interface Genre {
    id:number;
    name:string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiCilent.getAll,
    staleTime: ms('24h'), // 24h up to you set
    initialData: genres
})


export default useGenres;