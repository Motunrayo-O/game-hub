import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { DataResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClientInstance = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<DataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClientInstance.fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
