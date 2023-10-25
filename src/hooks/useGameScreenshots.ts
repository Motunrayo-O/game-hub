import { useQuery } from "@tanstack/react-query";
import { GameScreenshot } from "../entities/GameScreenshot";
import APIClient from "../services/api-client";

const useGameScreenshots = (id: number) => {
  const apiClientInstance = new APIClient<GameScreenshot>(
    `/games/${id}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClientInstance.fetchData,
  });
};

export default useGameScreenshots;
