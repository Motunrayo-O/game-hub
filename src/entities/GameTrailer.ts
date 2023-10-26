export interface GameTrailerData {
  480: string;
  max: string;
}

interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: GameTrailerData;
}

export default GameTrailer;
