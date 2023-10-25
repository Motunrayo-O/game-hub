import { useQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import { Game } from "../entities/Game";


const apiClientInstance = new APIClient<Game>(`/games`);

const useGameDetails = (slug: string) => {
  return useQuery<Game>({
    queryKey: ["games", slug],
    queryFn: () => apiClientInstance.fetchDetail(slug),
  });
};

export default useGameDetails;
