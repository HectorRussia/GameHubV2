import { useQuery } from "@tanstack/react-query";
import apiCilent from "../services/api-cilent";
import platforms from "../data/platforms";
import { FetchRespone } from "../services/api-cilent";
interface Platform {
    id:number;
    name:string;
    slug:string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
         apiCilent.get<FetchRespone<Platform>>('/platforms/lists/parents')
            .then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count : platforms.length, results: platforms}
});

export default usePlatforms;