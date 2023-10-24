import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

const DEFAULT_PAGE_SIZE = 20;

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
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

const useGames = () => {
  const selectedQuery = useGameQueryStore((s) => s.gameQuery);

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
    staleTime: ms("1m"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
