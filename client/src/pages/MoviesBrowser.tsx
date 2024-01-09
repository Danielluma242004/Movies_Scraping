import { useState, ChangeEvent, KeyboardEvent } from "react";
import { MovieCard } from "../components/MovieCard";

// Define la interfaz para las propiedades del componente SearchBar
interface SearchBarProps {
  onSearch: (query: string) => void; // La propiedad onSearch es una función que toma un parámetro string y no devuelve nada
}

// Componente funcional SearchBar
export function SearchBar({ onSearch }: SearchBarProps) {
  // Utiliza el hook useState para manejar el estado de la búsqueda
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Maneja el cambio en el input de búsqueda
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Maneja la pulsación de la tecla Enter en el input de búsqueda
  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchQuery); // Llama a la función onSearch con la consulta de búsqueda cuando se presiona Enter
    }
  };

  // Renderiza un input de búsqueda y un botón
  return (
    <div className="px-4 py-2 m-4">
      <h1 className="mb-4 text-5xl">Movie Search</h1>
      <div className="w-96 text-zinc-400 p-2 flex border-solid border-2 border-black  active:border-yellow-500 rounded-md justify-between items-center">
        <input
          type="text"
          className="focus:outline-none w-full"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
        />
        <button onClick={() => onSearch(searchQuery)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Componente funcional MoviesBrowser
export function MoviesBrowser() {
  // Utiliza el hook useState para manejar el estado de la consulta de búsqueda
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Maneja la búsqueda y actualiza el estado de la consulta
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Renderiza el componente SearchBar y el componente MovieCard
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchQuery !== "" ? (
        <div>
          <h1 className="p-4 m-4 mb-0 font-bold text-3xl flex items-center">
            <p className="mr-1 text-yellow-500 text-6xl font-thin">I</p>Search
            for "{searchQuery}"
          </h1>
          \
          <MovieCard movieQuery={searchQuery} />
        </div>
      ) : null}
    </div>
  );
}
