import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { DataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";

const DEFAULT_PAGE_SIZE = 20;

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

const apiClientInstance = new APIClient<Game>("/games");

const useGames = (selectedQuery: GameQuery) => {
  return useInfiniteQuery<DataResponse<Game>, Error>({
    queryKey: ["games", selectedQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClientInstance.fetchData({
        params: {
          genres: selectedQuery.genreId,
          parent_platforms: selectedQuery.platformId,
          ordering: selectedQuery.sortOrder,
          search: selectedQuery.searchTerm,
          page: pageParam,
        },
      }),
    staleTime: ms("2 min"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
