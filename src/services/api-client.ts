import axios, { CanceledError } from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b580e3dd79f47a28ae6abab6906057e",
  },
});

export { CanceledError };
