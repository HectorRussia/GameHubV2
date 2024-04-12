import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-cilent";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiCilent = new APIClient<Platform>('/platforms/list/parents');
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:apiCilent.getAll,
    staleTime: ms('24h'), //24h
    initialData: platforms
});

export default usePlatforms;