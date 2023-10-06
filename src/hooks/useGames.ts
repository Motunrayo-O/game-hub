import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { DataResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = (selectedQuery: GameQuery) => {
  return useQuery<DataResponse<Game>, Error>({
    queryKey: ["games", selectedQuery],
    queryFn: () =>
      apiClient
        .get<DataResponse<Game>>("/games", {
          params: {
            genres: selectedQuery.genre?.id,
            parent_platforms: selectedQuery.platform?.id,
            ordering: selectedQuery.sortOrder,
            search: selectedQuery.searchTerm,
          },
        })
        .then((res) => res.data),
    staleTime: 2 * 60 * 1000, // 2min
  });
};

export default useGames;
