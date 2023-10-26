import { useQuery } from "@tanstack/react-query";
import APIClient, { DataResponse } from "../services/api-client";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailers = (id: number) => {
  const apiClientInstance = new APIClient<GameTrailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClientInstance.fetchData,
  });
};

export default useGameTrailers;
