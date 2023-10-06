import { useQuery } from "@tanstack/react-query";
import apiClient, { DataResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<DataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePlatforms;
