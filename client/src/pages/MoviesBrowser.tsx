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
    <div className="p-4 m-4">
      <input
        type="text"
        placeholder="Search for movies..."
        className="border-solid border-2 border-black mr-4 p-1"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <button
        className="bg-green-400 text-white p-1 rounded-xl"
        onClick={() => onSearch(searchQuery)}
      >
        Search
      </button>
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
      <SearchBar onSearch={handleSearch} />{" "}
      {/* Pasa la función handleSearch como prop a SearchBar */}
      <MovieCard movieQuery={searchQuery} />{" "}
      {/* Pasa el estado de la consulta como prop a MovieCard */}
    </div>
  );
}
