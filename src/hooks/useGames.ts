import APIClient, { FetchRespone } from "../services/api-cilent";
import { useQuery } from "@tanstack/react-query";
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

const useGames = (gameQuery: GameQuery) => useQuery<FetchRespone<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => {
        return apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        });
    }
});

export default useGames;
