import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { DataResponse } from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClientInstance = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<DataResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClientInstance.fetchData,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
