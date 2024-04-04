import APIClient, { FetchRespone } from "../services/api-cilent";
import { useInfiniteQuery} from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

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

const useGames = (gameQuery: GameQuery) => 
    useInfiniteQuery<FetchRespone<Game>,Error>({ 
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
        staleTime: 24 * 60 *60 * 1000 // 24h
    });

export default useGames;
