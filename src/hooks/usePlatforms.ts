import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-cilent";
import ms from "ms";

const apiCilent = new APIClient<Platform>('/platforms/list/parents');
export interface Platform {
    id:number;
    name:string;
    slug:string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:apiCilent.getAll,
    staleTime: ms('24h'), //24h
    initialData: platforms
});

export default usePlatforms;