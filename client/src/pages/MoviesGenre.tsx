import { useState } from "react";
import { MovieCardbyGenre } from "../components/MovieCardGenre";

interface SearchGenre {
  onSearch: (query: string) => void;
}

export function GenreButtons({ onSearch }: SearchGenre) {
  const handleButtonClick = (genre: string) => {
    onSearch(genre);
  };
  return (
    <div className="m-4 p-4">
      <h1 className="mb-3 font-bold text-3xl">Movies Genres</h1>
      <ul className="flex">
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("action")}>Action</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("adventure")}>
            Adventure
          </button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("animation")}>
            Animation
          </button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("comedy")}>Comedy</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("crime")}>Crime</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("drama")}>Drama</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("fantasy")}>Fantasy</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("horror")}>Horror</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("mistery")}>Mistery</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("romance")}>Romance</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("sci-fi")}>Sci-Fi</button>
        </li>
        <li className="mr-3 py-1 px-2 text-blue-700 border-solid border-2 border-blue-700 rounded-full">
          <button onClick={() => handleButtonClick("thriller")}>
            Thriller
          </button>
        </li>
      </ul>
    </div>
  );
}

export function MoviesGenre() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <GenreButtons onSearch={handleSearch} />
      {""}
      <MovieCardbyGenre movieQuery={searchQuery} />
      {""}
    </div>
  );
}
