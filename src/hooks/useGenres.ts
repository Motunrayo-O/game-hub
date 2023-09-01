import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  // const { data, isLoading, error } = useData<Genre>("/genres");

  return { data: genres, isLoading: false, error: null };
};

export default useGenres;
