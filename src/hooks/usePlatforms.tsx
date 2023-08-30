import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>(
    "/platforms/lists/parents"
  );

  return { data, error };
};

export default usePlatforms;
