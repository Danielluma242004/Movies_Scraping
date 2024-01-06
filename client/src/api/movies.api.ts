import axios from "axios";
import { Movie } from "../types";

const moviesApi = axios.create({
  baseURL: "http://localhost:8000/movies/",
});

export const getMovies = async (movie: string): Promise<Movie[]> => {
  const response = await moviesApi.get(`/scrape/?q=${movie}`);
  return response.data.movies;
};
