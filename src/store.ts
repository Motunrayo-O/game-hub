import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchTerm?: string;
}

export interface GameQueryStore {
  gameQuery: GameQuery;
  setPlatform: (id: number) => void;
  setGenre: (id: number) => void;
  setSearch: (searchTerm: string) => void;
  setSort: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setPlatform: (idToSet: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: idToSet },
    })),
  setGenre: (idToSet: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId: idToSet },
    })),
  setSort: (sortOrderToSet: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrderToSet },
    })),
  setSearch: (searchTermToSet: string) =>
    set(() => ({ gameQuery: { searchTerm: searchTermToSet } })),
}));

export default useGameQueryStore;
