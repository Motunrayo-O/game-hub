import { useQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import { Game } from "./useGames";

const useGameDetails = (slug: string) => {
  const apiClientInstance = new APIClient<Game>(`/games`);

  return useQuery<Game>({
    queryKey: ["games", slug],
    queryFn: () => apiClientInstance.fetchDetail(slug),
  });
};

export default useGameDetails;
