import { useEffect, useState } from "react";
import { getMovies } from "../api/movies.api";
import { Movie } from "../types";

interface MovieCardProps {
  movieQuery: string;
}

export function MovieCard({ movieQuery }: MovieCardProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        if (movieQuery.trim() === "") {
          // Evitar llamada a la API si el término de búsqueda está vacío
          setMovies([]);
          return;
        }

        setLoading(true);
        const response = await getMovies(movieQuery);
        setMovies(response);
      } catch (error) {
        console.error("Error cargando peliculas: ", error);
        setError(
          "Error al cargar las películas. Por favor, inténtalo de nuevo."
        );
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [movieQuery]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <p>{movie.cast}</p>
          {movie.image && <img src={movie.image} alt={movie.title} />}
        </div>
      ))}
    </div>
  );
}
