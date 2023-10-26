import Genre from "./Genre";
import Platform from "../entities/Platform";
import Publisher from "./Publisher";

interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  rating_top: number;
  metacritic: number;
}

export default Game;
