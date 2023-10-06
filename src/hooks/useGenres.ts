import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { DataResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {

  const fetchQueries = () =>
    apiClient.get<DataResponse<Genre>>("/genres").then((res) => res.data);

  return useQuery<DataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: fetchQueries,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
