import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const DEFAULT_PAGE_SIZE = 20;

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
