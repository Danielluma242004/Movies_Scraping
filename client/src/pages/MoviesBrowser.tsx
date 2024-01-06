import { useState, ChangeEvent, KeyboardEvent } from "react";
import { MovieCard } from "../components/MovieCard";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchQuery);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyPress}
      />
      <button onClick={() => onSearch(searchQuery)}>Search</button>
    </div>
  );
}

export function MoviesBrowser() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieCard movieQuery={searchQuery} />
    </div>
  );
}
