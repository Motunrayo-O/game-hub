import useGenres from "./useGenres";

const useFindGenreById = (genreId?: number) => {
  const { data: genres } = useGenres();

  return genres.results.find((p) => p.id == genreId);
};
export default useFindGenreById;
