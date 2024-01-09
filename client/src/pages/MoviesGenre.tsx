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
    <div className="m-4 mb-0 p-4">
      <h1 className="flex items-center mb-3 font-bold text-3xl">
        <p className="mr-1 text-yellow-500 text-6xl font-thin">I</p>Movies
        Genres
      </h1>
      <ul className="flex flex-wrap">
        <li>
          <button
            onClick={() => handleButtonClick("action")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white text-md"
          >
            Action
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("adventure")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Adventure
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("animation")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Animation
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("comedy")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Comedy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("crime")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Crime
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("drama")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Drama
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("fantasy")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Fantasy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("horror")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Horror
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("mistery")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Mistery
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("romance")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Romance
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("sci-fi")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
            Sci-Fi
          </button>
        </li>
        <li>
          <button
            onClick={() => handleButtonClick("thriller")}
            className="mr-3 mb-3 py-1 px-2 text-blue-800 border-solid border-2 border-blue-800 rounded-full hover:bg-blue-100 focus:bg-blue-700 focus:text-white"
          >
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
      {searchQuery !== "" ? (
        <div>
          <h1 className="p-4 m-4 mb-0 mt-0 font-bold text-3xl flex items-center">
            <p className="mr-1 text-yellow-500 text-6xl font-thin">I</p>Search
            for "{searchQuery}"
          </h1>
          <MovieCardbyGenre movieQuery={searchQuery} />
        </div>
      ) : null}
    </div>
  );
}
