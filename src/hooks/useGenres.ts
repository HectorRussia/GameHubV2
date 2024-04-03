//import useData from "./useData";
import APIClient from "../services/api-cilent";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

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
    staleTime: 24 * 60 * 60 * 1000, // 24h up to you set
    initialData: {count: genres.length , results: genres}
})


export default useGenres;