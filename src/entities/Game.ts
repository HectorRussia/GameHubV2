import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publishers } from "./Publisher";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    publishers: Publishers[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    rating: number;
    slug: string;
    description_raw: string;
}
