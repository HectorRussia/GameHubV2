import APIClient, { FetchRespone } from "../services/api-cilent";
import { useInfiniteQuery} from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games');
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
}

const useGames = () => {
    const gameQuery = useGameQueryStore(s=> s.gameQuery);
    return useInfiniteQuery<FetchRespone<Game>,Error>({ 
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => {
            return apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            })
        },
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
         initialPageParam:1,
        staleTime: ms('24h') // 24h
    });
}
export default useGames;
