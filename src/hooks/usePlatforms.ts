import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-cilent";

const apiCilent = new APIClient<Platform>('/platforms/list/parents');
export interface Platform {
    id:number;
    name:string;
    slug:string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:apiCilent.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count : platforms.length, results: platforms}
});

export default usePlatforms;