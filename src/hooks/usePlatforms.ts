import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClientInstance = new APIClient<Platform>("/platforms/lists/parents");





// test vercel build issue
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClientInstance.fetchData,
    initialData: platforms,
    staleTime: ms("24h"),
  });
};

export default usePlatforms;
