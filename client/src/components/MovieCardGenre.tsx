import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../api/movies.api";
import { Movie } from "../types"; // Importa el tipo Movie desde el archivo de tipos

// Define una interfaz para las propiedades del componente MovieCard
interface MovieCardProps {
  movieQuery: string; // Propiedad que representa el término de búsqueda de películas
}

// Define el componente funcional MovieCard
export function MovieCardbyGenre({ movieQuery }: MovieCardProps) {
  // Utiliza el estado local para gestionar la lista de películas, el estado de carga y los errores
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Utiliza el hook useEffect para realizar acciones después de que el componente se monta o se actualiza
  useEffect(() => {
    // Define una función asincrónica llamada loadMovies para cargar las películas
    async function loadMovies() {
      try {
        // Verifica si el término de búsqueda está vacío y evita la llamada a la API
        if (movieQuery.trim() === "") {
          setMovies([]); // Establece la lista de películas como vacía
          return;
        }

        setLoading(true); // Establece el estado de carga como true
        const response = await getMoviesByGenre(movieQuery); // Realiza la llamada a la API para obtener películas
        setMovies(response); // Actualiza el estado con las películas obtenidas
      } catch (error) {
        console.error("Error cargando películas: ", error);
        setError(
          "Error al cargar las películas. Por favor, inténtalo de nuevo."
        ); // Captura y maneja errores durante la carga de películas
      } finally {
        setLoading(false); // Independientemente del resultado, establece el estado de carga como false
      }
    }

    loadMovies(); // Llama a la función de carga de películas
  }, [movieQuery]); // Dependencia para el hook useEffect, se ejecutará cuando movieQuery cambie

  // Renderiza diferentes componentes según el estado del componente
  if (loading) {
    return (
      <div role="status" className="m-4 p-4">
        <svg
          aria-hidden="true"
          className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    ); // Muestra un mensaje de carga si el estado de carga es true
  }

  if (error) {
    return <div>{error}</div>; // Muestra un mensaje de error si hay un error durante la carga
  }

  // Renderiza la lista de películas si no hay errores ni carga en progreso
  return (
    <div className="m-4 p-4 ">
      <div className="border-solid border-2 border-zinc-400 rounded-lg">
        {movies.map((movie, index) => (
          <div key={index} className=" p-3 m-4 w-auto">
            <div className="flex">
              {movie.image && <img src={movie.image} alt={movie.title} />}{" "}
              <div className="ml-4">
                <h3 className="font-bold">{movie.title}</h3>
                <div className="flex">
                  <p className="text-zinc-500">{movie.year}</p>
                  <p className="text-zinc-500">{movie.duration}</p>
                  <p className="text-zinc-500">{movie.rating}</p>
                </div>
                <div className="flex">
                  <p className="text-zinc-500">{movie.stars}</p>
                  <p className="text-zinc-500">{movie.metascore}</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-500">{movie.movie_description}</p>
            <p className="text-zinc-500">{movie.vots}</p>
            <hr className="mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
