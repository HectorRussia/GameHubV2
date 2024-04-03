//import useData from "./useData";
import apiCilent from "../services/api-cilent";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { FetchRespone } from "../services/api-cilent";
export interface Genre {
    id:number;
    name:string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
        apiCilent
            .get<FetchRespone<Genre>>('/genres')
            .then(res=> res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h up to you set
    initialData: {count: genres.length , results: genres}
})


export default useGenres;