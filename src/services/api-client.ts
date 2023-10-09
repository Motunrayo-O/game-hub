import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface DataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b580e3dd79f47a28ae6abab6906057e",
  },
});


class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  fetchData = (requestConfig: AxiosRequestConfig) => {
    return axiosInstance
      .get<DataResponse<T>>(this.endPoint, requestConfig)
      .then((res) => res.data);
  };
}

export default APIClient;

export { CanceledError };
